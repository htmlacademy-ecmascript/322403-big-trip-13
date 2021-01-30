import AbstractView from "./abstract.js";
import {MenuItem} from "../const.js";

const createSiteMenuTemplate = () => {
  return `<div>
            <h2 class="visually-hidden">Switch trip view</h2>
            <nav class="trip-controls__trip-tabs  trip-tabs">
              <a class="trip-tabs__btn  trip-tabs__btn--active" href="#" id="${MenuItem.TABLE}">Table</a>
              <a class="trip-tabs__btn" href="#" id="${MenuItem.STATS}">Stats</a>
            </nav>
          </div>`;
};

export default class SiteMenuView extends AbstractView {
  constructor() {
    super();

    this._menuClickHandler = this._menuClickHandler.bind(this);
  }

  getTemplate() {
    return createSiteMenuTemplate();
  }

  setMenuClickHandler(callback) {
    this._callback.menuClick = callback;
    this.getElement().addEventListener(`click`, this._menuClickHandler);
  }

  setMenuItem(menuItem) {
    const item = this.getElement().querySelector(`#${menuItem}`);

    if (item === null) {
      return;
    }

    this.getElement()
      .querySelector(`.trip-tabs__btn--active`)
      .classList.remove(`trip-tabs__btn--active`);

    item.classList.add(`trip-tabs__btn--active`);
  }

  _menuClickHandler(evt) {
    evt.preventDefault();
    if (evt.target.matches(`.trip-tabs__btn`)) {
      this._callback.menuClick(evt.target.id);

      this.getElement()
        .querySelector(`.trip-tabs__btn--active`)
        .classList.remove(`trip-tabs__btn--active`);

      evt.target.classList.add(`trip-tabs__btn--active`);
    }
  }
}
