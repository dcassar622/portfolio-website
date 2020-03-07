import React from "react";

import Intro from "../elements/Intro";
import Pointer from "../elements/Pointer";
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
      <Social />
    </div>
  );
};

export default Home;
