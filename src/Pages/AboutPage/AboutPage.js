import React from "react";
import "./AboutPage.css";
import pic1 from "./pic1.svg";
import pic2 from "./pic2.svg";
import pic3 from "./pic3.svg";

export const AboutPage = () => {
  return (
    <div className="aboutPage-container">
      <section className="header">
        <h1>Why librum Reader?</h1>
        <p>Glad you asked...</p>
      </section>
      <section className="about-reasons">
        <div className="reason">
          <div className="reason-image">
            <img src={pic1} alt="" />
          </div>
          <div className="reason-text">
            <h2>High appearance customization</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              a diam eu augue interdum tincidunt non hendrerit est. Nulla
              pharetra mauris dolor, vel pretium tellus luctus at. Nunc iaculis
              ullamcorper ligula, at pharetra lorem suscipit eget. Vestibulum
            </p>
          </div>
        </div>
        <div className="reason">
          <div className="reason-text">
            <h2>Book state syncing across devices</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              a diam eu augue interdum tincidunt non hendrerit est. Nulla
              pharetra mauris dolor, vel pretium tellus luctus at. Nunc iaculis
              ullamcorper ligula, at pharetra lorem suscipit eget. Vestibulum
            </p>
          </div>

          <div className="reason-image">
            <img src={pic2} alt="" />
          </div>
        </div>
        <div className="reason">
          <div className="reason-image">
            <img src={pic3} alt="" />
          </div>
          <div className="reason-text">
            <h2>Note-taking functionality</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              a diam eu augue interdum tincidunt non hendrerit est. Nulla
              pharetra mauris dolor, vel pretium tellus luctus at. Nunc iaculis
              ullamcorper ligula, at pharetra lorem suscipit eget. Vestibulum
            </p>
          </div>
        </div>
        <div
          className="reason-text"
          style={{ width: "100%", maxWidth: "500px" }}
        >
          <h2>Have ideas for more features?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
            diam eu augue interdum tincidunt non hendrerit est. Nulla pharetra
            mauris dolor, vel pretium tellus luctus at. Nunc iaculis ullamcorper
            ligula, at pharetra lorem suscipit eget. Vestibulum
          </p>
        </div>
      </section>
    </div>
  );
};
