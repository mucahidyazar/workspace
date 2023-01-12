import React from "react";

export default function InputSelect(props) {
  return (
    <div
      className={`sort__select ${
        props.sortVisibility ? "sort__select--show" : ""
      }`}
    >
      <div value="Date" className="sort__select--example">
        {props.selectedSort}
      </div>
      <div className="sort__options">{props.children}</div>
    </div>
  );
}
