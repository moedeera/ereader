import React from "react";
import "./Attributes.css";
import { Fade } from "react-reveal";

export const Attributes = () => {
  return (
    <Fade up>
      <div className="ft-services">
        <div className="services-container">
          <div className="service">
            <i class="fab fa-instalod"></i>
            <h3>Quick Installation</h3>
            <p>Download the beta version 1.0.X on August 20th</p>
          </div>

          <div className="service">
            <i class="fas fa-sync sync"></i>
            <h3>Easily Synchronized</h3>
            <p>Use Google to sync all your different devices</p>
          </div>

          <div className="service">
            <i class="fas fa-book-open"></i>
            <h3>Thousands to read from</h3>
            <p>Librum library will host 1000s of high quality literature</p>
          </div>

          <div className="service">
            <i class="fas fa-asterisk"></i>
            <h3>Light and Secure</h3>
            <p>Small file-size, quick downloads</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};
