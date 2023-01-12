import React from "react";
import Item from "./Item/Item";
import SectionTitle from "../SectionTitle/SectionTitle";
import trendingImage1 from "../../public/png/Bobbi_Chunky_Pom_Beanie-5.png";
import trendingImage2 from "../../public/png/Bobbi_Chunky_Pom_Beanie-7.png";
import trendingImage3 from "../../public/png/Bobbi_Chunky_Pom_Beanie-9.png";
import trendingImage4 from "../../public/png/Bobbi_Chunky_Pom_Beanie-6.png";
import trendingImage5 from "../../public/png/Bobbi_Chunky_Pom_Beanie-8.png";
import trendingImage6 from "../../public/png/Bobbi_Chunky_Pom_Beanie-10.png";

export default function Trending() {
  return (
    <section className="trending">
      <SectionTitle number="02" title="TRENDING" />
      <section className="container">
        <div className="trending__header">
          <ul className="trending__header--right">
            <li className="nav__menu--item nav__menu--active">
              <a href="/">T-Shirt</a>
            </li>
            <li className="nav__menu--item">
              <a href="/">Pants</a>
            </li>
            <li className="nav__menu--item">
              <a href="/">Shoe</a>
            </li>
            <li className="nav__menu--item">
              <a href="/">Jacket</a>
            </li>
            <li className="nav__menu--item">
              <a href="/">Fashion</a>
            </li>
          </ul>
          <div className="trending__header--left">ALL PRODUCTS</div>
        </div>
        <div className="trending__body">
          <div className="t-catalog">
            <Item image={trendingImage1} />
            <Item image={trendingImage2} />
            <Item image={trendingImage3} />
            <Item image={trendingImage4} />
            <Item image={trendingImage5} />
            <Item image={trendingImage6} />
          </div>
        </div>
      </section>
    </section>
  );
}
