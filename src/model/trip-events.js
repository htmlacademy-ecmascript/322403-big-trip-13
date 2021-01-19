import {Observer} from "../utils/observer.js";

class TripEventsModel extends Observer {
  constructor() {
    super();
    this._tripEvents = [];
  }

  setTripEvents(tripEvents) {
    this._tripEvents = tripEvents.slice();
  }

  getTripEvents() {
    return this._tripEvents;
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
}

export {TripEventsModel};
