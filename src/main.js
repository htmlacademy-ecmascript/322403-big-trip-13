import {SiteMenuView} from "./view/site-menu.js";
import {StatisticsView} from "./view/statistics.js";
import {TripPresenter} from "./presenter/trip.js";
import {TripEventsModel} from "./model/trip-events.js";
import {FiltersModel} from "./model/filters.js";
import {FiltersPresenter} from "./presenter/filters.js";
import {RenderPosition, renderElement, remove} from "./utils/render.js";
import {MenuItem, UpdateType} from "./const.js";
import {Api} from "./api.js";

const AUTHORIZATION = `Basic 3NufuPt3IOpHoEC`;
const END_POINT = `https://13.ecmascript.pages.academy/big-trip`;

const tripMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripsEventsElement = document.querySelector(`.trip-events`);

const siteMenuComponent = new SiteMenuView();

const api = new Api(END_POINT, AUTHORIZATION);
const tripEventsModel = new TripEventsModel();

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
}).catch(() => {
  tripEventsModel.setTripEvents(UpdateType.INIT, []);

  renderElement(tripControlsElement, siteMenuComponent, RenderPosition.BEFOREEND);
  siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);
});

const filtersModel = new FiltersModel();
const filterPresenter = new FiltersPresenter(tripControlsElement, filtersModel);
filterPresenter.init();


let statisticsComponent = null;

const tripPresenter = new TripPresenter(tripsEventsElement, tripMainElement, tripEventsModel, filtersModel, api);
tripPresenter.init();

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.TABLE:
      tripPresenter.init();
      remove(statisticsComponent);
      break;
    case MenuItem.STATS:
      tripPresenter.deleteTripEventsList();
      statisticsComponent = new StatisticsView(tripEventsModel.getTripEvents());
      renderElement(tripsEventsElement, statisticsComponent, RenderPosition.BEFOREEND);
      break;
  }
};


document.querySelector(`.trip-main__event-add-btn`).addEventListener(`click`, (evt) => {
  evt.preventDefault();
  tripPresenter.createTripEvent();
  siteMenuComponent.setMenuItem(MenuItem.TABLE);

  if (statisticsComponent !== null) {
    tripPresenter.init();
    remove(statisticsComponent);
  }
});
