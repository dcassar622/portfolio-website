import React from "react";
import Sidebar from "../global/Sidebar";
import Card from "../elements/portfolio/Card";
import "../sass/portfolio.scss";
import portfolioProjects from "../../data/portfolio-card-content";

const Portfolio = () => {
  console.log(portfolioProjects);

  return (
    <div id="portfolio-page-container" className="page-container">
      <h1>Portfolio &#x1F4D6;</h1>

      <section id="portfolio-section">
        {portfolioProjects.map(project => {
          return <Card project={project} />;
        })}
      </section>
      <Sidebar orientation="left" page="home" />
      <Sidebar orientation="right" page="about" />
    </div>
  );
};

export default Portfolio;
