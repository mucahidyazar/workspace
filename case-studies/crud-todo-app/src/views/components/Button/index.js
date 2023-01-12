import React from "react";
import "./button.scss";

function Button({ type, children, onClick }) {
  return (
    <button
      className={"button " + (type ? `button-${type}` : "")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
