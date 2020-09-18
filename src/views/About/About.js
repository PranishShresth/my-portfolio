import React, { useRef } from "react";
import "./about.css";
import Header from "./../../components/Header/Header";
import Contact from "./../../components/Contact/Contact";
import { LinkedIn, Twitter, GitHub } from "@material-ui/icons";

function About() {
  return (
    <>
      {/* <Header /> */}
      <section className="about-container" id="about_me">
        <div className="section-heading">
          <p>ABOUT ME</p>
          <div className="separator">
            <span>×××</span>
          </div>
        </div>
        <div className="about-content">
          <div className="about-me">
            <div>
              <h1 style={{ fontSize: "2rem", color: "#86C232" }}>Hello</h1>
              <p>a bit about me:</p>
            </div>

            <h4 style={{ paddingTop: "30px", color: "#6b6e70" }}>
              Hi! I am an aspiring Web Devloper.I am interested in both
              front-end and back-end side of the website. I also like to dabble
              into various new web technologies and keep my skills updated to
              match the current industry. I bring passion and enthuciasm to
              everything I do and has insatiable thirst for knowledge.
            </h4>
          </div>
          <div className="social-links-left">
            <div className="links">
              <a href="https://github.com/PranishShresth" className="my_links">
                <span>
                  <GitHub />
                  <p>View Source on GitHub</p>
                </span>
              </a>
            </div>
            <div className="links">
              <a
                href="https://twitter.com/Pranish93366478"
                className="my_links"
              >
                <span>
                  <Twitter />
                  <p> Follow me on Twitter</p>
                </span>
              </a>
            </div>
            <div className="links">
              <a
                href="https://www.linkedin.com/in/pranish-shrestha-868a76161/"
                className="my_links"
              >
                <span>
                  <LinkedIn />
                  <p>Connect with me on LinkedIn</p>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
