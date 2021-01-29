import SiteMenuView from "./view/site-menu.js";
import StatisticsView from "./view/statistics.js";
import TripPresenter from "./presenter/trip.js";
import TripEventsModel from "./model/trip-events.js";
import FiltersModel from "./model/filters.js";
import FiltersPresenter from "./presenter/filters.js";
import Api from "./api.js";
import {RenderPosition, renderElement, remove} from "./utils/render.js";
import {FilterType, MenuItem, UpdateType} from "./const.js";


const AUTHORIZATION = `Basic 3NuPhit3IOpHoEC`;
const END_POINT = `https://13.ecmascript.pages.academy/big-trip`;

const tripMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripsEventsElement = document.querySelector(`.trip-events`);

const siteMenuComponent = new SiteMenuView();

const api = new Api(END_POINT, AUTHORIZATION);
const tripEventsModel = new TripEventsModel();

const filtersModel = new FiltersModel();
const filterPresenter = new FiltersPresenter(tripControlsElement, filtersModel);

Promise.all([
  api.getTripEvents(),
  api.getDestinations(),
  api.getOptions()
]).then(([tripEvents, destinations, options]) => {
  tripEventsModel.setDestinationsList(destinations);
  tripEventsModel.setOptionsList(options);
  tripEventsModel.setTripEvents(UpdateType.INIT, tripEvents);

  renderElement(tripControlsElement, siteMenuComponent, RenderPosition.BEFOREEND);
  siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);
  filterPresenter.init();
}).catch(() => {
  tripEventsModel.setTripEvents(UpdateType.INIT, []);

  renderElement(tripControlsElement, siteMenuComponent, RenderPosition.BEFOREEND);
  siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);
  filterPresenter.init();
});


let statisticsComponent = null;

const tripPresenter = new TripPresenter(tripsEventsElement, tripMainElement, tripEventsModel, filtersModel, api);
tripPresenter.init();

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.TABLE:
      tripPresenter.deleteTripEventsList();
      tripPresenter.init();
      filtersModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
      remove(statisticsComponent);
      tripsEventsElement.style.backgroundColor = `transparent`;
      break;
    case MenuItem.STATS:
      tripPresenter.deleteTripEventsList();
      statisticsComponent = new StatisticsView(tripEventsModel.getTripEvents());
      renderElement(tripsEventsElement, statisticsComponent, RenderPosition.BEFOREEND);
      tripsEventsElement.style.backgroundColor = `#f2f2f2`;
      // Из-за того что вертикальная линия сбоку страницы является псевдоэлементом .page-body__container самым аккуратным
      // способом ее убрать на экране статистике я считаю задать контейнеру статистики фоновый цвет соответствующий основного фона страницы
      break;
  }
};

const newEventButtonElement = document.querySelector(`.trip-main__event-add-btn`);


newEventButtonElement.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  if (statisticsComponent !== null) {
    remove(statisticsComponent);
    tripPresenter.deleteTripEventsList();
    tripPresenter.init();
    tripsEventsElement.style.backgroundColor = `transparent`;
  }

  siteMenuComponent.setMenuItem(MenuItem.TABLE);
  tripPresenter.createTripEvent(newEventButtonElement);
});
