import React, { useCallback, useEffect, useState } from "react";
import "./app.scss";
import { menus } from "./dummy/menu.json";
import Basket from "./views/components/Basket";
import Menus from "./views/components/Menus";

function App() {
  const mainMenu = menus[0];
  const [foods, setFoods] = useState(null);
  const [submenus, setSubmenus] = useState(null);
  const [total, setTotal] = useState(null);
  const [summary, setSummary] = useState({
    mainFood: null,
    subFoods: {},
  });

  const calcTotal = useCallback(() => {
    let tempTot = 0;
    Object.values(summary.subFoods).forEach((food) => {
      tempTot += food.price;
    });
    setTotal((summary.mainFood?.price || 0) + tempTot);
  }, [summary]);

  useEffect(() => {
    calcTotal();
  }, [summary, calcTotal]);

  return (
    <div className="app">
      <div className="header">Welcome to our website</div>
      <div className="appContainer">
        <Menus
          mainMenu={mainMenu}
          foods={foods}
          setFoods={setFoods}
          setSummary={setSummary}
          menus={menus}
          submenus={submenus}
          setSubmenus={setSubmenus}
        />
        <Basket summary={summary} total={total} />
      </div>
    </div>
  );
}

export default App;
