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
            <Card
              name="Trello Clone"
              img="img/Trello.PNG"
              overview="Trello Clone is full stack Web application. We can create cards and list as well as drag and drop down"
              technology="React, MongoDB , Node JS, ExpressJS , Redux , Redux Saga"
              github="https://github.com/PranishShresth/Trello-Clone"
              website="https://trello-master.herokuapp.com/"
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card
              name="Order Management System"
              img="img/oms.PNG"
              overview="Order Management System (OMS) is a full stack web application. It was created as university project and according to company Lightosphere requirement. It has integrations like gmail and paypal"
              technology="Eloquent javascript(EJS), MongoDB , Node JS, ExpressJS, ChartJS"
              github="https://github.com/PranishShresth/Order-Management-System"
              website="https://ordermanagementsystemv1.herokuapp.com/"
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card
              name="Covid-Tracker"
              img="img/covid-app.PNG"
              overview="Covid tracker is a React project built along with Material UI ChartsJS. It provides a dashboard for covid cases based on many criterias"
              technology="React, Material UI, ChartJS"
              github="https://github.com/PranishShresth/Covid-App"
              website="https://pranishshresth.github.io/Covid-App/"
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card
              name="Trivia App"
              img="img/trivia.PNG"
              overview="Trivia App is React Application that creates a quizzes based on user preference. It uses OpenTDB API for fetching all questions and answer"
              technology="React, Material UI"
              github="https://github.com/PranishShresth/Trivia-App"
              website="https://pranishshresth.github.io/Trivia-App/#/"
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card
              name="Flip Game"
              img="img/flip-game.PNG"
              overview="Flip game is simple javascript game where you match two similar cards and get points."
              technology="HTML, CSS , Javascript"
              github="https://github.com/PranishShresth/flip-game"
              website="https://pranishshresth.github.io/flip-game/"
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card
              name="Pokedex"
              img="img/pokedex.PNG"
              overview="Pokedex was my first attempt at building my React application and its lifecycle methods."
              technology="React, HTML, CSS"
              github="https://github.com/PranishShresth/Pokedex"
              website="https://pranishshresth.github.io/Pokedex/"
            />
          </Grid>
        </Grid>
      </section>
    </>
  );
}

export default Project;
