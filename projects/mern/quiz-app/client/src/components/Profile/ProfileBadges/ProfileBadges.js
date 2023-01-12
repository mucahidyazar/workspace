import React from "react";

export default function ProfileBadges() {
  return (
    <div className="badges">
      <div className="badges__title">Badges</div>
      <div className="badges__body">
        <div className="badges__body--item">
          <i className="fas fa-ribbon"></i>
          <span>Ribbon Hunter</span>
        </div>
        <div className="badges__body--item">
          <i className="fas fa-allergies"></i>
          <span>Allergy Man</span>
        </div>
        <div className="badges__body--item">
          <i className="fab fa-angellist"></i>
          <span>Angellist</span>
        </div>
        <div className="badges__body--item">
          <i className="far fa-angry"></i>
          <span>Angry Quizer</span>
        </div>
        <div className="badges__body--item">
          <i className="fas fa-at"></i>
          <span>Postman</span>
        </div>
        <div className="badges__body--item">
          <i className="fas fa-baby-carriage"></i>
          <span>Baby Baby</span>
        </div>
        <div className="badges__body--item">
          <i className="fas fa-binoculars"></i>
          <span>Scoper</span>
        </div>
        <div className="badges__body--item">
          <i className="fab fa-black-tie"></i>
          <span>Gentlemen</span>
        </div>
      </div>
    </div>
  );
}
