const { colors } = require("../dummy/colors");
const { getRandomNumber } = require("./getRandomNumber");

export const getRandomColor = () => colors[getRandomNumber(0, colors.length)];
