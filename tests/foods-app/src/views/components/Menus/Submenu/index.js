import React from "react";
import "./index.scss";

function Submenu({ keyVal: key, setFoods, items, setSummary }) {
  return (
    <div className="submenu">
      <input type="checkbox" id={key} />
      <label htmlFor={key} className="submenuHeader">
        <p>{key.split("-").join(" ").toUpperCase()}</p>
        <p onClick={() => setFoods(null)}>Close</p>
      </label>
      <div className="submenuItems">
        {items.map((food) => {
          return (
            <div
              className="food"
              style={{
                background: `url(${food.image}) no-repeat center center / cover`,
              }}
              onClick={() => {
                setSummary((prev) => ({
                  ...prev,
                  subFoods: {
                    ...prev.subFoods,
                    [key]: {
                      ...food,
                      price: food.price ? parseFloat(food.price) : 0,
                    },
                  },
                }));
              }}
            >
              <div className="foodName">{food.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Submenu;
