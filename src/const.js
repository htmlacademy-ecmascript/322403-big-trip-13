const EVENT_TYPES = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];
const EVENT_CITIES = [`Amsterdam`, `Chamonix`, `Geneva`];
const DESTINATION_DESCRIPTION = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];
const OPTION_NAMES = [
  `Order Uber`, `Add luggage`, `Switch to comfort`, `Rent a car`, `Add breakfast`, `Book tickets`, `Lunch in city`,
  `Choose seats`, `Travel by train`, `Add meal`
];

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
  EVENT_CITIES,
  DESTINATION_DESCRIPTION,
  OPTION_NAMES, UpdateType,
  UserAction, FilterType,
  MenuItem};
