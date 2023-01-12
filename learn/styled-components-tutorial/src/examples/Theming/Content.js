import React from "react";
import styled from "styled-components";

const Content = ({ className }) => {
  return (
    <section className={className}>
      <h3>section title</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
        necessitatibus ipsam sunt, laudantium perspiciatis officia? Quod quo et
        adipisci ullam obcaecati error sapiente nesciunt itaque commodi
        provident, numquam minima odit!
      </p>
    </section>
  );
};

export default styled(Content)`
  text-transform: capitalize;
  padding: 2rem;
  ${(props) => `background: ${props.theme.secondaryColor}`};
  ${(props) => `color: ${props.theme.primaryColor}`};
`;
