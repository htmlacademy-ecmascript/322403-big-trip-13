const calculateRouteDetails = (tripEvents) => {
  if (tripEvents.length === 0) {
    return null;
  }

  const getCities = () => {
    let result = [];

    for (const tripEvent of tripEvents) {
      if (!result || result[tripEvents.length - 1] !== tripEvent.destination.name) {
        result.push(tripEvent.destination.name);
      }
    }

    return result;
  };

  const getTotalPrice = () => tripEvents.reduce((sum, element) => sum + element.price, 0);

  return {
    cities: getCities(),
    dates: {
      start: tripEvents[0].timeStart,
      finish: tripEvents[tripEvents.length - 1].timeFinish,
    },
    totalPrice: getTotalPrice()
  };
};

export {calculateRouteDetails};
