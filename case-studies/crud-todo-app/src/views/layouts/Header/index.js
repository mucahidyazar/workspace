import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import Button from "../../components/Button";

function Header() {
  return (
    <header id="header">
      <div className="headerLeft">
        <h1>
          <NavLink to="/">Sikayetvar</NavLink>
        </h1>
        <p>Posts</p>
      </div>
      <div className="headerRight">
        <Button>Login</Button>
      </div>
    </header>
  );
}

export default Header;
