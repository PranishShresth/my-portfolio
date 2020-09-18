import React, { useEffect, useRef } from "react";
import "./projects.css";
import Card from "./../../components/Card/Card";
import { Grid } from "@material-ui/core";
import anime from "animejs";
function Project() {
  const heading = useRef();
  useEffect(() => {}, []);
  return (
    <>
      {/* <Header /> */}
      <section className="project-container" id="projects">
        <div className="section-heading">
          <p>PROJECTS</p>
          <div className="separator">
            <span>×××</span>
          </div>
        </div>
        <h4
          style={{ paddingTop: "20px", color: "#6b6e70", textAlign: "center" }}
        >
          Here are some of my projects! I have a passion for creating and
          learning new things
        </h4>
        <Grid container spacing={3} style={{ padding: 40 }}>
          <Grid item md={4} sm={6} xs={12}>
            <Card name="Trello Clone" img="/img/Trello.png" />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card name="Order Management System" img="/img/oms.png" />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card name="Covid-Tracker" img="/img/covid-app.png" />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card name="Trivia App" img="/img/trivia.png" />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card name="Flip Game" img="/img/flip-game.png" />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card name="Pokedex" img="/img/pokedex.PNG" />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card name="Trello Clone" img="/img/pokedex.PNG" />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card name="Pokedex" img="/img/pokedex.PNG" />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card name="Pokedex" img="/img/pokedex.PNG" />
          </Grid>
        </Grid>
      </section>
    </>
  );
}

export default Project;
