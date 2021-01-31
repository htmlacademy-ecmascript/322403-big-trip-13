import FiltersView from "../view/filters.js";
import {renderElement, RenderPosition, replace, remove} from "../utils/render.js";
import {filters} from "../utils/filters.js";
import {FilterType, UpdateType} from "../const.js";

export default class FiltersPresenter {
  constructor(filterContainer, filterModel, tripEventsModel) {
    this._filterContainer = filterContainer;
    this._filterModel = filterModel;
    this._tripEventsModel = tripEventsModel;
    this._currentFilter = null;

    this._filterComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);

    this._tripEventsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  init() {
    this._currentFilter = this._filterModel.getFilter();

    const filterItems = this._getFilters();
    const prevFilterComponent = this._filterComponent;

    this._filterComponent = new FiltersView(filterItems, this._currentFilter);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);

    if (prevFilterComponent === null) {
      renderElement(this._filterContainer, this._filterComponent, RenderPosition.BEFOREEND);
      return;
    }

    replace(this._filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  _getFilters() {
    const tripEvents = this._tripEventsModel.getTripEvents();

    return [
      {
        type: FilterType.EVERYTHING,
        name: `everything`,
        available: Boolean(filters[FilterType.EVERYTHING](tripEvents).length)
      },
      {
        type: FilterType.FUTURE,
        name: `future`,
        available: Boolean(filters[FilterType.FUTURE](tripEvents).length)
      },
      {
        type: FilterType.PAST,
        name: `past`,
        available: Boolean(filters[FilterType.PAST](tripEvents).length)
      }
    ];
  }

  _handleModelEvent() {
    this.init();
  }

  _handleFilterTypeChange(filterType) {
    if (this._currentFilter === filterType) {
      return;
    }

    this._filterModel.setFilter(UpdateType.MAJOR, filterType);
  }
}

