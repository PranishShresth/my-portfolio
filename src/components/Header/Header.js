import React, { useRef, useState, useEffect } from "react";
import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Close } from "@material-ui/icons";

const Header = () => {
  const hamburger = useRef();
  const sideNav = useRef();

  const [nav, setNav] = useState(false);
  const handleHamburger = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="nav-container">
        <div className="logo">
          <a href to="/">
            SHRESTHA
          </a>
        </div>
        <div className="hamburger" onClick={handleHamburger} ref={hamburger}>
          <MenuIcon onClick={handleHamburger} />
        </div>

        <nav className="nav">
          <ul className="nav-items">
            <li>
              <a href="#projects" className="nav_link">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills_container" className="nav_link">
                Skills
              </a>
            </li>
            <li>
              <a href="#about_me" className="nav_link last">
                About Me
              </a>
            </li>

            <li>
              <a
                href="/pdf/Resume.pdf"
                target="_blank"
                style={{ display: "flex", alignItems: "center" }}
              >
                Resume <GetAppIcon fontSize="small" />
              </a>
            </li>
          </ul>
        </nav>
        <ul className={nav ? "side-nav toggle" : "side-nav"} ref={sideNav}>
          <div className="hamburgerMenu">
            <Close onClick={handleHamburger} />
          </div>
          <li>
            <a href="#projects" onClick={handleHamburger}>
              Projects
            </a>
          </li>
          <li>
            <a href="#about_me" onClick={handleHamburger}>
              About
            </a>
          </li>
          <li>
            <a href="#skills_container" onClick={handleHamburger}>
              Skills
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
