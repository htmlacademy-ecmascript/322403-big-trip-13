import {EventsListView} from "../view/events-list.js";
import {NoEvent} from "../view/no-event.js";
import {SortingView} from "../view/sorting.js";
import {TripEventPresenter} from "./trip-event.js";
import {renderElement, RenderPosition} from "../utils/render.js";
import {updateItem} from "../utils/common.js";
import {calculateRouteDetails} from "../route.js";
import {TripInformationView} from "../view/trip-information";
import {TripPriceView} from "../view/trip-price";

class TripPresenter {
  constructor(tripContainer, tripDetailsContainer) {
    this._tripContainer = tripContainer;
    this._tripDetailsContainer = tripDetailsContainer;
    this._tripEventPresenter = {};

    this._eventsListComponent = new EventsListView();
    this._noEventComponent = new NoEvent();
    this._sortingComponent = new SortingView();

    this._handleTripEventChange = this._handleTripEventChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
  }

  init(tripEvents, eventOptions) {
    this._tripEvents = tripEvents.slice();
    this._eventOptions = eventOptions.slice();
    this._routeDetails = calculateRouteDetails(this._tripEvents);

    this._renderTrip();
  }

  _handleTripEventChange(updatedTripEvent) {
    this._tripEvents = updateItem(this._tripEvents, updatedTripEvent);
    this._tripEventPresenter[updatedTripEvent.id].init(updatedTripEvent, this._eventOptions);
  }

  _handleModeChange() {
    Object.values(this._tripEventPresenter).forEach((presenter) => presenter.resetView());
  }

  _renderSort() {
    renderElement(this._tripContainer, this._sortingComponent, RenderPosition.BEFOREEND);
  }

  _renderEventsList() {
    renderElement(this._tripContainer, this._eventsListComponent, RenderPosition.BEFOREEND);
  }

  _renderTripInformation() {
    this._tripInformationComponent = new TripInformationView(this._routeDetails);
    renderElement(this._tripDetailsContainer, this._tripInformationComponent, RenderPosition.AFTERBEGIN);
  }

  _renderTripPrice() {
    this._tripPriceComponent = new TripPriceView(this._routeDetails);
    renderElement(this._tripInformationComponent, this._tripPriceComponent, RenderPosition.BEFOREEND);
  }

  _renderTripEvent(tripEvent, eventOptions) {
    const tripEventPresenter = new TripEventPresenter(this._eventsListComponent, this._handleTripEventChange, this._handleModeChange);
    tripEventPresenter.init(tripEvent, eventOptions);
    this._tripEventPresenter[tripEvent.id] = tripEventPresenter;
  }

  _renderTripEvents() {
    this._tripEvents
      .forEach((tripEvent) => this._renderTripEvent(tripEvent, this._eventOptions));
  }

  _renderNoEvent() {
    renderElement(this._tripContainer, this._noEventComponent, RenderPosition.BEFOREEND);
  }

  _renderTrip() {
    if (this._tripEvents.length === 0) {
      this._renderNoEvent();
      return;
    }

    // Рендер сортировки

    this._renderSort();

    // Рендер списка событий

    this._renderEventsList();

    // Рендер точек маршрута

    this._renderTripEvents();

    // Рендер деталей путешествия

    this._renderTripInformation();
    this._renderTripPrice();
  }
}

export {TripPresenter};