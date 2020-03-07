import React from "react";
import { Link } from "react-router-dom";
import "../sass/home.scss";

const Pointer = () => {
  return (
    <div id="pointer-container">
      <h5> Who / What / Why &#x2192;</h5>
      <h5>
        &#x2190; Check out some of my{" "}
        <span className="selected pulsate">
          <Link to="/portfolio">{`(work) => { showPortfolio } `}</Link>
        </span>{" "}
      </h5>
    </div>
  );
};

export default Pointer;
