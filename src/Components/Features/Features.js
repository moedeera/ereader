import React, { useState } from "react";
import "./Features.css";
import { Fade } from "react-reveal";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import svg1 from "./svg01.svg";
import svg2 from "./svg02.svg";
import svg3 from "./svg03.svg";

export const Features = () => {
  const [slide, setSLide] = useState(1);
  return (
    <div className="container" id="features">
      <div className="features-sm-container">
        <h2>What we will Offer </h2>

        <p>
          Our Aim is to make it easier for you to read and keep track of books
          you are interested in. Librum reader allows you to sync all the books
          you are interested in in one application for more convenient reads.
        </p>
        <Fade left>
          <div className="feature-icons">
            <div className="feature-icon">
              <img src={icon1} alt="" />
              <h5>Available on all devices</h5>
            </div>
            <div className="feature-icon">
              <img src={icon2} alt="" />
              <h5>Available on all platforms</h5>
            </div>
            <div className="feature-icon">
              <img src={icon3} alt="" />
              <h5>Offline or Online</h5>
            </div>
          </div>
        </Fade>
      </div>

      <div className="features-lg-container">
        <h2>What we will Offer</h2>

        <p>
          Our Aim is to make it easier for you to read and keep track of books
          you are interested in. Librum reader allows you to sync all the books
          you are interested in in one application for more convenient reads.
        </p>
        <Fade left>
          <div className="features-slide">
            <div className="slide-selection">
              <div className="slide-selection-menu">
                <div className="featured-selection">
                  <h3 onClick={() => setSLide(1)}>Cross device</h3>
                </div>
                <div className="featured-selection">
                  <h3 onClick={() => setSLide(2)}>Cross platform</h3>
                </div>
                <div className="featured-selection">
                  <h3 onClick={() => setSLide(3)}>Offline available</h3>
                </div>
              </div>
              <div
                className="slide-selection-bar"
                style={
                  slide === 1
                    ? { transform: "translateX(0)" }
                    : slide === 2
                    ? { transform: "translateX(100%)" }
                    : { transform: "translateX(200%)" }
                }
              ></div>
            </div>

            {slide === 1 && (
              <div className="slide-image">
                <p>
                  Whether its on your Laptop, Tablet or Cellphone. This app is
                  always ready to facilitating a good read. Start
                  cross-synchronization today once you download and install.
                </p>
                <img src={svg1} alt="" />
              </div>
            )}
            {slide === 2 && (
              <div className="slide-image">
                <p>
                  Design for all Operating Systems, you don't have to worry
                  about what system you are on. We have a support network for
                  Windows 10, Apple, Android and Linux.
                </p>
                <img src={svg2} alt="" style={{ height: "350px" }} />
              </div>
            )}
            {slide === 3 && (
              <div className="slide-image">
                <p>
                  No need for constant updates or a live connection. While you
                  have to ability to cross synchronize online, its not required.
                </p>
                <img src={svg3} alt="" />
              </div>
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
};
