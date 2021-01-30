const calculateRouteDetails = (tripEvents) => {
  if (tripEvents.length === 0) {
    return null;
  }

  const getCities = () => {
    const result = [];

    for (const tripEvent of tripEvents) {
      if (!result || result[tripEvents.length - 1] !== tripEvent.destination.name) {
        result.push(tripEvent.destination.name);
      }
    }

    return result;
  };

  const getTotalPrice = () => {
    return tripEvents.reduce(
        (total, element) => total + element.price + element.options.reduce((sum, option) => sum + option.price, 0), 0);
  };

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
