import React from "react";
import "./About.css";
import { Fade } from "react-reveal";

export const About = () => {
  return (
    <div className="container" id="about">
      <Fade>
        <div className="about-container">
          <h1
            style={{
              color: "#bb342f",
            }}
          >
            A little info about ourselves
          </h1>
          <div className="about-top">
            <div className="about-quote">
              <h1>
                "Reading is essential for those who seek to rise above the
                ordinary.” - Jim Rohn
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
