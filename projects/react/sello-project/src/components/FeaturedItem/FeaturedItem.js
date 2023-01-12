import React from "react";
import Item from "./Item/Item";
import SectionTitle from "../SectionTitle/SectionTitle";
import FeaturedItemImage1 from "../../public/png/image1xxl4-420x540.png";
import FeaturedItemImage2 from "../../public/png/Bobbi_Chunky_Pom_Beanie2-570x727.png";
import FeaturedItemImage3 from "../../public/png/Bobbi_Chunky_Pom_Beanie-1.png";
import FeaturedItemImage4 from "../../public/png/Bobbi_Chunky_Pom_Beanie-2.png";
import FeaturedItemImage5 from "../../public/png/Bobbi_Chunky_Pom_Beanie-9.png";
import FeaturedItemImage6 from "../../public/png/Bobbi_Chunky_Pom_Beanie-4.png";

export default function FeaturedItem() {
  return (
    <section className="featured-item">
      <SectionTitle number="03" title="FEATURED ITEM" />
      <div className="container">
        <div className="featured-item__body">
          <Item image={FeaturedItemImage1} />
          <Item image={FeaturedItemImage2} />
          <Item image={FeaturedItemImage3} />
          <Item image={FeaturedItemImage4} />
          <Item image={FeaturedItemImage5} />
          <Item image={FeaturedItemImage6} />
        </div>
      </div>
    </section>
  );
}
