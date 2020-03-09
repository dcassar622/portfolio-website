import React from "react";
import { NavLink } from "react-router-dom";
import Social from "./Social";
import "../sass/nav.scss";
import logo from "../../../src/images/logo.gif";

const Nav = () => {
  return (
    <div id="nav-container">
      <div id="nav-bar">
        <a href="/">
          <div id="logo-container">
            <img src={logo} id="logo" />
          </div>
        </a>
        <div id="nav-right">
          <NavLink id="contact-link" to="/contact">
            Get In Touch
          </NavLink>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Nav;
