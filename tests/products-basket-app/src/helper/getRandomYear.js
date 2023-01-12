const { years } = require("../dummy/years");
const { getRandomNumber } = require("./getRandomNumber");

export const getRandomYear = () => years[getRandomNumber(0, years.length)];
