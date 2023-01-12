import styled from "styled-components";

const color = "yellow";
const padding = "padding: 1rem";
const margin = "margin: 1rem";
const border = (width = "3px") => {
  return `border: ${width} solid red`;
};

export const Button = styled.button`
  ${padding};
  ${margin};
  ${border("10px")};
  color: red;
  background: blue;
  text-transform: uppercase;
`;

export const SecondButton = styled.button`
  ${padding};
  ${margin};
  color: ${color};
  ${border()};
  background: var(--primaryColor);
  text-transform: uppercase;
`;

export const PropsButton = styled.button`
  background-color: green;
  color: ${(props) => (props.color ? props.color : "black")};
  padding: ${(props) => (props.big ? "3rem" : "1rem")};
  margin: 1rem;
  font-size: 2rem;
`;

export const DangerButton = styled(PropsButton)`
  background-color: red;
`;
export const SuccessButton = styled(PropsButton)`
  background-color: green;
`;
