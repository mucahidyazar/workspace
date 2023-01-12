import React from "react";
import "./layout.scss";
import Header from "../Header";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="container">
        <Header />
        <div className="mainBody">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
