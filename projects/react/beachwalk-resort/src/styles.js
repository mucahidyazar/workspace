import { css } from "styled-components";

export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7",
};

export const setFont = {
  main: "font-family: 'Lato', sans-serif, cursive",
  slanted: "font-family: 'Poppins', sans-serif, cursive",
};

export const setFlex = ({ x = "center", y = "center" }) => {
  return `
    display: flex;
    flex-direction: row;
    align-items: ${x};
    justify-content: ${y};
  `;
};

export const setBackground = ({
  img = "/assets/images/homeBcg.jpeg",
  color = "rgba(0,0,0,0)",
} = {}) => {
  return `background: linear-gradient(${color}, ${color}), url(${img}) no-repeat center center / cover;`;
};

export const setRem = (number = 16) => {
  return `${number / 10}rem`;
};

export const setLetterSpacing = (number = 2) => {
  return `letter-spacing: ${number}px;`;
};

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black",
} = {}) => {
  return `border: ${width} ${style} ${color};`;
};

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out",
} = {}) => {
  return `transition: ${property} ${time} ${timing}`;
};

export const setShadow = {
  light: "box-shadow: 3px 3px 1px 0px rgba(0,0,0,0.25)",
  dark: "box-shadow: 6px 6px 3px 0px rgba(0,0,0,0.50)",
  darkest: "box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75)",
};
