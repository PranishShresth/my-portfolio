import React from "react";
import "./App.css";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Footer from "./components/Footer/Footer";
import Project from "./views/Projects/Project";
import Experience from "./views/Experience/Experience";
import Skills from "./views/Skills/Skills";
import Header from "./components/Header/Header";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="myportfolio-container">
        <Header />
        <Home />
        <Project />
        <Skills />
        <Experience />
        <About />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
