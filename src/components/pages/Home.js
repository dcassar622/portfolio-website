import React from "react";
import Intro from "../elements/home/Intro";
import Pointer from "../elements/home/Pointer";
import Sidebar from "../global/Sidebar";
import Social from "../global/Social";
import "../sass/home.scss";

const Home = () => {
  return (
    <div className="page-container">
      <Intro />
      <Pointer />
      <Sidebar orientation="left" page="portfolio" />
      <Sidebar orientation="right" page="about" />
    </div>
  );
};

export default Home;
