import React from "react";
import burgerLogo from "../../assets/img/burger-logo.png";

const logo = props => (
  <div className="logo" style={{ height: props.height }}>
    <img src={burgerLogo} alt="Burger Builder Logo" className="logo__image" />
  </div>
);

export default logo;
