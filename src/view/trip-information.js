import dayjs from "dayjs";
import {createElement} from "../utils";

const createTripInformationTemplate = (routeDetails) => {
  const {cities, dates} = routeDetails;

  const getCities = () => {
    if (cities.length > 3) {
      return `${cities[0]} &mdash; ... &mdash; ${cities[cities.length - 1]}`;
    } else {
      return cities.join(` &mdash; `);
    }
  };

  const getDates = () => {
    const startDate = dayjs(dates.start).format(`DD MMM`);
    const finishDate = dayjs(dates.finish).format(`DD MMM`);

    return `${startDate}&nbsp;&mdash;&nbsp;${finishDate}`;
  };

  return `<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">${getCities()}</h1>

              <p class="trip-info__dates">${getDates()}</p>
            </div>
          </section>`;
};

class TripInformationView {
  constructor(routeDetails) {
    this._routeDetails = routeDetails;

    this._element = null;
  }

  getTemplate() {
    return createTripInformationTemplate(this._routeDetails);
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

export {TripInformationView};
