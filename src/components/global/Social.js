import React from "react";
import "../sass/nav.scss";
import github_logo from "../../images/github-logo.png";
import so_logo from "../../images/so-logo-black.gif";

const Social = () => {
  return (
    <div id="social-container">
      <a href="https://github.com/dcassar622" target="_blank">
        <img src={github_logo} alt="Github Logo"></img>{" "}
      </a>
      <a
        href="https://stackoverflow.com/users/12814731/daniel-cassar"
        target="_blank"
      >
        <img src={so_logo} alt="Stack-Overflow Logo"></img>
      </a>
    </div>
  );
};

export default Social;
