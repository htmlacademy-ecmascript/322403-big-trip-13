import TripEventsModel from "../model/trip-events.js";
import {isOnline} from "../utils/common.js";

const getSyncedTripEvents = (items) => {
  return items.filter(({success}) => success)
    .map(({payload}) => payload.point);
};

const createStoreStructure = (items) => {
  return items.reduce((acc, current) => {
    return Object.assign({}, acc, {
      [current.id]: current,
    });
  }, {});
};

export default class Provider {
  constructor(api, store) {
    this._api = api;
    this._store = store;
  }

  getTripEvents() {
    if (isOnline()) {
      return this._api.getTripEvents()
        .then((tripEvents) => {
          const items = createStoreStructure(tripEvents.map(TripEventsModel.adaptToServer));
          this._store.setTripEventItems(items);
          return tripEvents;
        });
    }

    const storeTripEvents = Object.values(this._store.getTripEventItems());

    return Promise.resolve(storeTripEvents.map(TripEventsModel.adaptToClient));
  }

  getDestinations() {
    if (isOnline()) {
      return this._api.getDestinations()
        .then((destinations) => {
          this._store.setDestinationsItems(destinations);
          return destinations;
        });
    }

    const storeDestinations = Object.values(this._store.getDestinationsItems());

    return Promise.resolve(storeDestinations);
  }

  getOptions() {
    if (isOnline()) {
      return this._api.getOptions()
        .then((options) => {
          this._store.setOptionsItems(options);
          return options;
        });
    }

    const storeOptions = Object.values(this._store.getOptionsItems());

    return Promise.resolve(storeOptions);
  }

  updateTripEvent(tripEvent) {
    if (isOnline()) {
      return this._api.updateTripEvent(tripEvent)
        .then((updatedTripEvent) => {
          this._store.setTripEventItem(updatedTripEvent.id, TripEventsModel.adaptToServer(updatedTripEvent));
          return updatedTripEvent;
        });
    }

    this._store.setTripEventItem(tripEvent.id, TripEventsModel.adaptToServer(Object.assign({}, tripEvent)));

    return Promise.resolve(tripEvent);
  }

  addTripEvent(tripEvent) {
    if (isOnline()) {
      return this._api.addTripEvent(tripEvent)
        .then((newTripEvent) => {
          this._store.setTripEventItem(newTripEvent.id, TripEventsModel.adaptToServer(newTripEvent));
          return newTripEvent;
        });
    }

    return Promise.reject(new Error(`Add event failed`));
  }

  deleteTripEvent(tripEvent) {
    if (isOnline()) {
      return this._api.deleteTripEvent(tripEvent)
        .then(() => this._store.removeTripEventItem(tripEvent.id));
    }

    return Promise.reject(new Error(`Delete event failed`));
  }

  sync() {
    if (isOnline()) {
      const storeTripEvents = Object.values(this._store.getTripEventItems());

      return this._api.sync(storeTripEvents)
        .then((response) => {
          // Забираем из ответа синхронизированные задачи

          const createdTripEvents = getSyncedTripEvents(response.created);
          const updatedTripEvents = getSyncedTripEvents(response.updated);

          // Добавляем синхронизированные задачи в хранилище.
          // Хранилище должно быть актуальным в любой момент.
          const items = createStoreStructure([...createdTripEvents, ...updatedTripEvents]);

          this._store.setTripEventItems(items);
        });
    }

    return Promise.reject(new Error(`Sync data failed`));
  }
}
