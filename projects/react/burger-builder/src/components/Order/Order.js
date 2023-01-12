import React from "react";

const order = props => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map((ig, index) => (
    <span
      ky={index}
      style={{
        textTransform: "capitalize",
        display: "inline-block",
        margin: "0 .8rem",
        border: "1px solid #ccc",
        padding: ".5rem"
      }}
    >
      {ig.name}: ({ig.amount})
    </span>
  ));

  return (
    <div className="order">
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
