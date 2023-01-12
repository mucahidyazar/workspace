import React from "react";
import { connect } from "react-redux";

function Basket({ basket }) {
  return (
    <div className="basket">
      <h2>Menu</h2>
      <div className="basketMenu">
        {basket.map((item) => (
          <div className="summaryItem">
            <div className="summaryHeader">
              <h5>{item.title}</h5>
            </div>
            <div className="summaryContent">
              <div>{item.category}</div>
              <div>{item.price === 0 ? "Free" : item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.main.basket,
  };
};

export default connect(mapStateToProps)(Basket);
