const sortByTime = (tripEventA, tripEventB) => {
  const tripEventADuration = tripEventA.timeFinish - tripEventA.timeStart;
  const tripEventBDuration = tripEventB.timeFinish - tripEventB.timeStart;

  return tripEventBDuration - tripEventADuration;
};

const sortByPrice = (tripEventA, tripEventB) => {
  return tripEventB.price - tripEventA.price;
};

export {sortByTime, sortByPrice};
