import React from "react";
import { NavLink } from "react-router-dom";

const navigationItem = props => (
  <li className="navigation-items__item">
    <NavLink
      exact
      activeClassName="navigation-items__link-active"
      to={props.link}
      className={
        props.active
          ? "navigation-items__link-active"
          : "navigation-items__link"
      }
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
