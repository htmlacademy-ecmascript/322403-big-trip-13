import {SiteMenuView} from "./view/site-menu.js";
import {FiltersView} from "./view/filters.js";
import {TripPresenter} from "./presenter/trip.js";
import {TripDetailsPresenter} from "./presenter/trip-details.js";
import {generateTripEvent} from "./mock/trip-event.js";
import {generateOptions} from "./mock/event-options.js";
import {calculateRouteDetails} from "./route.js";
import {RenderPosition, renderElement} from "./utils/render.js";

const EVENT_COUNT = 20;

const eventOptions = generateOptions();
const tripEvents = new Array(EVENT_COUNT)
  .fill()
  .map(() => generateTripEvent(eventOptions))
  .sort((a, b) => a.time.start - b.time.start);

const tripMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripsEventsElement = document.querySelector(`.trip-events`);

const tripPresenter = new TripPresenter(tripsEventsElement);
const tripDetailsPresenter = new TripDetailsPresenter(tripMainElement);

const routeDetails = calculateRouteDetails(tripEvents);

// Рендер информации о путешествии

tripDetailsPresenter.init(routeDetails);

// Рендер меню

renderElement(tripControlsElement, new SiteMenuView(), RenderPosition.BEFOREEND);

// Рендер фильтра

renderElement(tripControlsElement, new FiltersView(), RenderPosition.BEFOREEND);

// Рендер маршрута

tripPresenter.init(tripEvents, eventOptions);
