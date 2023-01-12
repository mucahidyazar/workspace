import React from "react";
import logo from "../assets/img/logo.png";
import userPhoto from "../assets/img/user.jpg";

const header = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="trillo logo" />
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search hotels"
        />
        <button className="search__button">
          <i className="fas fa-search search__icon"></i>
        </button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <i className="fas fa-bookmark user-nav__icon"></i>
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <i className="fas fa-comments user-nav__icon"></i>
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img
            src={userPhoto}
            alt="User photo"
            className="user-nav__user-photo"
          />
          <span className="user-nav__user-name">Mucahid Yazar</span>
        </div>
      </nav>
    </header>
  );
};

export default header;
