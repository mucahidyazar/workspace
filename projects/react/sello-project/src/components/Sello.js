import React from "react";
import Header from "./Header/Header";
import Trending from "./Trending/Trending";
import TrendingBottom from "./TrendingBottom/TrendingBottom";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import Slider from "./Slider/Slider";
import OurStory from "./OurStory/OurStory";
import InstagramFeed from "./InstagramFeed/InstagramFeed";
import Category from "./Category/Category";
import Footer from "./Footer/Footer";
import FooterLast from "./FooterLast/FooterLast";

export default function Sello() {
  return (
    <div className="sello">
      <Header />
      <Trending />
      <TrendingBottom />
      <FeaturedItem />
      <Slider />
      <OurStory />
      <InstagramFeed />
      <Category />
      <Footer />
      <FooterLast />
    </div>
  );
}
