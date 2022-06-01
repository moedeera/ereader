import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="container" id="about">
      <div className="about-container">
        <h2>A little info about ourselves</h2>

        <p>
          A simple idea started by two self taught developers residing on two
          ends of the world in Germany and Canada. We aim to create a
          free-to-use product That encourages reading again by making it more
          easier Librum-Reader is available on all of the following platforms{" "}
        </p>
        <div className="about-platforms">
          {/* <i className="fab fa-firefox"></i>
          <i className="fab fa-chrome"></i> */}
          <i className="fab fa-microsoft"></i>
          <i className="fab fa-apple"></i>
          <i className="fab fa-android"></i>
          <i className="fab fa-linux"></i>
        </div>
      </div>
    </div>
  );
};
