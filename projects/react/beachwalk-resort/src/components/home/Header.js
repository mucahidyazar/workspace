import React from "react";
import Hero from "../globals/Hero";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";

const Header = () => {
  return (
    <Hero img="/assets/images/homeBcg.jpeg">
      <Banner
        greeting="welcome to"
        title="beachwalk resort"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        tenetur tempore autem exercitationem placeat perspiciatis."
      >
        <PrimaryBtn as="a" href="https://www.google.com" t="2rem">
          Click Me
        </PrimaryBtn>
      </Banner>
    </Hero>
  );
};

export default Header;
