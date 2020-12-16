import {AbstractView} from "./abstract.js";

const createTripPriceTemplate = (routeDetails) => {
  return `<p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${routeDetails.totalPrice}</span>
            </p>`;
};

class TripPriceView extends AbstractView {
  constructor(routeDetails) {
    super();
    this._routeDetails = routeDetails;
  }

  getTemplate() {
    return createTripPriceTemplate(this._routeDetails);
  }
}

export {TripPriceView};

