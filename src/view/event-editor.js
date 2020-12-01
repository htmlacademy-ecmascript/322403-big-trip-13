import dayjs from "dayjs";
import {EVENT_TYPES, EVENT_CITIES} from "../const";
import {createElement} from "../utils";

const createEventEditorTemplate = (tripEvent, optionsList) => {
  const {type, price, options, time, destination} = tripEvent;

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

    for (const option of optionsList.filter((optionItem) => optionItem.type === type)) {
      eventOptionsList += `
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden"
          id="event-${option.name.toLowerCase().replace(` `, `-`)}-2"
          type="checkbox"
          name="event-${option.name.toLowerCase().replace(` `, `-`)}"
          ${isChecked(option)}>
          <label
          class="event__offer-label"
          for="event-${option.name.toLowerCase().replace(` `, `-`)}-2">
            <span class="event__offer-title">${option.name}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${option.price}</span>
          </label>
        </div>`;
    }

    return eventOptionsList;
  };

  const createDestinationList = () => {
    let cities = ``;
    for (const city of EVENT_CITIES) {
      cities += `<option value="${city}"></option>`;
    }

    return cities;
  };

  const timeStart = dayjs(time.start).format(`DD/MM/YY hh:mm`);
  const timeFinish = dayjs(time.finish).format(`DD/MM/YY hh:mm`);

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
                    <input class="event__input  event__input--destination" id="event-destination-2" type="text" name="event-destination" value="${destination.city}" list="destination-list-2">
                    <datalist id="destination-list-2">
                      ${createDestinationList()}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-2">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-2" type="text" name="event-start-time" value="${timeStart}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-2">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-2" type="text" name="event-end-time" value="${timeFinish}">
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
                  </section>
                </section>
              </form>
            </li>`;
};

class EventEditorView {
  constructor(tripEvent, optionsList) {
    this._tripEvent = tripEvent;
    this._optionsList = optionsList;
    this._element = null;
  }

  getTemplate() {
    return createEventEditorTemplate(this._tripEvent, this._optionsList);
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

export {EventEditorView};
