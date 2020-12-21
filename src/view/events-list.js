import {AbstractView} from "./abstract.js";

const createEventsListTemplate = () => {
  return `<ul class="trip-events__list">
          </ul>`;
};

class EventsListView extends AbstractView {
  getTemplate() {
    return createEventsListTemplate();
  }
}

export {EventsListView};

