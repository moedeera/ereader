import React from "react";
import "./About.css";
import { Fade } from "react-reveal";

export const About = () => {
  return (
    <div className="container" id="about">
      <Fade right>
        <div className="about-container">
          <h1
            style={{
              color: "white",
            }}
          >
            A little info about ourselves
          </h1>
          <div className="about-top">
            <div className="about-quote">
              <h1>
                "The more that you read, the more things you will know. The more
                that you learn, the more places you’ll go.”
              </h1>
            </div>
            <div className="about-info">
              {" "}
              <p>
                A simple idea started by two self taught developers residing on
                two ends of the world in Germany and Canada. We aim to create a
                free-to-use product that encourages reading again by making it
                more easier Librum-Reader is available on all of the following
                platforms{" "}
              </p>
            </div>
          </div>

          <div className="about-platforms">
            {/* <i className="fab fa-firefox"></i>
          <i className="fab fa-chrome"></i> */}
            <i className="fab fa-microsoft"></i>
            <i className="fab fa-apple"></i>
            <i className="fab fa-android"></i>
            <i className="fab fa-linux"></i>
          </div>
        </div>
      </Fade>
    </div>
  );
};
