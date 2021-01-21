import {FilterType} from "../const.js";

const filters = {
  [FilterType.EVERYTHING]: (tripEvents) => tripEvents,
  [FilterType.FUTURE]: (tripEvents) => tripEvents.filter((tripEvent) => tripEvent.timeStart >= new Date()),
  [FilterType.PAST]: (tripEvents) => tripEvents.filter((tripEvent) => tripEvent.timeStart < new Date()),
};

export {filters};
