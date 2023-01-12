import React from "react";
import styled from "styled-components";

const StyledHeader = ({ title }) => {
  return (
    <StyledWrapper>
      <h1>hello from styled header</h1>
      <p>{title}</p>
      <div className="random">
        <h2 className="randomHeading">another heading</h2>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  background-color: orange;
  transition: all 0.3s;

  h1 {
    color: blue;
  }

  .random {
    background-color: purple;

    &Heading {
      color: green;
    }
  }

  &:hover {
    background-color: brown;
  }
`;

export default StyledHeader;
