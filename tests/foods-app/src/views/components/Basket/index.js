import React from "react";

function Basket({ summary, total }) {
  return (
    <div className="basket">
      <h2>Menu</h2>
      <div className="basketMenu">
        {summary.mainFood && (
          <div className="summaryItem">
            <div className="summaryHeader">
              <h2>Main Food</h2>
            </div>
            <div className="summaryContent">
              <div>{summary.mainFood.name}</div>
              <div>{summary.mainFood.price}</div>
            </div>
          </div>
        )}
        {Object.entries(summary.subFoods).length > 0 &&
          Object.entries(summary.subFoods).map(([key, food]) => (
            <div className="summaryItem">
              <div className="summaryHeader">
                <h2>{key.split("-").join(" ")}</h2>
              </div>
              <div className="summaryContent">
                <div>{food.name}</div>
                <div>{food.price === 0 ? "Free" : food.price}</div>
              </div>
            </div>
          ))}
      </div>
      <div className="basketTotal">{total ? total + "$" : "-"}</div>
    </div>
  );
}

export default Basket;
