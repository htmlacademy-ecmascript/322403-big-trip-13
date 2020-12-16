import {TripInformationView} from "../view/trip-information.js";
import {TripPriceView} from "../view/trip-price.js";
import {renderElement, RenderPosition} from "../utils/render.js";

class TripDetailsPresenter {
  constructor(tripDetailsContainer) {
    this._tripDetailsContainer = tripDetailsContainer;
  }

  init(routeDetails) {
    this.routeDetails = routeDetails;
    this._renderTripDetails();
  }

  _renderTripInformation() {
    this._tripInformationComponent = new TripInformationView(this.routeDetails);
    renderElement(this._tripDetailsContainer, this._tripInformationComponent, RenderPosition.AFTERBEGIN);
  }

  _renderTripPrice() {
    this._tripPriceComponent = new TripPriceView(this.routeDetails);
    renderElement(this._tripInformationComponent, this._tripPriceComponent, RenderPosition.BEFOREEND);
  }

  _renderTripDetails() {
    if (this.routeDetails === null) {
      return;
    }
    this._renderTripInformation();
    this._renderTripPrice();
  }
}

export {TripDetailsPresenter};
