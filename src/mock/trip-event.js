import dayjs from "dayjs";
import {getRandomInteger, getRandomItemFromArray, getRandomItemsFromArray} from "../utils/common.js";
import {EVENT_TYPES, EVENT_CITIES, DESTINATION_DESCRIPTION} from "../const.js";

const generatePhotos = () => {
  const getPhoto = () => `http://picsum.photos/248/152?r=${Math.random()}`;
  return new Array(getRandomInteger(1, 5)).fill().map(getPhoto);
};

const generateDate = () => {
  const maxDaysGap = 2;
  const maxHourGap = 3;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  const hourGap = getRandomInteger(-maxHourGap, maxHourGap);

  return dayjs()
    .add(daysGap, `day`)
    .add(hourGap, `hour`)
    .set(`minute`, getRandomItemFromArray([0, 30]))
    .toDate();
};

const generateId = () => Date.now() + (Math.random() * 10000);

const generateTripEvent = (options) => {
  const type = getRandomItemFromArray(EVENT_TYPES);
  const start = generateDate();
  const getFinishDate = (startDate) => {
    return dayjs(startDate).add(getRandomInteger(1, 5), `hour`).toDate();
  };

  return {
    id: generateId(),
    type,
    price: getRandomInteger(50, 500),
    destination: {
      city: getRandomItemFromArray(EVENT_CITIES),
      description: getRandomItemsFromArray(DESTINATION_DESCRIPTION, 1, 5),
      photos: generatePhotos(),
    },
    time: {
      start,
      finish: getFinishDate(start),
    },
    options: getRandomItemsFromArray(options.filter((option) => option.type === type), 0, 5),
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};

export {generateTripEvent};
