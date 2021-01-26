import {SiteMenuView} from "./view/site-menu.js";
import {StatisticsView} from "./view/statistics.js";
import {TripPresenter} from "./presenter/trip.js";
import {TripEventsModel} from "./model/trip-events.js";
import {FiltersModel} from "./model/filters.js";
import {FiltersPresenter} from "./presenter/filters.js";
import {generateTripEvent} from "./mock/trip-event.js";
import {generateOptions} from "./mock/event-options.js";
import {generateDestinationsList} from "./mock/destinations.js";
import {RenderPosition, renderElement, remove} from "./utils/render.js";
import {MenuItem} from "./const.js";

const EVENT_COUNT = 20;

const eventOptions = generateOptions();
const destinationsList = generateDestinationsList();

const tripEvents = new Array(EVENT_COUNT)
  .fill()
  .map(() => generateTripEvent(eventOptions, destinationsList));

const tripEventsModel = new TripEventsModel();
tripEventsModel.setTripEvents(tripEvents);

const filtersModel = new FiltersModel();

const tripMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripsEventsElement = document.querySelector(`.trip-events`);

const tripPresenter = new TripPresenter(tripsEventsElement, tripMainElement, tripEventsModel, filtersModel);
const filterPresenter = new FiltersPresenter(tripControlsElement, filtersModel);

const siteMenuComponent = new SiteMenuView();
renderElement(tripControlsElement, siteMenuComponent, RenderPosition.BEFOREEND);

let statisticsComponent = null;
tripPresenter.init(eventOptions, destinationsList);

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.TABLE:
      tripPresenter.init(eventOptions, destinationsList);
      remove(statisticsComponent);
      break;
    case MenuItem.STATS:
      tripPresenter.deleteTripEventsList();
      statisticsComponent = new StatisticsView(tripEventsModel.getTripEvents());
      renderElement(tripsEventsElement, statisticsComponent, RenderPosition.BEFOREEND);
      break;
  }
};

siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);

filterPresenter.init();

document.querySelector(`.trip-main__event-add-btn`).addEventListener(`click`, (evt) => {
  evt.preventDefault();
  tripPresenter.createTripEvent();
  siteMenuComponent.setMenuItem(MenuItem.TABLE);

  if (statisticsComponent !== null) {
    tripPresenter.init(eventOptions, destinationsList);
    remove(statisticsComponent);
  }
});
