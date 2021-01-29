import Observer from "../utils/observer.js";

export default class TripEventsModel extends Observer {
  constructor() {
    super();
    this._tripEvents = [];
    this._destinationsList = [];
    this._optionsList = [];
  }

  setTripEvents(updateType, tripEvents) {
    this._tripEvents = tripEvents.slice();

    this._notify(updateType);
  }

  setDestinationsList(destinationsList) {
    this._destinationsList = destinationsList.slice();
  }

  setOptionsList(optionsList) {
    this._optionsList = optionsList.slice();
  }

  getTripEvents() {
    return this._tripEvents;
  }

  getDestinationsList() {
    return this._destinationsList;
  }

  getOptionsList() {
    return this._optionsList;
  }

  updateTripEvent(updateType, update) {
    const index = this._tripEvents.findIndex((tripEvent) => tripEvent.id === update.id);

    if (index === -1) {
      throw new Error(`Can't update unexisting event`);
    }

    this._tripEvents = [
      ...this._tripEvents.slice(0, index),
      update,
      ...this._tripEvents.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  addTripEvent(updateType, update) {
    this._tripEvents = [
      update,
      ...this._tripEvents
    ];

    this._notify(updateType, update);
  }

  deleteTripEvent(updateType, update) {
    const index = this._tripEvents.findIndex((tripEvent) => tripEvent.id === update.id);

    if (index === -1) {
      throw new Error(`Can't delete unexisting event`);
    }

    this._tripEvents = [
      ...this._tripEvents.slice(0, index),
      ...this._tripEvents.slice(index + 1)
    ];

    this._notify(updateType);
  }


  static adaptToClient(tripEvent) {
    const adaptedTripEvent = Object.assign(
        {},
        tripEvent,
        {
          price: tripEvent.base_price,
          timeStart: new Date(tripEvent.date_from),
          timeFinish: new Date(tripEvent.date_to),
          isFavorite: tripEvent.is_favorite,
          options: tripEvent.offers,
          isDisabled: false,
          isSaving: false,
          isDeleting: false
        }
    );

    // Ненужные ключи мы удаляем
    delete adaptedTripEvent.base_price;
    delete adaptedTripEvent.date_from;
    delete adaptedTripEvent.date_to;
    delete adaptedTripEvent.is_favorite;
    delete adaptedTripEvent.offers;

    return adaptedTripEvent;
  }

  static adaptToServer(tripEvent) {
    const adaptedTripEvent = Object.assign(
        {},
        tripEvent,
        {
          "base_price": tripEvent.price,
          "date_from": tripEvent.timeStart.toISOString(),
          "date_to": tripEvent.timeFinish.toISOString(),
          "is_favorite": tripEvent.isFavorite,
          "offers": tripEvent.options
        }
    );

    // Ненужные ключи мы удаляем
    delete adaptedTripEvent.price;
    delete adaptedTripEvent.timeStart;
    delete adaptedTripEvent.timeFinish;
    delete adaptedTripEvent.isFavorite;
    delete adaptedTripEvent.options;
    delete adaptedTripEvent.isDisabled;
    delete adaptedTripEvent.isSaving;
    delete adaptedTripEvent.isDeleting;

    return adaptedTripEvent;
  }
}
