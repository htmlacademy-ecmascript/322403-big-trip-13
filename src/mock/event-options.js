import {OPTION_NAMES, EVENT_TYPES} from "../const.js";
import {getRandomInteger, getRandomItemsFromArray} from "../utils/common.js";

const generateOptions = () => {
  let result = [];
  for (const type of EVENT_TYPES) {
    for (const name of getRandomItemsFromArray(OPTION_NAMES, 4, OPTION_NAMES.length)) {
      result.push({
        type,
        name,
        price: getRandomInteger(20, 200)
      });
    }
  }

  return result;
};

export {generateOptions};
