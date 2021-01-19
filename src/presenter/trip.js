import {EventsListView} from "../view/events-list.js";
import {NoEvent} from "../view/no-event.js";
import {SortingView} from "../view/sorting.js";
import {TripEventPresenter} from "./trip-event.js";
import {NewTripEventPresenter} from "./new-trip-event";
import {renderElement, RenderPosition, remove} from "../utils/render.js";
import {UserAction, UpdateType, FilterType} from "../const.js";
import {calculateRouteDetails} from "../route.js";
import {filters} from "../utils/filters.js";
import {sortByDuration, sortByPrice, sortByDate} from "../utils/sort.js";
import {TripInformationView} from "../view/trip-information.js";
import {TripPriceView} from "../view/trip-price.js";

class TripPresenter {
  constructor(tripContainer, tripDetailsContainer, tripEventsModel, filtersModel) {
    this._tripEventsModel = tripEventsModel;
    this._filtersModel = filtersModel;
    this._tripContainer = tripContainer;
    this._tripDetailsContainer = tripDetailsContainer;
    this._tripEventPresenter = {};
    this._currentSortType = `sort-day`;

    this._eventsListComponent = new EventsListView();
    this._noEventComponent = new NoEvent();
    this._sortingComponent = null;

    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);

    this._tripEventsModel.addObserver(this._handleModelEvent);
    this._filtersModel.addObserver(this._handleModelEvent);

    this._newTripEventPresenter = new NewTripEventPresenter(this._eventsListComponent, this._handleViewAction);
  }

  init(eventOptions, destinationsList) {
    this._eventOptions = eventOptions.slice();
    this._destinationsList = destinationsList.slice();
    this._routeDetails = calculateRouteDetails(this._getTripEvents());

    this._renderTrip();
  }

  createTripEvent() {
    this._currentSortType = `sort-day`;
    this._filtersModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this._newTripEventPresenter.init(this._eventOptions, this._destinationsList);
  }

  _getTripEvents() {
    const filterType = this._filtersModel.getFilter();
    const tripEvents = this._tripEventsModel.getTripEvents();
    const filteredTripEvents = filters[filterType](tripEvents);

    switch (this._currentSortType) {
      case `sort-time`:
        return filteredTripEvents.sort(sortByDuration);
      case `sort-price`:
        return filteredTripEvents.sort(sortByPrice);
      case `sort-day`:
      default:
        return filteredTripEvents.sort(sortByDate);
    }
  }

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case UserAction.UPDATE_TRIP_EVENT:
        this._tripEventsModel.updateTripEvent(updateType, update);
        break;
      case UserAction.ADD_TRIP_EVENT:
        this._tripEventsModel.addTripEvent(updateType, update);
        break;
      case UserAction.DELETE_TRIP_EVENT:
        this._tripEventsModel.deleteTripEvent(updateType, update);
        break;
    }
  }

  _handleModelEvent(updateType) {
    switch (updateType) {
      case UpdateType.MINOR:
        this._clearTrip();
        this._renderTrip();
        break;
      case UpdateType.MAJOR:
        this._clearTrip({resetSortType: true});
        this._renderTrip();
        break;
    }
  }

  _handleModeChange() {
    this._newTripEventPresenter.delete();
    Object.values(this._tripEventPresenter).forEach((presenter) => presenter.resetView());
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._currentSortType = sortType;
    this._clearTrip();
    this._renderTrip();
  }

  _renderSort() {
    if (this._sortingComponent !== null) {
      this._sortingComponent = null;
    }

    this._sortingComponent = new SortingView(this._currentSortType);
    this._sortingComponent.setSortTypeChangeHandler(this._handleSortTypeChange);

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

  _renderTripEvent(tripEvent, eventOptions, destinationsList) {
    const tripEventPresenter = new TripEventPresenter(this._eventsListComponent, this._handleViewAction, this._handleModeChange);
    tripEventPresenter.init(tripEvent, eventOptions, destinationsList);
    this._tripEventPresenter[tripEvent.id] = tripEventPresenter;
  }

  _renderTripEvents(tripEvents) {
    tripEvents.forEach((tripEvent) => this._renderTripEvent(tripEvent, this._eventOptions, this._destinationsList));
  }

  _renderNoEvent() {
    renderElement(this._tripContainer, this._noEventComponent, RenderPosition.BEFOREEND);
  }

  _clearTrip({resetSortType = false} = {}) {
    this._newTripEventPresenter.delete();

    Object
      .values(this._tripEventPresenter)
      .forEach((presenter) => presenter.delete());
    this._tripEventPresenter = {};

    remove(this._sortingComponent);
    remove(this._noEventComponent);
    remove(this._tripInformationComponent);
    remove(this._tripPriceComponent);
    remove(this._eventsListComponent);

    if (resetSortType) {
      this._currentSortType = `sort-day`;
    }
  }

  _renderTrip() {
    if (this._getTripEvents().length === 0) {
      this._renderNoEvent();
      return;
    }

    // Рендер сортировки

    this._renderSort();

    // Рендер списка событий

    this._renderEventsList();

    // Рендер точек маршрута

    this._renderTripEvents(this._getTripEvents());

    // Рендер деталей путешествия

    this._renderTripInformation();
    this._renderTripPrice();
  }
}

export {TripPresenter};
