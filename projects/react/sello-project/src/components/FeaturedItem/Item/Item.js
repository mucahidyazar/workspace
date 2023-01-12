import React from "react";

export default function FeaturedItem(props) {
  return (
    <div className="featured-item__body--item">
      <div className="featured-image">
        <img src={props.image} alt="" />
        <div>-30%</div>
      </div>
      <div className="featured-body">
        <div className="featured-body__top">
          <div>Denim Shell Top Ruffle</div>
          <div>$36.00</div>
        </div>
        <div className="featured-body__bottom">
          <div className="featured-body__bottom--left">
            <div className="first">
              <i className="fas fa-warehouse"></i>
              <span>1200</span>
            </div>
            <div className="second">
              <i className="fas fa-warehouse"></i>
              <span>1200</span>
            </div>
          </div>
          <div className="featured-body__bottom--right">
            <i className="fas fa-warehouse"></i>
            <span>ADD TO CART</span>
          </div>
        </div>
      </div>
    </div>
  );
}
