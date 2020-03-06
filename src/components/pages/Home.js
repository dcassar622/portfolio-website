import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import github_logo from "../../images/github-logo.png";
import so_logo from "../../images/so-logo.png";
import "../sass/home.scss";

const Home = () => {
  const [page, redirectToPage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleRedirect = page => {
    redirectToPage(page);
    setRedirect(true);
  };

  return redirect ? (
    <Redirect to={`/${page}`} />
  ) : (
    <div className="page-container">
      <div id="intro-container">
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
          <span className="selected"> code</span>!!
        </h6>
      </div>
      <div id="pointer-container">
        <h5> Who / What / Why &#x2192;</h5>
        <h5>
          &#x2190; Check out some of my{" "}
          <span className="selected pulsate">
            <Link to="/portfolio">{`(work) => { showPortfolio } `}</Link>
          </span>{" "}
        </h5>
      </div>

      <div
        id="about-sidebar"
        className="sidebar"
        onClick={() => handleRedirect("portfolio")}
      >
        <h2>Portfolio</h2>
      </div>
      <div
        id="portfolio-sidebar"
        className="sidebar"
        onClick={() => handleRedirect("about")}
      >
        <h2>About</h2>
      </div>
      <div id="social-icons">
        <a href="https://github.com/dcassar622">
          <img src={github_logo} alt="Github Logo"></img>{" "}
        </a>
        <a href="https://stackoverflow.com/users/12814731/daniel-cassar">
          <img src={so_logo} alt="Stack-Overflow Logo"></img>
        </a>
      </div>
    </div>
  );
};

export default Home;
