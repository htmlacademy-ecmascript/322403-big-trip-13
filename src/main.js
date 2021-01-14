import {SiteMenuView} from "./view/site-menu.js";
import {FiltersView} from "./view/filters.js";
import {TripPresenter} from "./presenter/trip.js";
import {generateTripEvent} from "./mock/trip-event.js";
import {generateOptions} from "./mock/event-options.js";
import {generateDestinationsList} from "./mock/destinations.js";
import {RenderPosition, renderElement} from "./utils/render.js";

const EVENT_COUNT = 20;

const eventOptions = generateOptions();
const destinationsList = generateDestinationsList();

const tripEvents = new Array(EVENT_COUNT)
  .fill()
  .map(() => generateTripEvent(eventOptions, destinationsList))
  .sort((a, b) => a.timeStart - b.timeStart);

const tripMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripsEventsElement = document.querySelector(`.trip-events`);

const tripPresenter = new TripPresenter(tripsEventsElement, tripMainElement);

// Рендер меню

renderElement(tripControlsElement, new SiteMenuView(), RenderPosition.BEFOREEND);

// Рендер фильтра

renderElement(tripControlsElement, new FiltersView(), RenderPosition.BEFOREEND);

// Рендер маршрута

tripPresenter.init(tripEvents, eventOptions, destinationsList);
