import React from "react";
import Header from "../components/home/Header";
import About from "../components/home/About";
import Rooms from "../components/home/Rooms";

const Home = () => {
  return (
    <div id="home" className="home">
      <Header />
      <About />
      <Rooms />
    </div>
  );
};

export default Home;
