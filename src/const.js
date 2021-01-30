const EVENT_TYPES = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];

const UserAction = {
  UPDATE_TRIP_EVENT: `UPDATE_TRIP_EVENT`,
  ADD_TRIP_EVENT: `ADD_TRIP_EVENT`,
  DELETE_TRIP_EVENT: `DELETE_TRIP_EVENT`
};

const UpdateType = {
  MINOR: `MINOR`,
  MAJOR: `MAJOR`,
  INIT: `INIT`
};

const FilterType = {
  EVERYTHING: `everything`,
  FUTURE: `future`,
  PAST: `past`
};

const MenuItem = {
  TABLE: `Table`,
  STATS: `Stats`
};


export {
  EVENT_TYPES,
  UpdateType,
  UserAction, FilterType,
  MenuItem};
