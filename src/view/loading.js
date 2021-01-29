import AbstractView from "./abstract.js";

const createNoTripEventTemplate = () => {
  return `<p class="trip-events__msg">Loading...</p>`;
};

export default class LoadingView extends AbstractView {
  getTemplate() {
    return createNoTripEventTemplate();
  }
}
