const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomItemFromArray = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};

const getRandomItemsFromArray = (array, min, max) => {
  const arrayCopy = Array.from(array);
  const resultLength = getRandomInteger(min, max);
  return arrayCopy.sort(() => 0.5 - Math.random()).slice(0, resultLength);
};

const generateId = () => Date.now() + (Math.random() * 10000);

export {
  getRandomInteger,
  getRandomItemFromArray,
  getRandomItemsFromArray,
  generateId
};
