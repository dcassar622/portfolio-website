import React from "react";
import "../sass/about.scss";

const Knowledge = () => {
  return (
    <div id="knowledge-container" className="slide-in">
      <section id="knowledge-section">
        <h1>
          What I Know <sup>*</sup> =>
        </h1>
        <br />
        <p>
          <ul id="knowledge-outer-list">
            <li>Javascript (ES6)</li>
            <li>React JS</li>
            <li>
              CSS +{" "}
              <ul id="knowledge-inner-list">
                {" "}
                Preprocessors & Frameworks :<li>SASS</li>
                <li>Materialize</li>
                <li>Bootstrap</li>
              </ul>{" "}
            </li>
            <li>HTML</li>
            <li>BAAS / Serverless Computing</li>
            <li>noSQL DB (Firebase)</li>
            <li>Git / Github</li>
            <li>Webpack</li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default Knowledge;
