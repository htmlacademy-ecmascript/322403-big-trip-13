import {createElement} from "../utils";

const createEventsListTemplate = () => {
  return `<ul class="trip-events__list">
          </ul>`;
};

class EventsListView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createEventsListTemplate();
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


export {EventsListView};

