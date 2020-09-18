import React from "react";

import { LinkedIn, Email, Twitter } from "@material-ui/icons";
import "./contact.css";
function Contact() {
  return (
    <section id="contact">
      <div className="social-links">
        <a href="https://www.linkedin.com/in/pranish-shrestha-868a76161/">
          <LinkedIn fontSize="large" />
        </a>
        <a href="https://twitter.com/Pranish93366478">
          <Twitter fontSize="large" />
        </a>
        <a href="mailto:shresthapranish99@gmail.com">
          <Email fontSize="large" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
