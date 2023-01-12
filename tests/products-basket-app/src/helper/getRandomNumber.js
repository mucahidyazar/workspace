export const getRandomNumber = (x = 1, y = 10) => {
  return Math.floor(Math.random() * y) + x;
};
