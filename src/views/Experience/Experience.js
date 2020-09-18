import React from "react";
import { Paper, Typography } from "@material-ui/core";
import "./Experience.css";
const Experience = () => {
  return (
    <section id="experience_container">
      <div className="experiences">
        <div className="section-heading">
          <p>EXPERIENCES</p>
          <div className="separator">
            <span>×××</span>
          </div>
        </div>
        <Paper
          elevation={3}
          style={{ paddingTop: 20, backgroundColor: "#474B4F", color: "#fff" }}
        >
          <div className="experience_content">
            <Typography component="h5" variant="h5">
              Web Developer Intern
            </Typography>
            <Typography variant="body2" component="p">
              Pulp You Media
            </Typography>
            <Typography variant="body2" component="p">
              Jul 2020 - Present
            </Typography>
            <h5 style={{ paddingTop: "30px" }}>
              Working with the product team and web team, my responsibilities
              entailed creating webpages through mockups in React , helping to
              create RESTFUL APIs for the backend. Helped to integrate the
              Amazon Web Services s3 and Zoom Video Call.
            </h5>
          </div>
        </Paper>
      </div>
    </section>
  );
};

export default Experience;
