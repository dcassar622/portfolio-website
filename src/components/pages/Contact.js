import React from "react";
import Sidebar from "../global/Sidebar";
import "../sass/contact.scss";

const Contact = () => {
  return (
    <div id="contact-page-container">
      <div id="contact-form-section">
        <form id="contact-form" method="post" action="form-to-email.php">
          <input type="text" id="text" name="name" placeholder="Name" />
          <input type="email" id="email" name="email" placeholder="Email" />
          <input
            type="textarea"
            id="textarea"
            name="subject"
            placeholder="Subject"
          />
          <button id="contact-btn">Submit</button>
        </form>
      </div>
      <Sidebar orientation="left" page="home" />
      <Sidebar orientation="right" page="portfolio" />
    </div>
  );
};

export default Contact;
