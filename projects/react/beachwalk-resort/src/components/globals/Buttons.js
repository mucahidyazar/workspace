import styled from "styled-components";
import {
  setBorder,
  setColor,
  setFont,
  setLetterSpacing,
  setRem,
  setTransition,
} from "../../styles";

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  padding: ${setRem(17)} ${setRem(36)};
  ${setFont.main};
  ${setBorder({ color: setColor.primaryColor })};
  ${setLetterSpacing(3)};
  text-decoration: none;
  ${setTransition({ property: "all", time: "0.3s" })};
  ${(props) =>
    `margin: ${props.t || 0} ${props.r || 0}} ${props.b || 0}} ${
      props.l || 0
    };`}
  cursor: pointer;

  &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  }
`;

export const SmallBtn = styled(PrimaryBtn)`
  padding: ${setRem(9)} ${setRem(12)};
`;
