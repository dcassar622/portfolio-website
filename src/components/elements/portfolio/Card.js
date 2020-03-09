import React from "react";

const Card = ({ project }) => {
  console.log(project);
  return (
    <div className="portfolio-card" id={project.id}>
      <div className="card-content">
        <div className="card-front">
          <h4 className="card-title">{project.title}</h4>
          <h6 className="card-subtitle">{project.subtitle}</h6>
        </div>
        <div className="card-back">
          <p className="card-description">{project.description}</p>
          <div className="card-links">
            <h4>Live App</h4>
            <a href={project.appLink}></a>
            <a href={project.codeLink}>
              <h4>Code</h4>
            </a>
            <h4>Project Case-Study</h4>
            <a href={project.caseStudyLink}></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
