import React from "react";

export default function Item(props) {
  return (
    <div className="our-story__item">
      <div className="our-story__item--top">
        <img src={props.image} alt="Our Story" />
      </div>
      <div className="our-story__item--bottom">
        <div>Gallery: The Names of the Slave</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi hic
          consequatur labore odio ipsam error reiciendis laboriosam quibusdam
          quisquam in.
        </div>
        <div className="btn-sm">
          <a href="/">READ MORE</a>
        </div>
      </div>
    </div>
  );
}
