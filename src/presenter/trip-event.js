import {EventEditorView} from "../view/event-editor.js";
import {TripEventView} from "../view/trip-event.js";
import {renderElement, RenderPosition, replace, remove} from "../utils/render.js";

const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`
};

class TripEventPresenter {
  constructor(tripEventsContainer, changeData, changeMode) {
    this._tripEventsContainer = tripEventsContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._tripEventComponent = null;
    this._eventEditorComponent = null;
    this._mode = Mode.DEFAULT;

    this._handleRollDown = this._handleRollDown.bind(this);
    this._handleRollUp = this._handleRollUp.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleSubmitForm = this._handleSubmitForm.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init(tripEvent, eventOptions, destinationsList) {
    this._tripEvent = tripEvent;
    this._eventOptions = eventOptions;
    this._destinationsList = destinationsList;

    const prevTripEventComponent = this._tripEventComponent;
    const prevEventEditorComponent = this._eventEditorComponent;

    this._tripEventComponent = new TripEventView(this._tripEvent);
    this._eventEditorComponent = new EventEditorView(this._tripEvent, this._eventOptions, this._destinationsList);

    this._tripEventComponent.setRollDownHandler(this._handleRollDown);
    this._tripEventComponent.setFavoriteClickHandler(this._handleFavoriteClick);
    this._eventEditorComponent.setRollUpHandler(this._handleRollUp);
    this._eventEditorComponent.setSubmitFormHandler(this._handleSubmitForm);

    if (prevTripEventComponent === null || prevEventEditorComponent === null) {
      renderElement(this._tripEventsContainer, this._tripEventComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      replace(this._tripEventComponent, prevTripEventComponent);
    }

    if (this._mode === Mode.EDITING) {
      replace(this._eventEditorComponent, prevEventEditorComponent);
    }

    remove(prevTripEventComponent);
    remove(prevEventEditorComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToCard();
    }
  }

  delete() {
    remove(this._tripEventComponent);
    remove(this._eventEditorComponent);
  }

  _replaceCardToForm() {
    replace(this._eventEditorComponent, this._tripEventComponent);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  _replaceFormToCard() {
    replace(this._tripEventComponent, this._eventEditorComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
    this._mode = Mode.DEFAULT;
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._eventEditorComponent.reset(this._tripEvent);
      this._replaceFormToCard();
    }
  }

  _handleRollDown() {
    this._replaceCardToForm();
  }

  _handleRollUp() {
    this._eventEditorComponent.reset(this._tripEvent);
    this._replaceFormToCard();
  }

  _handleSubmitForm(data) {
    this._changeData(data);
    this._replaceFormToCard();
  }

  _handleFavoriteClick() {
    this._changeData(Object.assign({}, this._tripEvent, {isFavorite: !this._tripEvent.isFavorite}));
  }
}

export {TripEventPresenter};
