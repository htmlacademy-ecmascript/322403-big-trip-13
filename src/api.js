import {TripEventsModel} from "./model/trip-events.js";

const Method = {
  GET: `GET`,
  PUT: `PUT`
};

const SuccessHTTPStatusRange = {
  MIN: 200,
  MAX: 299
};

class Api {
  constructor(endPoint, authorization) {
    this._endPoint = endPoint;
    this._authorization = authorization;
  }

  getTripEvents() {
    return this._load({url: `points`})
      .then(this.toJSON)
      .then((tripEvents) => tripEvents.map(TripEventsModel.adaptToClient));
  }

  getDestinations() {
    return this._load({url: `destinations`})
      .then(this.toJSON);
  }

  getOptions() {
    return this._load({url: `offers`})
      .then(this.toJSON);
  }

  updateTripEvent(tripEvent) {
    return this._load({
      url: `points/${tripEvent.id}`,
      method: Method.PUT,
      body: JSON.stringify(TripEventsModel.adaptToServer(tripEvent)),
      headers: new Headers({"Content-Type": `application/json`})
    })
      .then(this.toJSON)
      .then(TripEventsModel.adaptToClient);
  }

  _load({
    url,
    method = Method.GET,
    body = null,
    headers = new Headers()
  }) {
    headers.append(`Authorization`, this._authorization);

    return fetch(
        `${this._endPoint}/${url}`,
        {method, body, headers}
    )
      .then(this.checkStatus)
      .catch(this.catchError);
  }

  checkStatus(response) {
    if (
      response.status < SuccessHTTPStatusRange.MIN ||
      response.status > SuccessHTTPStatusRange.MAX
    ) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response;
  }

  toJSON(response) {
    return response.json();
  }

  catchError(err) {
    throw err;
  }
}

export {Api};
