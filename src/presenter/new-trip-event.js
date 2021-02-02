import NewEventCreatorView from "../view/new-event-creator.js";
import {remove, renderElement, RenderPosition} from "../utils/render.js";
import {UserAction, UpdateType} from "../const.js";
import {isOnline} from "../utils/common.js";
import {toast} from "../utils/toast/toast.js";

export default class NewTripEventPresenter {
  constructor(changeData) {

    this._changeData = changeData;

    this._newTripEventComponent = null;

    this._handleRollUp = this._handleRollUp.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init(tripEventsContainer, eventOptions, destinationsList, newEventButton) {
    if (this._newTripEventComponent !== null) {
      return;
    }

    this._tripEventsContainer = tripEventsContainer;
    this._newEventButton = newEventButton;
    this._newTripEventComponent = new NewEventCreatorView(eventOptions, destinationsList);
    this._newTripEventComponent.setSubmitFormHandler(this._handleFormSubmit);
    this._newTripEventComponent.setDeleteClickHandler(this._handleDeleteClick);
    this._newTripEventComponent.setRollUpHandler(this._handleRollUp);

    renderElement(this._tripEventsContainer, this._newTripEventComponent, RenderPosition.AFTERBEGIN);
    this._newEventButton.disabled = true;

    document.addEventListener(`keydown`, this._escKeyDownHandler);
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

  delete() {
    if (this._newTripEventComponent === null) {
      return;
    }

    remove(this._newTripEventComponent);
    this._newTripEventComponent = null;
    this._newEventButton.disabled = false;

    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }


  _handleFormSubmit(tripEvent) {
    if (!isOnline()) {
      this._newTripEventComponent.shake(() => toast(`You can't create event offline`));
      return;
    }

    this._changeData(
        UserAction.ADD_TRIP_EVENT,
        UpdateType.MINOR,
        tripEvent
    );
  }

  _handleDeleteClick() {
    this.delete();
  }

  _handleRollUp() {
    this.delete();
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this.delete();
    }
  }
}
