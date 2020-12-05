import {TripInformationView} from "./view/trip-information";
import {TripPriceView} from "./view/trip-price";
import {SiteMenuView} from "./view/site-menu";
import {FiltersView} from "./view/filters";
import {SortingView} from "./view/sorting";
import {EventsListView} from "./view/events-list";
import {EventEditorView} from "./view/event-editor";
import {TripEventView} from "./view/trip-event";
import {NoEvent} from "./view/no-event";
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

const tripMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripsEventsElement = document.querySelector(`.trip-events`);

// Рендер меню

renderElement(tripControlsElement, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);

// Рендер фильтра

renderElement(tripControlsElement, new FiltersView().getElement(), RenderPosition.BEFOREEND);

const renderTrip = (events) => {

  if (events.length === 0) {
    renderElement(tripsEventsElement, new NoEvent().getElement(), RenderPosition.BEFOREEND);
    return;
  }

  const routeDetails = calculateRouteDetails(events);

  // Рендер информации о путешествии

  const tripInformationComponent = new TripInformationView(routeDetails);

  renderElement(tripMainElement, tripInformationComponent.getElement(), RenderPosition.AFTERBEGIN);

  // Рендер цены

  renderElement(tripInformationComponent.getElement(), new TripPriceView(routeDetails).getElement(), RenderPosition.BEFOREEND);

  // Рендер сортировки

  renderElement(tripsEventsElement, new SortingView().getElement(), RenderPosition.BEFOREEND);

  // Рендер списка событий

  const eventListComponent = new EventsListView();

  renderElement(tripsEventsElement, eventListComponent.getElement(), RenderPosition.BEFOREEND);

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

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        evt.preventDefault();
        replaceFormToCard();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    const onTripEventRollDownButtonClick = () => {
      replaceCardToForm();
      document.addEventListener(`keydown`, onEscKeyDown);
    };

    tripEventComponent
      .getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, onTripEventRollDownButtonClick);

    const onEventEditorRollUpButtonClick = (evt) => {
      evt.preventDefault();
      replaceFormToCard();
      document.removeEventListener(`keydown`, onEscKeyDown);
    };

    eventEditorComponent
      .getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, onEventEditorRollUpButtonClick);

    const onEventEditorSubmit = (evt) => {
      evt.preventDefault();
      replaceFormToCard();
      document.removeEventListener(`keydown`, onEscKeyDown);
    };

    eventEditorComponent
      .getElement()
      .querySelector(`.event--edit`)
      .addEventListener(`submit`, onEventEditorSubmit);

    renderElement(eventListElement, tripEventComponent.getElement(), RenderPosition.BEFOREEND);
  };

  for (let i = 0; i < EVENT_COUNT; i++) {
    renderTripEvent(eventListComponent.getElement(), events[i]);
  }
};

renderTrip(tripEvents);
