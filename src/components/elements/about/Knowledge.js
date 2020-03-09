import React from "react";
import "../../sass/about.scss";

const Knowledge = () => {
  return (
    <div id="knowledge-container">
      <section id="knowledge-section">
        <h1>
          What I Know / Use / Do <sup>*</sup> =>
        </h1>
        <br />

        <ul id="knowledge-outer-list">
          <li>Javascript (ES6) & React JS</li>
          <li>
            Modern, responsive and accessable UX/UI using CSS, pre-processors
            like SASS, and (if/when needed), frameworks such as Materialize CSS
            and Bootstrap
          </li>
          <li>HTML using up-to-date tagging and component best-practices</li>
          <li>
            Backend data CRUD operations using BAAS / Serverless Computing, such
            as Google Firebase's noSQL Firestore database
          </li>
          <li>Source Control (Git & Github)</li>
          <li>File bundling & transpiling (Webpack & Babel)</li>
          <li>
            Code modularity and relevant commenting during the development
            process
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Knowledge;
