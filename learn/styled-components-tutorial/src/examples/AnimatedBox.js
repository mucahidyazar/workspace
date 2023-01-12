import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  0%{
    transform:rotate(0deg)
  }
  50%{
    transform:rotate(360deg)
  }
  100%{
    transform:rotate(-360deg)
  }
`;

export const Box = styled.div`
  margin: 3rem;
  width: 150px;
  height: 150px;
  border: 3px solid blue;
  animation: ${rotate} 3s ease-in-out infinite;
`;
