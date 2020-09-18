import React from "react";
import { Grid } from "@material-ui/core";
import "./skills.css";
const Skills = () => {
  return (
    <section id="skills_container">
      <div className="section-heading">
        <p>SKILLS</p>
        <div className="separator">
          <span>×××</span>
        </div>
      </div>
      <div className="skills_list">
        <Grid container spacing={1}>
          <Grid item md={4}>
            <div className="skill">
              <span>Javascript</span>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="skill">
              <span>React</span>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="skill">
              <span>Redux</span>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="skill">
              <span>Mongo DB</span>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="skill">
              <span>MySQL</span>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="skill">
              <span>HTML5</span>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="skill">
              <span>CSS3</span>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="skill">
              <span>Express JS</span>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="skill">
              <span>Git/GitHub</span>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="skill">
              <span>NodeJS</span>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="skill">
              <span>Python</span>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="skill">
              <span>Java</span>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Skills;
