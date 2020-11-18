import {createTripInformationTemplate} from "./view/trip-information";
import {createTripPriceTemplate} from "./view/trip-price";
import {createSiteMenuTemplate} from "./view/site-menu";
import {createFiltersTemplate} from "./view/filters";
import {createSortingTemplate} from "./view/sorting";
import {createEventsListTemplate} from "./view/events-list";
import {createNewEventCreatorTemplate} from "./view/new-event-creator";
import {createEventEditorTemplate} from "./view/event-editor";
import {createTripEventTemplate} from "./view/trip-event";

const EVENT_COUNT = 3;

const renderElement = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// Рендер информации о путешествии

const tripMainElement = document.querySelector(`.trip-main`);

renderElement(tripMainElement, createTripInformationTemplate(), `afterBegin`);

// Рендер цены

const tripInformationElement = tripMainElement.querySelector(`.trip-info`);

renderElement(tripInformationElement, createTripPriceTemplate(), `beforeEnd`);

// Рендер меню

const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripMenuTitle = tripControlsElement.querySelector(`.trip-controls h2`);

renderElement(tripMenuTitle, createSiteMenuTemplate(), `afterEnd`);

// Рендер фильтра

renderElement(tripControlsElement, createFiltersTemplate(), `beforeEnd`);

// Рендер сортировки

const tripsEventsElement = document.querySelector(`.trip-events`);

renderElement(tripsEventsElement, createSortingTemplate(), `beforeEnd`);

// Рендер списка событий

renderElement(tripsEventsElement, createEventsListTemplate(), `beforeEnd`);

// Рендер элемента для создания точек маршрута

const eventListElement = tripsEventsElement.querySelector(`.trip-events__list`);

renderElement(eventListElement, createNewEventCreatorTemplate(), `beforeEnd`);

// Рендер элемента для изменения точек маршрута

renderElement(eventListElement, createEventEditorTemplate(), `beforeEnd`);

// Рендер точек маршрута

for (let i = 0; i < EVENT_COUNT; i++) {
  renderElement(eventListElement, createTripEventTemplate(), `beforeEnd`);
}
