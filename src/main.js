import {TripInformationView} from "./view/trip-information";
import {TripPriceView} from "./view/trip-price";
import {SiteMenuView} from "./view/site-menu";
import {FiltersView} from "./view/filters";
import {SortingView} from "./view/sorting";
import {EventsListView} from "./view/events-list";
import {NewEventCreatorView} from "./view/new-event-creator";
import {EventEditorView} from "./view/event-editor";
import {TripEventView} from "./view/trip-event";
import {generateTripEvent} from "./mock/trip-event";
import {generateOptions} from "./mock/event-options";
import {calculateRouteDetails} from "./route";
import {renderElement, RenderPosition} from "./utils";

const EVENT_COUNT = 20;

const eventOptions = generateOptions();
const tripEvents = new Array(EVENT_COUNT)
  .fill()
  .map(() => generateTripEvent(eventOptions))
  .sort((a, b) => a.time.start - b.time.start);

const routeDetails = calculateRouteDetails(tripEvents);

// Рендер информации о путешествии

const tripMainElement = document.querySelector(`.trip-main`);

const tripInformationComponent = new TripInformationView(routeDetails);

renderElement(tripMainElement, tripInformationComponent.getElement(), RenderPosition.AFTERBEGIN);

// Рендер цены

renderElement(tripInformationComponent.getElement(), new TripPriceView(routeDetails).getElement(), RenderPosition.BEFOREEND);

// Рендер меню

const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);

renderElement(tripControlsElement, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);

// Рендер фильтра

renderElement(tripControlsElement, new FiltersView().getElement(), RenderPosition.BEFOREEND);

// Рендер сортировки

const tripsEventsElement = document.querySelector(`.trip-events`);

renderElement(tripsEventsElement, new SortingView().getElement(), RenderPosition.BEFOREEND);

// Рендер списка событий

const eventListComponent = new EventsListView();

renderElement(tripsEventsElement, eventListComponent.getElement(), RenderPosition.BEFOREEND);

// Рендер элемента для создания точек маршрута

renderElement(eventListComponent.getElement(), new NewEventCreatorView().getElement(), RenderPosition.BEFOREEND);

// Рендер точек маршрута

const renderTripEvent = (eventListElement, tripEvent) => {
  const tripEventComponent = new TripEventView(tripEvent);
  const eventEditorComponent = new EventEditorView(tripEvent, eventOptions);

  const replaceCardToForm = () => {
    eventListElement.replaceChild(eventEditorComponent.getElement(), tripEventComponent.getElement());
  };

  const replaceFormToCard = () => {
    eventListElement.replaceChild(tripEventComponent.getElement(), eventEditorComponent.getElement());
  };

  const onTripEventRollDownButtonClick = () => {
    replaceCardToForm();
  };

  tripEventComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, onTripEventRollDownButtonClick);

  const onEventEditorSubmit = (evt) => {
    evt.preventDefault();
    replaceFormToCard();
  };

  eventEditorComponent.getElement().querySelector(`.event--edit`).addEventListener(`submit`, onEventEditorSubmit);

  renderElement(eventListElement, tripEventComponent.getElement(), RenderPosition.BEFOREEND);
};

for (let i = 0; i < EVENT_COUNT; i++) {
  renderTripEvent(eventListComponent.getElement(), tripEvents[i]);
}
