import React from "react";
import Submenu from "./Submenu";

function Menus({
  mainMenu,
  foods,
  setFoods,
  setSummary,
  menus,
  submenus,
  setSubmenus,
}) {
  return (
    <div className="menus">
      {mainMenu.items.map((item) => {
        return (
          <div
            className="menusItem"
            key={item.caption}
            onClick={() => setFoods(item.items)}
            style={{
              background: `url(${item.image}) no-repeat center center / cover`,
            }}
          >
            <div className="menusItemText">{item.name}</div>
          </div>
        );
      })}
      {foods && (
        <div className="foods">
          <div className="foodsHeader">
            <p>foods Name</p>
            <p onClick={() => setFoods(null)}>Close</p>
          </div>
          <div className="foodsItems">
            {foods.map((food) => {
              return (
                <div
                  className="food"
                  style={{
                    background: `url(${food.image}) no-repeat center center / cover`,
                  }}
                  onClick={() => {
                    setSummary((prev) => ({
                      ...prev,
                      mainFood: {
                        ...food,
                        price: food.price ? parseFloat(food.price) : 0,
                      },
                      subFoods: {},
                    }));
                    if (food.subMenus) {
                      menus.forEach((item) => {
                        if (food.subMenus.includes(item.key)) {
                          setSubmenus((prev) => ({
                            ...prev,
                            [item.key]: item.items,
                          }));
                        }
                      });
                    } else {
                      setSubmenus(null);
                    }
                  }}
                >
                  <div className="foodName">{food.name}</div>
                </div>
              );
            })}
          </div>
          {submenus &&
            Object.entries(submenus).map(([key, items]) => {
              return (
                <Submenu
                  key={key}
                  keyVal={key}
                  setFoods={setFoods}
                  items={items}
                  setSummary={setSummary}
                />
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Menus;
