import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";

export default class TrilloApp extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Content />
      </div>
    );
  }
}
