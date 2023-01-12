import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Menus from "../../views/components/Menus";
import { colors } from "../../dummy/colors";
import { setFilters } from "../../store/actions";
import Basket from "../../views/components/Basket";

const Home = ({ dispatch, filteredProducts }) => {
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    releaseDateMin: "1990",
    releaseDateMax: "2099",
    createDateMin: "1990",
    createDateMax: "2099",
    color: "",
    sortBy: [],
  });

  const changeInput = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };
  const sortBy = (e) => {
    const sortBy = state.sortBy;
    const index = sortBy.findIndex((item) => item === e.target.id);
    if (sortBy.includes(e.target.id)) {
      sortBy.splice(index, 1);
    } else {
      sortBy.push(e.target.id);
    }
    setState({
      ...state,
      sortBy,
    });
  };

  useEffect(() => {
    if (
      !(parseInt(state.releaseDateMin) > parseInt(state.releaseDateMax)) ||
      !(parseInt(state.createDateMin) > parseInt(state.createDateMax))
    ) {
      dispatch(setFilters(state));
      setError(null);
    } else {
      setError(
        "You cant search like this. Please check the date. Min values should be smller than max value!"
      );
    }
  }, [state, dispatch]);

  return (
    <div className="Home">
      <header className="bg-primary text-white text-center p-4">
        <h1 className="h1">Welcome</h1>
      </header>

      <div className="row py-2">
        {error && <div className="col-md-12 alert alert-danger">{error}</div>}
        <div className="col-md-3">
          <label style={{ cursor: "pointer" }}>Filter Release Date</label>
          <div className="input-group">
            <input
              id="releaseDateMin"
              className="form-control"
              type="year"
              placeholder="Min Year"
              onChange={changeInput}
              value={state.releaseDateMin}
              min={1990}
              minLength={4}
            />
            <input
              id="releaseDateMax"
              className="form-control"
              type="year"
              placeholder="Max Year"
              onChange={changeInput}
              value={state.releaseDateMax}
              min={2099}
              minLength={4}
            />
          </div>
        </div>
        <div className="col-md-3">
          <label style={{ cursor: "pointer" }}>Filter Create Date</label>
          <div className="input-group">
            <input
              id="createDateMin"
              className="form-control"
              type="year"
              placeholder="Min Year"
              onChange={changeInput}
              value={state.createDateMin}
              min={1990}
              minLength={4}
            />
            <input
              id="createDateMax"
              className="form-control"
              type="year"
              placeholder="Max Year"
              onChange={changeInput}
              value={state.createDateMax}
              min={2099}
              minLength={4}
            />
          </div>
        </div>
        <div className="col-md-2">
          <label style={{ cursor: "pointer" }}>Filter Color</label>
          <div className="row">
            {colors.map((color, index) => {
              return (
                <div
                  className="col-1 border border-success"
                  style={{ width: "100%", height: 20, backgroundColor: color }}
                  onClick={() => {
                    setState((prev) => ({
                      ...state,
                      color: prev.color === color ? "" : color,
                    }));
                  }}
                ></div>
              );
            })}
          </div>
        </div>
        <div
          className="col-md-2"
          name="sortByYear"
          id="sortByYear"
          onClick={sortBy}
          style={{ cursor: "pointer" }}
        >
          Sory by Released Year
        </div>
        <div
          className="col-md-2"
          id="sortByPrice"
          onClick={sortBy}
          style={{ cursor: "pointer" }}
        >
          Sort by Price
        </div>
      </div>
      <div className="appContainer">
        <Menus products={filteredProducts} />
        <Basket />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.main.products,
    filteredProducts: state.main.filteredProducts,
    basket: state.main.basket,
  };
};

export default connect(mapStateToProps)(Home);
