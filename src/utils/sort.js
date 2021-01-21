const sortByDuration = (tripEventA, tripEventB) => {
  const tripEventADuration = tripEventA.timeFinish - tripEventA.timeStart;
  const tripEventBDuration = tripEventB.timeFinish - tripEventB.timeStart;

  return tripEventBDuration - tripEventADuration;
};

const sortByPrice = (tripEventA, tripEventB) => {
  return tripEventB.price - tripEventA.price;
};

const sortByDate = (tripEventA, tripEventB) => {
  return tripEventA.timeStart - tripEventB.timeStart;
};

export {sortByDuration, sortByPrice, sortByDate};
