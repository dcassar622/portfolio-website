import React from "react";
import { Link } from "react-router-dom";
import "../../sass/home.scss";

const Pointer = () => {
  return (
    <div id="pointer-container">
      <Link to="/about">
        <h4>Who / What / Why &#x2192;</h4>
      </Link>
      <Link to="/portfolio">
        <h4>
          &#x2190; Some of my
          <span className="selected pulsate">
            {" "}
            {`(work) => { showPortfolio } `}
          </span>{" "}
        </h4>
      </Link>
    </div>
  );
};

export default Pointer;
