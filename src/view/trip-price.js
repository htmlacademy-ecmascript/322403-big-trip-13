const createTripPriceTemplate = (routeDetails) => {
  return `<p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${routeDetails.totalPrice}</span>
            </p>`;
};

export {createTripPriceTemplate};
