import {NewEventCreatorView} from "../view/new-event-creator.js";
import {remove, renderElement, RenderPosition} from "../utils/render.js";
import {UserAction, UpdateType} from "../const.js";

class NewTripEventPresenter {
  constructor(tripEventsContainer, changeData) {
    this._tripEventsContainer = tripEventsContainer;
    this._changeData = changeData;

    this._newTripEventComponent = null;

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init(eventOptions, destinationsList) {
    if (this._newTripEventComponent !== null) {
      return;
    }

    this._newTripEventComponent = new NewEventCreatorView(eventOptions, destinationsList);
    this._newTripEventComponent.setSubmitFormHandler(this._handleFormSubmit);
    this._newTripEventComponent.setDeleteClickHandler(this._handleDeleteClick);

    renderElement(this._tripEventsContainer, this._newTripEventComponent, RenderPosition.AFTERBEGIN);

    document.addEventListener(`keydown`, this._escKeyDownHandler);
  }

  delete() {
    if (this._newTripEventComponent === null) {
      return;
    }

    remove(this._newTripEventComponent);
    this._newTripEventComponent = null;

    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }

  setSaving() {
    this._newTripEventComponent.updateData({
      isDisabled: true,
      isSaving: true
    });
  }

  setAborting() {
    const resetFormState = () => {
      this._newTripEventComponent.updateData({
        isDisabled: false,
        isSaving: false,
        isDeleting: false
      });
    };

    this._newTripEventComponent.shake(resetFormState);
  }


  _handleFormSubmit(tripEvent) {
    this._changeData(
        UserAction.ADD_TRIP_EVENT,
        UpdateType.MINOR,
        tripEvent
    );
  }

  _handleDeleteClick() {
    this.delete();
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this.delete();
    }
  }
}

export {NewTripEventPresenter};
