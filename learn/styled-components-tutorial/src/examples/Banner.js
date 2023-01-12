import React from "react";
import styled from "styled-components";

const Banner = ({ title, children, color }) => {
  return (
    <BannerWrapper color={color}>
      <h1>{title}</h1>
      {children}
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  color: ${(props) => props.color};
  font-size: 30px;
  text-transform: uppercase;
  text-align: center;

  h1:hover {
    color: red;
  }
`;

export default Banner;
