export default class Store {
  constructor(tripEventsKey, optionsKey, destinationsKey, storage) {
    this._storage = storage;
    this._tripEventsStoreKey = tripEventsKey;
    this._optionsStoreKey = optionsKey;
    this._destinationsStoreKey = destinationsKey;
  }

  getTripEventItems() {
    try {
      return JSON.parse(this._storage.getItem(this._tripEventsStoreKey)) || {};
    } catch (err) {
      return {};
    }
  }

  setTripEventItems(items) {
    this._storage.setItem(
        this._tripEventsStoreKey,
        JSON.stringify(items)
    );
  }

  setTripEventItem(key, value) {
    const store = this.getTripEventItems();

    this._storage.setItem(
        this._tripEventsStoreKey,
        JSON.stringify(
            Object.assign({}, store, {
              [key]: value
            })
        )
    );
  }

  removeTripEventItem(key) {
    const store = this.getTripEventItems();

    delete store[key];

    this._storage.setItem(
        this._tripEventsStoreKey,
        JSON.stringify(store)
    );
  }

  getOptionsItems() {
    try {
      return JSON.parse(this._storage.getItem(this._optionsStoreKey)) || {};
    } catch (err) {
      return {};
    }
  }

  setOptionsItems(items) {
    this._storage.setItem(
        this._optionsStoreKey,
        JSON.stringify(items)
    );
  }

  getDestinationsItems() {
    try {
      return JSON.parse(this._storage.getItem(this._destinationsStoreKey)) || {};
    } catch (err) {
      return {};
    }
  }

  setDestinationsItems(items) {
    this._storage.setItem(
        this._destinationsStoreKey,
        JSON.stringify(items)
    );
  }
}
