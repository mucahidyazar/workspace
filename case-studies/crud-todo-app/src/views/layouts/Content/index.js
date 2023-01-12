import React from "react";
import "./content.scss";

function Content({ children }) {
  return <section className="content">{children}</section>;
}

export default Content;
