import React from "react";
import hotelPhoto1 from "../assets/img/hotel-1.jpg";
import hotelPhoto2 from "../assets/img/hotel-2.jpg";
import hotelPhoto3 from "../assets/img/hotel-3.jpg";
import userPhoto1 from "../assets/img/user-1.jpg";
import userPhoto2 from "../assets/img/user-2.jpg";
import userPhoto3 from "../assets/img/user-3.jpg";
import userPhoto4 from "../assets/img/user-4.jpg";
import userPhoto5 from "../assets/img/user-5.jpg";
import userPhoto6 from "../assets/img/user-6.jpg";

const rightChevron = <i class="fas fa-chevron-right list__item-icon"></i>;

const Main = () => (
  <main className="hotel-view">
    <div className="gallery">
      <figure className="gallery__item">
        <img src={hotelPhoto1} alt="Hotel Photo 1" className="gallery__photo" />
      </figure>
      <figure className="gallery__item">
        <img src={hotelPhoto2} alt="Hotel Photo 2" className="gallery__photo" />
      </figure>
      <figure className="gallery__item">
        <img src={hotelPhoto3} alt="Hotel Photo 3" className="gallery__photo" />
      </figure>
    </div>

    <div className="overview">
      <h1 className="overview__heading">Hotel Las Palmas</h1>
      <div className="overview__stars">
        <i class="fas fa-star overview__icon-star"></i>
        <i class="fas fa-star overview__icon-star"></i>
        <i class="fas fa-star overview__icon-star"></i>
        <i class="fas fa-star overview__icon-star"></i>
        <i class="fas fa-star overview__icon-star"></i>
      </div>
      <div className="overview__location">
        <i class="fas fa-map-marker-alt overview__icon-location"></i>
        <button className="btn-inline">Albufeira, Portugal</button>
      </div>
      <div className="overview__rating">
        <div className="overview__rating-average">8.6</div>
        <div className="overview__rating-count">429 votes</div>
      </div>
    </div>

    <div className="detail">
      <div className="description">
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          deserunt consequuntur numquam magnam nesciunt corrupti, consequatur ut
          omnis provident dolor perspiciatis sunt nisi. Explicabo consequatur
          illum aperiam perferendis dolores ratione!
        </p>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          deserunt consequuntur numquam magnam nesciunt corrupti, consequatur ut
          omnis provident dolor perspiciatis sunt nisi. Explicabo consequatur
          illum aperiam perferendis dolores ratione!
        </p>
        <ul className="list">
          <li className="list__item">{rightChevron}Close to the beach</li>
          <li className="list__item">{rightChevron}Breakfast included</li>
          <li className="list__item">{rightChevron}Free airport shuttle</li>
          <li className="list__item">{rightChevron}Free wifi in all rooms</li>
          <li className="list__item">
            {rightChevron}Air condintioning and heating
          </li>
          <li className="list__item">{rightChevron}Pets allowed</li>
          <li className="list__item">{rightChevron}We speak all languages</li>
          <li className="list__item">{rightChevron}Perfect for families</li>
        </ul>
        <div className="recommend">
          <p className="recommend__count">
            Lucy and 3 other friends recommend this hotel
          </p>
          <div className="recommend__friends">
            <img src={userPhoto1} alt="Friend 1" className="recommend__photo" />
            <img src={userPhoto2} alt="Friend 2" className="recommend__photo" />
            <img src={userPhoto3} alt="Friend 3" className="recommend__photo" />
            <img src={userPhoto4} alt="Friend 4" className="recommend__photo" />
          </div>
        </div>
      </div>
      <div className="user-reviews">
        <figure className="review">
          <blockquote className="review__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus unde
            culpa modi error ea ullam vel enim cumque aliquid inventore.
          </blockquote>
          <figcaption className="review__user">
            <img src={userPhoto5} alt="User 5" className="review__photo" />
            <div className="review__user-box">
              <p className="review__user-name">Nick Smith</p>
              <p className="review__user-date">Feb 23rd, 2019</p>
            </div>
            <div className="review__rating">7.8</div>
          </figcaption>
        </figure>

        <figure className="review">
          <blockquote className="review__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus unde
            culpa modi error que aliquid inventore.
          </blockquote>
          <figcaption className="review__user">
            <img src={userPhoto6} alt="User 6" className="review__photo" />
            <div className="review__user-box">
              <p className="review__user-name">Mary Thomas</p>
              <p className="review__user-date">Sept 13th, 2017</p>
            </div>
            <div className="review__rating">9.3</div>
          </figcaption>
        </figure>

        <button className="btn-inline">
          Show all <span>&rarr;</span>
        </button>
      </div>
    </div>

    <div className="cta">
      <h2 className="cta__book-now">
        Good news! We have 4 free rooms for your selected dates!
      </h2>
      <button className="btn">
        <span className="btn__visible">Book now</span>
        <span className="btn__invisible">Only 4 rooms left</span>
      </button>
    </div>
  </main>
);

export default Main;
