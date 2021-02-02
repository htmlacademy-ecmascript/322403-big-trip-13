import EventEditorView from "../view/event-editor.js";
import TripEventView from "../view/trip-event.js";
import {toast} from "../utils/toast/toast.js";
import {isOnline} from "../utils/common.js";
import {UserAction, UpdateType} from "../const.js";
import {renderElement, RenderPosition, replace, remove} from "../utils/render.js";

const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`
};

const State = {
  SAVING: `SAVING`,
  DELETING: `DELETING`,
  ABORTING: `ABORTING`
};


export default class TripEventPresenter {
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
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
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
    this._eventEditorComponent.setDeleteClickHandler(this._handleDeleteClick);

    if (prevTripEventComponent === null || prevEventEditorComponent === null) {
      renderElement(this._tripEventsContainer, this._tripEventComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      replace(this._tripEventComponent, prevTripEventComponent);
    }

    if (this._mode === Mode.EDITING) {
      replace(this._tripEventComponent, prevEventEditorComponent);
      this._mode = Mode.DEFAULT;
    }

    remove(prevTripEventComponent);
    remove(prevEventEditorComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToCard();
    }
  }

  setViewState(state) {
    const resetFormState = () => {
      this._eventEditorComponent.updateData({
        isDisabled: false,
        isSaving: false,
        isDeleting: false
      });
    };

    switch (state) {
      case State.SAVING:
        this._eventEditorComponent.updateData({
          isDisabled: true,
          isSaving: true
        });
        break;
      case State.DELETING:
        this._eventEditorComponent.updateData({
          isDisabled: true,
          isDeleting: true
        });
        break;
      case State.ABORTING:
        this._tripEventComponent.shake(resetFormState);
        this._eventEditorComponent.shake(resetFormState);
        break;
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
    if (!isOnline()) {
      toast(`You can't edit event offline`);
      return;
    }

    this._replaceCardToForm();
  }

  _handleRollUp() {
    this._eventEditorComponent.reset(this._tripEvent);
    this._replaceFormToCard();
  }

  _handleSubmitForm(update) {
    if (!isOnline()) {
      this._eventEditorComponent.shake(() => toast(`You can't save event offline`));
      return;
    }

    this._changeData(
        UserAction.UPDATE_TRIP_EVENT,
        UpdateType.MINOR,
        update);
  }

  _handleFavoriteClick() {
    this._changeData(
        UserAction.UPDATE_TRIP_EVENT,
        UpdateType.MINOR,
        Object.assign({}, this._tripEvent, {isFavorite: !this._tripEvent.isFavorite}));
  }

  _handleDeleteClick(tripEvent) {
    if (!isOnline()) {
      this._eventEditorComponent.shake(() =>toast(`You can't delete event offline`));
      return;
    }

    this._changeData(
        UserAction.DELETE_TRIP_EVENT,
        UpdateType.MINOR,
        tripEvent
    );
  }
}

export {State};
