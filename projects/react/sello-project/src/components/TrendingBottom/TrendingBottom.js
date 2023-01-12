import React from "react";
import trendingBottom1 from "../../public/png/banner1.png";
import trendingBottom2 from "../../public/png/banner2(2).png";

export default function TrendingBottom() {
  return (
    <div className="container">
      <section className="trending-bottom">
        <div className="trending-bottom__left">
          <img src={trendingBottom1} alt="" />
          <div className="trending-bottom__left--content">
            <div>SUMMER SALE</div>
            <div className="trending__content--sale">UPTO 70% OFF NOW</div>
            <div className="btn-sm">
              <a href="/">SHOP NOW</a>
            </div>
          </div>
        </div>
        <div className="trending-bottom__right">
          <div className="trending-bottom__right--content">
            <div>SUMMER SALE</div>
            <div className="trending__content--sale">UPTO 70% OFF NOW</div>
            <div className="btn-sm">
              <a href="/">SHOP NOW</a>
            </div>
          </div>
          <img src={trendingBottom2} alt="" />
        </div>
      </section>
    </div>
  );
}
