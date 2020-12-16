import {AbstractView} from "./abstract.js";

const createNoEventTemplate = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

class NoEvent extends AbstractView {
  getTemplate() {
    return createNoEventTemplate();
  }
}

export {NoEvent};
