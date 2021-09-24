const generateRandomNumber = () => Math.floor(Math.random() * 100 + 1);

const createArray = (limit) =>
  Array.from({ length: limit }, generateRandomNumber);

module.exports = createArray;
