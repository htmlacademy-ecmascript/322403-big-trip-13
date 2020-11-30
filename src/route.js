const calculateRouteDetails = (tripEvents) => {
  const getCities = () => {
    let result = [];

    for (const tripEvent of tripEvents) {
      if (!result || result[tripEvents.length - 1] !== tripEvent.destination.city) {
        result.push(tripEvent.destination.city);
      }
    }

    return result;
  };

  const getTotalPrice = () => tripEvents.reduce((sum, element) => sum + element.price, 0);

  return {
    cities: getCities(),
    dates: {
      start: tripEvents[0].time.start,
      finish: tripEvents[tripEvents.length - 1].time.finish,
    },
    totalPrice: getTotalPrice()
  };
};

export {calculateRouteDetails};
