import {SiteMenuView} from "./view/site-menu.js";
import {TripPresenter} from "./presenter/trip.js";
import {TripEventsModel} from "./model/trip-events.js";
import {FiltersModel} from "./model/filters.js";
import {FiltersPresenter} from "./presenter/filters.js";
import {generateTripEvent} from "./mock/trip-event.js";
import {generateOptions} from "./mock/event-options.js";
import {generateDestinationsList} from "./mock/destinations.js";
import {RenderPosition, renderElement} from "./utils/render.js";

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

// Рендер меню

renderElement(tripControlsElement, new SiteMenuView(), RenderPosition.BEFOREEND);

// Рендер фильтра

filterPresenter.init();

// Рендер маршрута

tripPresenter.init(eventOptions, destinationsList);


document.querySelector(`.trip-main__event-add-btn`).addEventListener(`click`, (evt) => {
  evt.preventDefault();
  tripPresenter.createTripEvent();
});
