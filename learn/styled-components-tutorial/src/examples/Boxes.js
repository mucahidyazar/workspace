import styled, { css } from "styled-components";
import { rotate } from "./AnimatedBox";
const Box = css`
  width: 150px;
  height: 150px;
  margin: 1rem;
  border: 2px solid ${(props) => props.color};
  animation: ${rotate} 3s ease-in-out infinite;
`;

export const RedBox = styled.div`
  ${Box};
`;
export const GreenBox = styled.div`
  ${Box};
`;
