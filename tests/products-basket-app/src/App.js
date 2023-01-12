import React, { useEffect } from "react";
import "./app.scss";
import { getProducts } from "./store/actions";
import { connect } from "react-redux";
import Home from "./pages/Home";

function App({ dispatch, products }) {
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    products && (
      <div className="app">
        <Home />
      </div>
    )
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.main.products,
  };
};
export default connect(mapStateToProps)(App);
