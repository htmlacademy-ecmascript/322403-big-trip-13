import {AbstractView} from "./abstract.js";

const createNoTripEventTemplate = () => {
  return `<p class="trip-events__msg">Loading...</p>`;
};

class LoadingView extends AbstractView {
  getTemplate() {
    return createNoTripEventTemplate();
  }
}

export {LoadingView};
