import React from "react";
import Sidebar from "../global/Sidebar";
import "../sass/portfolio.scss";
import me from "../../../src/images/me.jpg";

const Portfolio = () => {
  return (
    <div id="portfolio-page-container" className="page-container">
      <h1>Portfolio</h1>
      <section id="portfolio-section">
        <div className="portfolio-card">
          <div className="card-content">
            <div className="card-front">
              <h4 className="card-title">GCHSS Marketing Department Website</h4>
              <h6 className="card-subtitle">
                A resource website for the Marketing Department at GCHSS
              </h6>
              <img src={me} className="card-image"></img>
            </div>
            <div className="card-back">
              <p className="card-description">
                This is a bespoke resource and news website that I built for the
                teachers and students in the Marketing Department at Giovanni
                Curmi Higher Secondary School. Built using{" "}
                <span className="selected">React JS, HTML, CSS</span> &{" "}
                <span className="selected">Materialize CSS</span>
              </p>
              <div className="card-links">
                <h4>Live App</h4>
                <a href=""></a>
                <a href="https://github.com/dcassar622/count-of-monte-crypto-JS.git">
                  <h4>Code</h4>
                </a>
                <h4>Project Case-Study</h4>
                <a href=""></a>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="card-info-column">
            <h4 className="card-title">Count Of Monte Crypto</h4>
            <h6 className="card-subtitle">
              A Cryptocurrency portfolio, market data and news application
            </h6>
            <p className="card-description">
              <span className="selected">Count Of Monte Crypto</span> lets users
              create a personal cryptocurrency assets portfolio, which allows
              them to keep track of any purhcases made, and also view the price
              charts for each asset. It also displays some general market data
              such as daily market cap and volume. The application is based on
              (and uses data from) the CryptoCompare API. Built using{" "}
              <span className="selected">Vanilla Javascript, HTML, CSS</span> &{" "}
              <span className="selected">Materialize CSS</span> for the form and
              chart popups
            </p>
            <div className="card-links">
              <h4>Live App</h4>
              <a href=""></a>
              <a href="https://github.com/dcassar622/count-of-monte-crypto-JS.git">
                <h4>Code</h4>
              </a>
              <h4>Project Case-Study</h4>
              <a href=""></a>
            </div>
          </div>
          <div className="card-image-column">
            <img src={me} className="card-image"></img>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="card-info-column">
            <h4 className="card-title">Song Science</h4>
            <h6 className="card-subtitle">A Musical Analysis application</h6>
            <p className="card-description">
              <span className="selected">Song Science</span> uses Spotify's
              Developer API to display various audio analysis and metadata
              features for any song that can be found in Spotify. Built using{" "}
              <span className="selected">Vanilla Javascript, HTML, CSS</span> &
              a bit of <span className="selected">Materialize CSS</span> for the
              search form popup
            </p>
            <div className="card-links">
              <h4>Live App</h4>
              <a href=""></a>
              <a href="https://github.com/dcassar622/song-science.git">
                <h4>Code</h4>
              </a>
              <h4>Project Case-Study</h4>
              <a href=""></a>
            </div>
          </div>
          <div className="card-image-column">
            <img src={me} className="card-image"></img>
          </div>
        </div>
      </section>
      <Sidebar orientation="left" page="home" />
      <Sidebar orientation="right" page="about" />
    </div>
  );
};

export default Portfolio;
