import React from "react";
import "./Homepage.css";
import image1 from "./showcase.svg";

export const Homepage = () => {
  return (
    <div className="container">
      <div className="homepage-container">
        <div className="info-section">
          <div className="info-section-text">
            <h1>A Simple Effective Reader App</h1>
            <p>
              A clean and simple way to read ebooks on tablets, cellphones and
              desktops without worrying about cross-platform synchronization
            </p>
          </div>
          <div className="info-section-button">
            <button className="btn btn-primary">Download now</button>
          </div>
        </div>
        <div className="image">
          <img src={image1} alt="" />
        </div>
      </div>
    </div>
  );
};
