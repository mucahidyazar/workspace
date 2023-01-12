import React from "react";
import styled from "styled-components";

const AlternativeHeader = ({ className }) => {
  return (
    <section className={className}>
      <h1>hello from alternative header</h1>
      <div className="random">
        <h2 className="randomHeading">another heading</h2>
      </div>
    </section>
  );
};

export default styled(AlternativeHeader)`
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
