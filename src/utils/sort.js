const sortByTime = (tripEventA, tripEventB) => {
  const tripEventADuration = tripEventA.time.finish - tripEventA.time.start;
  const tripEventBDuration = tripEventB.time.finish - tripEventB.time.start;

  return tripEventBDuration - tripEventADuration;
};

const sortByPrice = (tripEventA, tripEventB) => {
  return tripEventB.price - tripEventA.price;
};

export {sortByTime, sortByPrice};
