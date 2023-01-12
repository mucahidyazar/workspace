import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import headerImage from "../../public/png/slider3-element1-1.png";

export default function Header() {
  return (
    <header>
      <div id="nav">
        <img src={headerImage} alt="" />
        <div className="container">
          <div className="nav">
            <div className="nav__logo">
              SELLO
              <div className="nav__logo--dot"></div>
            </div>
            <ul className="nav__menu">
              <li className="nav__menu--item nav__menu--active">
                <a href="/home">Home</a>
              </li>
              <li className="nav__menu--item">
                <a href="/product">Product</a>
              </li>
              <li className="nav__menu--item">
                <a href="/blog">Blog</a>
              </li>
              <li className="nav__menu--item">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="header">
        <SectionTitle number="01" title="INTRO" />
        <div className="container">
          <div className="header__body">
            <div className="header__body--title heading-4">
              SALE OFF! UP TO 70%
            </div>
            <div className="header__body--body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <div className="header__body--button btn-sm">
              <a href="/">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
