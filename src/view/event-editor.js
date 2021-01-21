import dayjs from "dayjs";
import he from "he";
import {EVENT_TYPES} from "../const.js";
import {SmartView} from "./smart.js";
import flatpickr from "flatpickr";

import "../../node_modules/flatpickr/dist/flatpickr.min.css";

const createEventEditorTemplate = (data, optionsList, destinationsList) => {
  const {type, price, options, timeStart, timeFinish, destination} = data;

  const createEventTypesList = (editingEventType) => {
    let eventTypesList = ``;

    const isChecked = (currentEventType) => {
      return currentEventType === editingEventType ? `checked` : ``;
    };

    for (const eventType of EVENT_TYPES) {
      eventTypesList += `
        <div class="event__type-item">
          <input
          id="event-type-${eventType.toLowerCase()}-2"
          class="event__type-input  visually-hidden"
          type="radio"
          name="event-type"
          value="${eventType.toLowerCase()}"
          ${isChecked(eventType)}>
            <label class="event__type-label  event__type-label--${eventType.toLowerCase()}" for="event-type-${eventType.toLowerCase()}-2">${eventType}</label>
        </div>`;
    }

    return eventTypesList;
  };

  const createEventOptionsList = (editingEventOptions) => {
    let eventOptionsList = ``;

    const isChecked = (currentEventOption) => {
      return editingEventOptions.includes(currentEventOption) ? `checked` : ``;
    };

    for (const option of optionsList.filter((optionItem) => optionItem.type.toLowerCase() === type.toLowerCase())) {
      eventOptionsList += `
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden"
          id="event-${option.name.toLowerCase().replaceAll(` `, `-`)}-2"
          type="checkbox"
          name="event-${option.name.toLowerCase().replaceAll(` `, `-`)}"
          ${isChecked(option)}>
          <label
          class="event__offer-label"
          for="event-${option.name.toLowerCase().replaceAll(` `, `-`)}-2">
            <span class="event__offer-title">${option.name}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${option.price}</span>
          </label>
        </div>`;
    }

    return eventOptionsList;
  };

  const createCitiesList = () => {
    let cities = ``;
    for (const city of destinationsList.map((x) => x.city)) {
      cities += `<option value="${city}"></option>`;
    }

    return cities;
  };

  const createPhotosTape = () => {
    if (!destination.photos) {
      return ``;
    }

    let photos = ``;
    for (const photo of destination.photos) {
      photos += `<img class="event__photo" src="${photo}" alt="Event photo">`;
    }

    return `<div class="event__photos-container">
      <div class="event__photos-tape">
        ${photos}
      </div>
    </div>`;
  };

  const dateStart = dayjs(timeStart).format(`DD/MM/YY hh:mm`);
  const dateFinish = dayjs(timeFinish).format(`DD/MM/YY hh:mm`);

  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-2">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-2" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${createEventTypesList(type)}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-2">
                      ${type}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-2" type="text" name="event-destination" value="${he.encode(destination.city)}" list="destination-list-2">
                    <datalist id="destination-list-2">
                      ${createCitiesList()}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-2">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-2" type="text" name="event-start-time" value="${dateStart}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-2">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-2" type="text" name="event-end-time" value="${dateFinish}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-2">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-2" type="text" name="event-price" value="${price}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                    ${createEventOptionsList(options)}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${destination.description}</p>
                    ${createPhotosTape()}
                  </section>
                </section>
              </form>
            </li>`;
};

class EventEditorView extends SmartView {
  constructor(tripEvent, optionsList, destinationsList) {
    super();
    this._data = tripEvent;
    this._optionsList = optionsList;
    this._destinationsList = destinationsList;
    this._startDatepicker = null;
    this._finishDatepicker = null;
    this._rollUpHandler = this._rollUpHandler.bind(this);
    this._submitFormHandler = this._submitFormHandler.bind(this);
    this._formDeleteClickHandler = this._formDeleteClickHandler.bind(this);
    this._eventTypeChangeHandler = this._eventTypeChangeHandler.bind(this);
    this._destinationCityChangeHandler = this._destinationCityChangeHandler.bind(this);
    this._priceChangeHandler = this._priceChangeHandler.bind(this);
    this._startDateChangeHandler = this._startDateChangeHandler.bind(this);
    this._finishDateChangeHandler = this._finishDateChangeHandler.bind(this);

    this._setInnerHandlers();
    this._setStartDatepicker();
    this._setFinishDatepicker();
  }

  removeElement() {
    super.removeElement();

    if (this._startDatepicker) {
      this._startDatepicker.destroy();
      this._startDatepicker = null;
    }

    if (this._finishDatepicker) {
      this._finishDatepicker.destroy();
      this._finishDatepicker = null;
    }
  }

  getTemplate() {
    return createEventEditorTemplate(this._data, this._optionsList, this._destinationsList);
  }

  _setInnerHandlers() {
    this.getElement()
      .querySelector(`.event__type-list`)
      .addEventListener(`change`, this._eventTypeChangeHandler);

    this.getElement()
      .querySelector(`.event__input--destination`)
      .addEventListener(`change`, this._destinationCityChangeHandler);

    this.getElement()
      .querySelector(`.event__input--price`)
      .addEventListener(`change`, this._priceChangeHandler);
  }

  restoreHandlers() {
    this._setInnerHandlers();

    this.setRollUpHandler(this._callback.rollUp);
    this.setSubmitFormHandler(this._callback.submitForm);
    this.setDeleteClickHandler(this._callback.deleteClick);

    this._setStartDatepicker();
    this._setFinishDatepicker();
  }

  _setStartDatepicker() {
    if (this._startDatepicker) {
      this._startDatepicker.destroy();
      this._startDatepicker = null;
    }

    this._startDatepicker = flatpickr(
        this.getElement().querySelector(`#event-start-time-2`),
        {
          dateFormat: `d/m/Y H:i`,
          enableTime: true,
          // eslint-disable-next-line camelcase
          time_24hr: true,
          defaultDate: this._data.timeStart,
          onChange: this._startDateChangeHandler
        }
    );
  }

  _startDateChangeHandler([userDate]) {
    if (this._data.timeFinish < userDate) {
      this.updateData({
        timeStart: userDate,
        timeFinish: userDate,
      });
      return;
    }

    this.updateData({
      timeStart: userDate
    });
  }

  _setFinishDatepicker() {
    if (this._finishDatepicker) {
      this._finishDatepicker.destroy();
      this._finishDatepicker = null;
    }

    this._finishDatepicker = flatpickr(
        this.getElement().querySelector(`#event-end-time-2`),
        {
          dateFormat: `d/m/Y H:i`,
          enableTime: true,
          // eslint-disable-next-line camelcase
          time_24hr: true,
          defaultDate: this._data.timeFinish,
          minDate: this._data.timeStart,
          onChange: this._finishDateChangeHandler
        }
    );
  }

  _finishDateChangeHandler([userDate]) {
    this.updateData({
      timeFinish: userDate
    });
  }

  reset(tripEvent) {
    this.updateData(
        tripEvent
    );
  }

  _rollUpHandler(evt) {
    evt.preventDefault();
    this._callback.rollUp();
  }

  setRollUpHandler(callback) {
    this._callback.rollUp = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._rollUpHandler);
  }

  _submitFormHandler(evt) {
    evt.preventDefault();
    this._callback.submitForm(this._data);
  }

  setSubmitFormHandler(callback) {
    this._callback.submitForm = callback;
    this.getElement().querySelector(`.event--edit`).addEventListener(`submit`, this._submitFormHandler);
  }

  _eventTypeChangeHandler(evt) {
    evt.preventDefault();
    this.updateData({
      type: evt.target.value,
      options: []
    });
  }

  _destinationCityChangeHandler(evt) {
    evt.preventDefault();
    this.updateData({
      destination: this._destinationsList.find((element) => element.city === evt.target.value),
    });
  }

  _priceChangeHandler(evt) {
    evt.preventDefault();
    this.updateData({
      price: evt.target.value
    });
  }

  _formDeleteClickHandler(evt) {
    evt.preventDefault();
    this._callback.deleteClick(this._data);
  }

  setDeleteClickHandler(callback) {
    this._callback.deleteClick = callback;
    this.getElement().querySelector(`.event__reset-btn`).addEventListener(`click`, this._formDeleteClickHandler);
  }

}

export {EventEditorView};
