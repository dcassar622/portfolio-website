import React from "react";
import Sidebar from "../global/Sidebar";
import Bio from "../elements/Bio";
import Knowledge from "../elements/Knowledge";
import Learning from "../elements/Learning";
import Relearning from "../elements/Relearning";
import "../sass/about.scss";

const About = () => {
  return (
    <div id="about-page-container" className="page-container">
      <Bio />
      <div id="what-section">
        <Knowledge />
        <div id="learn-section">
          <Learning />
          <Relearning />
        </div>
      </div>
      <Sidebar orientation="left" page="home" />
      <Sidebar orientation="right" page="portfolio" />
    </div>
  );
};

export default About;
