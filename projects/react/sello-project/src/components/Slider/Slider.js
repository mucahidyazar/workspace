import React from "react";
import sliderImage from "../../public/png/slider-1.png";

export default function Slider() {
  return (
    <section className="slider">
      <div className="container">
        <div className="slider__image">
          <img src={sliderImage} alt="" />
          <div className="slider__image--content">
            <div className="slider__title">
              <span>SUBSCRIBE</span> NOW
            </div>
            <div className="slider__message">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, tempora?
            </div>

            <div className="slider__form">
              <input type="text" placeholder="Enter the email adress" />
              <button>
                <i className="fas fa-warehouse"></i>Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
