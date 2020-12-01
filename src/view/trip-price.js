import {createElement} from "../utils";

const createTripPriceTemplate = (routeDetails) => {
  return `<p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${routeDetails.totalPrice}</span>
            </p>`;
};

class TripPriceView {
  constructor(routeDetails) {
    this._routeDetails = routeDetails;

    this._element = null;
  }

  getTemplate() {
    return createTripPriceTemplate(this._routeDetails);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

export {TripPriceView};

