import React from "react";
import Sidebar from "../global/Sidebar";
import Bio from "../elements/about/Bio";
import Qualifications from "../elements/about/Qualifications";
import Knowledge from "../elements/about/Knowledge";
import Learning from "../elements/about/Learning";
import Relearning from "../elements/about/Relearning";
import Disclaimer from "../elements/about/Disclaimer";
import "../sass/about.scss";

const About = () => {
  return (
    <div id="about-page-container" className="page-container">
      <Bio />
      <div id="what-section">
        <Qualifications />
        <Knowledge />
        <Learning />
        <Relearning />
        <Disclaimer />
      </div>

      <Sidebar orientation="left" page="home" />
      <Sidebar orientation="right" page="portfolio" />
    </div>
  );
};

export default About;
