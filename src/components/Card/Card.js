import React, { useState } from "react";
import { GitHub, Language } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

import "./card.css";

function Card(props) {
  const { name, img } = props;
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="card">
        <div className="card-content">
          <div
            className="card-heading"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            <h4>{name}</h4>
          </div>
          <div className="card-info">
            <img
              src={img}
              alt={name}
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
        </div>
      </div>
      <Rodal
        visible={visible}
        height={400}
        width={500}
        onClose={() => {
          setVisible(!visible);
        }}
        className="rodal-container"
      >
        <div className="modal-container">
          <div className="header">My project: {name}</div>
          <div className="modal-content">
            <h2>Overview</h2>
            <p>
              LEARN academy is a full-stack web development bootcamp in San
              Diego, CA. The website required optimization in terms of speed and
              organic search engine rankings.
            </p>
            <h2 style={{ paddingTop: 10 }}>Technology Used</h2>
            <Grid container spacing={1}>
              <Grid item md={6}>
                <div className="skill">
                  <span>Javascript</span>
                </div>
              </Grid>
              <Grid item md={6} direction="column">
                <div className="project_links">
                  <a href="https://www.google.com/">
                    <GitHub /> View source code
                  </a>
                </div>
                <div className="project_links">
                  <a href="https://www.google.com/">
                    <Language /> View website
                  </a>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Rodal>
    </>
  );
}

export default Card;
