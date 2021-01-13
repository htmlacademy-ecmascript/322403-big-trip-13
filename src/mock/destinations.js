import {EVENT_CITIES, DESTINATION_DESCRIPTION} from "../const.js";
import {getRandomInteger, getRandomItemsFromArray} from "../utils/common.js";

const generatePhotos = () => {
  const getPhoto = () => `http://picsum.photos/248/152?r=${Math.random()}`;
  return new Array(getRandomInteger(0, 5)).fill().map(getPhoto);
};

const generateDestinationsList = () => {
  let result = [];
  for (const city of EVENT_CITIES) {
    result.push({
      city,
      description: getRandomItemsFromArray(DESTINATION_DESCRIPTION, 1, 5),
      photos: generatePhotos()
    });
  }
  return result;
};

export {generateDestinationsList};
