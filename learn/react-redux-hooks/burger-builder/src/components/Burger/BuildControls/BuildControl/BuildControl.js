import React from "react";

const buildControl = props => (
  <div className="build-control">
    <div className="build-control__label">{props.label}</div>
    <button
      disabled={props.disabled}
      className="build-control__less"
      onClick={() => props.removed(props.type)}
    >
      Less
    </button>
    <button
      className="build-control__more"
      onClick={() => props.added(props.type)}
    >
      More
    </button>
  </div>
);

export default buildControl;
