import React from "react";
import Auxilliary from "../../../hoc/Auxilliary/Auxilliary";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (igKey, index) => {
      return (
        <li key={index}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {props.ingredients[igKey]}
        </li>
      );
    }
  );
  return (
    <Auxilliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <p>
        <strong>Total Price:</strong>
        {props.price.toFixed(2)}
      </p>
      <Button btnType="button__danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="button__success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Auxilliary>
  );
};

export default orderSummary;
