import React from "react";
import { Link } from "react-router-dom";
import "../sass/home.scss";

const Intro = () => {
  return (
    <div id="intro-container" className="slide-in">
      <h2>
        Hi! I'm <span className="selected pulsate"> Daniel </span>
      </h2>
      <br></br>
      <h6>
        <span className="selected">Web</span> Developer /
      </h6>

      <h6>
        <span className="selected">Earthly</span> Human
      </h6>
      <br></br>
      <br></br>
      <h6 id="tagline">
        ... and I LOVE{" "}
        <Link to="/portfolio">
          {" "}
          &#x007B;
          <span className="selected"> building </span> stuff &#x007D;{" "}
        </Link>{" "}
        with
        <span className="selected"> code</span>!! &#x2764;
      </h6>
    </div>
  );
};

export default Intro;
