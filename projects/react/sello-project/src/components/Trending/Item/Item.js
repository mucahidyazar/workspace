import React from "react";

export default function OurStoryItem(props) {
  return (
    <div className="our-story-item__body--item">
      <div className="our-story-image">
        <img src={props.image} alt="" />
        <div>-30%</div>
      </div>
      <div className="our-story-body">
        <div className="our-story-body__top">
          <div>Denim Shell Top Ruffle</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            voluptatum modi culpa nemo tempore sit, ad perferendis consectetur
            voluptates? Quibusdam!
          </div>
          <div className="btn-sm">
            <a href="/">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
