import dayjs from "dayjs";
import {getRandomInteger, getRandomItemFromArray, getRandomItemsFromArray} from "../utils/common.js";
import {EVENT_TYPES} from "../const.js";

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

const generateTripEvent = (options, destinations) => {
  const type = getRandomItemFromArray(EVENT_TYPES);
  const start = generateDate();
  const getFinishDate = (startDate) => {
    return dayjs(startDate).add(getRandomInteger(1, 5), `hour`).toDate();
  };

  return {
    id: generateId(),
    type,
    price: getRandomInteger(50, 500),
    destination: getRandomItemFromArray(destinations),
    timeStart: start,
    timeFinish: getFinishDate(start),
    options: getRandomItemsFromArray(options.filter((option) => option.type === type), 0, 5),
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};

export {generateTripEvent};
