import EventsListView from "../view/events-list.js";
import NoEvent from "../view/no-event.js";
import SortingView from "../view/sorting.js";
import TripPriceView from "../view/trip-price.js";
import TripInformationView from "../view/trip-information.js";
import LoadingView from "../view/loading.js";
import TripEventPresenter, {State as TripEventPresenterViewState} from "./trip-event.js";
import NewTripEventPresenter from "./new-trip-event";
import {renderElement, RenderPosition, remove} from "../utils/render.js";
import {UserAction, UpdateType, FilterType} from "../const.js";
import {calculateRouteDetails} from "../route.js";
import {filters} from "../utils/filters.js";
import {sortByDuration, sortByPrice, sortByDate} from "../utils/sort.js";


export default class TripPresenter {
  constructor(tripContainer, tripDetailsContainer, tripEventsModel, filtersModel, api) {
    this._api = api;
    this._tripEventsModel = tripEventsModel;
    this._filtersModel = filtersModel;
    this._tripContainer = tripContainer;
    this._tripDetailsContainer = tripDetailsContainer;
    this._tripEventPresenter = {};
    this._currentSortType = `sort-day`;
    this._isLoading = true;

    this._noEventComponent = new NoEvent();
    this._loadingComponent = new LoadingView();
    this._sortingComponent = null;
    this._eventsListComponent = null;

    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);

    this._newTripEventPresenter = new NewTripEventPresenter(this._handleViewAction);
  }

  init() {
    this._tripEventsModel.addObserver(this._handleModelEvent);
    this._filtersModel.addObserver(this._handleModelEvent);

    this._renderTrip();
  }

  deleteTripEventsList() {
    this._tripEventsModel.removeObserver(this._handleModelEvent);
    this._filtersModel.removeObserver(this._handleModelEvent);

    this._newTripEventPresenter.delete();

    Object
      .values(this._tripEventPresenter)
      .forEach((presenter) => presenter.delete());
    this._tripEventPresenter = {};

    remove(this._sortingComponent);
    remove(this._noEventComponent);
    remove(this._eventsListComponent);

    this._currentSortType = `sort-day`;

    this._filtersModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
  }


  createTripEvent(newEventButton) {
    this._currentSortType = `sort-day`;
    this._filtersModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);

    if (!this._eventsListComponent) {
      this._renderEventsList();
    }

    if (this._noEventComponent) {
      remove(this._noEventComponent);
    }

    this._newTripEventPresenter.init(
        this._eventsListComponent,
        this._tripEventsModel.getOptionsList(),
        this._tripEventsModel.getDestinationsList(),
        newEventButton);
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

  _renderSort() {
    if (this._sortingComponent !== null) {
      remove(this._sortingComponent);
      this._sortingComponent = null;
    }

    this._sortingComponent = new SortingView(this._currentSortType);
    this._sortingComponent.setSortTypeChangeHandler(this._handleSortTypeChange);

    renderElement(this._tripContainer, this._sortingComponent, RenderPosition.BEFOREEND);
  }

  _renderEventsList() {
    this._eventsListComponent = new EventsListView();

    renderElement(this._tripContainer, this._eventsListComponent, RenderPosition.BEFOREEND);
  }

  _renderTripInformation() {
    if (this._tripInformationComponent) {
      remove(this._tripInformationComponent);
    }

    this._tripInformationComponent = new TripInformationView(this._routeDetails);
    renderElement(this._tripDetailsContainer, this._tripInformationComponent, RenderPosition.AFTERBEGIN);
  }

  _renderTripPrice() {
    if (this._tripPriceComponent) {
      remove(this._tripPriceComponent);
    }

    this._tripPriceComponent = new TripPriceView(this._routeDetails);
    renderElement(this._tripInformationComponent, this._tripPriceComponent, RenderPosition.BEFOREEND);
  }

  _renderTripEvent(tripEvent, eventOptions, destinationsList) {
    const tripEventPresenter = new TripEventPresenter(this._eventsListComponent, this._handleViewAction, this._handleModeChange);
    tripEventPresenter.init(tripEvent, eventOptions, destinationsList);
    this._tripEventPresenter[tripEvent.id] = tripEventPresenter;
  }

  _renderTripEvents(tripEvents) {
    tripEvents.forEach((tripEvent) => this._renderTripEvent(
        tripEvent,
        this._tripEventsModel.getOptionsList(),
        this._tripEventsModel.getDestinationsList()
    ));
  }

  _renderNoEvent() {
    renderElement(this._tripContainer, this._noEventComponent, RenderPosition.BEFOREEND);
  }

  _renderLoading() {
    renderElement(this._tripContainer, this._loadingComponent, RenderPosition.AFTERBEGIN);
  }

  _clearTrip({resetSortType = false} = {}) {
    this._newTripEventPresenter.delete();

    Object
      .values(this._tripEventPresenter)
      .forEach((presenter) => presenter.delete());
    this._tripEventPresenter = {};

    remove(this._sortingComponent);
    remove(this._noEventComponent);
    remove(this._loadingComponent);

    if (this._eventsListComponent) {
      remove(this._eventsListComponent);
      this._eventsListComponent = null;
    }

    if (this._tripInformationComponent) {
      remove(this._tripInformationComponent);
    }

    if (this._tripPriceComponent) {
      remove(this._tripPriceComponent);
    }

    if (resetSortType) {
      this._currentSortType = `sort-day`;
    }
  }

  _renderTrip() {
    if (this._isLoading) {
      this._renderLoading();
      return;
    }

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
    this._routeDetails = calculateRouteDetails(this._getTripEvents());

    this._renderTripInformation();
    this._renderTripPrice();
  }


  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case UserAction.UPDATE_TRIP_EVENT:
        this._tripEventPresenter[update.id].setViewState(TripEventPresenterViewState.SAVING);
        this._api.updateTripEvent(update)
          .then((response) => {
            this._tripEventsModel.updateTripEvent(updateType, response);
          })
          .catch(() => {
            this._tripEventPresenter[update.id].setViewState(TripEventPresenterViewState.ABORTING);
          });
        break;
      case UserAction.ADD_TRIP_EVENT:
        this._newTripEventPresenter.setSaving();
        this._api.addTripEvent(update)
          .then((response) => {
            this._tripEventsModel.addTripEvent(updateType, response);
          })
          .catch(() => {
            this._newTripEventPresenter.setAborting();
          });
        break;
      case UserAction.DELETE_TRIP_EVENT:
        this._tripEventPresenter[update.id].setViewState(TripEventPresenterViewState.DELETING);
        this._api.deleteTripEvent(update)
          .then(() => {
            this._tripEventsModel.deleteTripEvent(updateType, update);
          })
          .catch(() => {
            this._tripEventPresenter[update.id].setViewState(TripEventPresenterViewState.ABORTING);
          });
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
      case UpdateType.INIT:
        this._isLoading = false;
        remove(this._loadingComponent);
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

}
