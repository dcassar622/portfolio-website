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
            <a href={project.linkApp} target="_blank" rel="noopener noreferrer">
              <h4>Live App</h4>
            </a>
            <a
              href={project.linkCode}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Code</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
