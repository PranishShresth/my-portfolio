import React, { useState } from "react";
import { GitHub, Visibility } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

import "./card.css";

function Card(props) {
  const { name, img, overview, technology, github, website } = props;
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
          <div className="header">{name}</div>
          <div className="modal-content">
            <div className="project-overview">
              <h4 style={{ color: "#86c232" }}>Overview</h4>
              <p>{overview}</p>
            </div>

            <Grid container spacing={1} style={{ paddingTop: 30 }}>
              {/* <Grid item md={6}>
                <div className="skill">
                  <span>Javascript</span>
                </div>
              </Grid> */}
              <Grid item md={6}>
                <h4 style={{ paddingTop: 10, color: "#86c232" }}>
                  Technology Used
                </h4>
                <ul className="technology_skills">
                  {technology &&
                    technology.split(",").map((tech) => {
                      return <li>{tech}</li>;
                    })}
                </ul>
              </Grid>

              <Grid item md={6} direction="column">
                <div className="project_links" style={{ paddingTop: 10 }}>
                  <a href={github}>
                    <GitHub /> <p>View source code</p>
                  </a>
                </div>
                <div className="project_links">
                  <a href={website}>
                    <Visibility />
                    <p>View website</p>
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
