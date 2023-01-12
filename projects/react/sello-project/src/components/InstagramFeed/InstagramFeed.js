import React from "react";
import instagramFeedImage1 from "../../public/png/asset-1.png";
import instagramFeedImage2 from "../../public/png/asset-2.png";
import instagramFeedImage3 from "../../public/png/asset-3.png";
import instagramFeedImage4 from "../../public/png/asset-4.png";
import instagramFeedImage5 from "../../public/png/asset-5.png";
import instagramFeedImage6 from "../../public/png/asset-6.png";
import instagramFeedImage7 from "../../public/png/asset-7.png";

export default function InstagramFeed() {
  return (
    <section className="instagram-feed">
      <div className="instagram-feed__gallery">
        <img src={instagramFeedImage1} alt="" />
        <img src={instagramFeedImage2} alt="" />
        <img src={instagramFeedImage3} alt="" />
        <img src={instagramFeedImage4} alt="" />
        <img src={instagramFeedImage5} alt="" />
        <img src={instagramFeedImage6} alt="" />
        <img src={instagramFeedImage7} alt="" />
        <img src={instagramFeedImage1} alt="" />
      </div>
      <div className="instagram-feed__content">
        <i className="fab fa-instagram"></i> Instagram Feed
      </div>
    </section>
  );
}
