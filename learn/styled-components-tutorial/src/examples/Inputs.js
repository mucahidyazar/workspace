import styled from "styled-components";

export const BasicInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Enter Value",
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
  outline: none;
`;

export const AwesomeInput = styled.input.attrs((props) => ({
  type: props.type || "number",
  placeholder: props.placeholder || "Enter Value",
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
  outline: none;
`;
