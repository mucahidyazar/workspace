import React from "react";

const Nav = () => (
  <nav className="sidebar">
    <ul className="side-nav">
      <li className="side-nav__item">
        <a href="#" className="side-nav__link">
          <i class="fas fa-hotel side-nav__icon"></i>
          <span>Hotel</span>
        </a>
      </li>
      <li className="side-nav__item">
        <a href="#" className="side-nav__link">
          <i class="fas fa-plane-departure side-nav__icon"></i>
          <span>Flight</span>
        </a>
      </li>
      <li className="side-nav__item">
        <a href="#" className="side-nav__link">
          <i class="fas fa-key side-nav__icon"></i>
          <span>Car rental</span>
        </a>
      </li>
      <li className="side-nav__item">
        <a href="#" className="side-nav__link">
          <i class="far fa-map side-nav__icon"></i>
          <span>Tours</span>
        </a>
      </li>
    </ul>

    <div className="legal">&copy; 2017 by trillo. All rights reserved.</div>
  </nav>
);

export default Nav;
