import React from "react";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  {
    label: "Salad",
    type: "salad"
  },
  {
    label: "Bacon",
    type: "bacon"
  },
  {
    label: "Cheese",
    type: "cheese"
  },
  {
    label: "Meat",
    type: "meat"
  }
];

const buildControls = props => (
  <div className="build-controls">
    <p>
      Current Price : <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl, index) => (
      <BuildControl
        key={index}
        label={ctrl.label}
        type={ctrl.type}
        added={props.ingredientAdded}
        removed={props.ingredientRemoved}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      disabled={!props.purchasable}
      className="order-button"
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
