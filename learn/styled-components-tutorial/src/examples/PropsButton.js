import styled from "styled-components";

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
