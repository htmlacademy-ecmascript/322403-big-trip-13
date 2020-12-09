import dayjs from "dayjs";
import {AbstractView} from "./abstract";

const createTripEventTemplate = (tripEvent) => {
  const {type, price, options, time, isFavorite} = tripEvent;
  const city = tripEvent.destination.city;

  const getFavoriteClassName = isFavorite ? `event__favorite-btn--active` : ``;

  const getOptions = (optionsArray) => {
    let result = ``;
    for (const optionsItem of optionsArray) {
      result += `<li class="event__offer">
        <span class="event__offer-title">${optionsItem.name}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${optionsItem.price}</span>
      </li>`;
    }
    return result;
  };

  const day = dayjs(time.start).format(`MMM DD`);
  const date = dayjs(time.start).format(`YYYY-MM-DD`);
  const timeStart = dayjs(time.start).format(`hh-mm`);
  const dateTimeStart = dayjs(time.start).format(`YYYY-MM-DDThh:mm`);
  const timeFinish = dayjs(time.finish).format(`hh-mm`);
  const dateTimeFinish = dayjs(time.finish).format(`YYYY-MM-DDThh:mm`);

  const getDuration = (start, finish) => {
    const durationInDays = dayjs(finish).diff(dayjs(start), `day`);
    const durationInHours = (dayjs(finish).diff(dayjs(start), `hour`)) % 24;
    const durationInMinutes = (dayjs(finish).diff(dayjs(start), `minute`)) % 60;

    let result = ``;

    if (durationInDays) {
      if (durationInDays < 10) {
        result += `0${durationInDays}D `;
      } else {
        result += `${durationInDays}D `;
      }
    }

    if (durationInHours || durationInDays) {
      if (durationInHours < 10) {
        result += `0${durationInHours}H `;
      } else {
        result += `${durationInHours}H `;
      }
    }

    if (durationInHours || durationInDays || durationInMinutes) {
      if (durationInMinutes < 10) {
        result += `0${durationInMinutes}M`;
      } else {
        result += `${durationInMinutes}M`;
      }
    }

    return result;
  };

  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${date}">${day}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${type} ${city}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${dateTimeStart}">${timeStart}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${dateTimeFinish}">${timeFinish}</time>
                  </p>
                  <p class="event__duration">${getDuration(time.start, time.finish)}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${price}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${getOptions(options)}
                </ul>
                <button class="event__favorite-btn ${getFavoriteClassName}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
};

class TripEventView extends AbstractView {
  constructor(tripEvent) {
    super();
    this._tripEvent = tripEvent;
    this._rollDownHandler = this._rollDownHandler.bind(this);
  }

  getTemplate() {
    return createTripEventTemplate(this._tripEvent);
  }

  _rollDownHandler(evt) {
    evt.preventDefault();
    this._callback.rollDown();
  }

  setRollDownHandler(callback) {
    this._callback.rollDown = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._rollDownHandler);
  }
}

export {TripEventView};
