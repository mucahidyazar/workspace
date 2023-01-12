import React from "react";
import Home from "./pages/home";
import Details from "./pages/details";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
