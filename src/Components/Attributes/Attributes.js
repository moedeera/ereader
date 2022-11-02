import React, { useContext } from "react";
import "./Attributes.css";
import { Fade } from "react-reveal";
import { SiteContext } from "../../Context/Context";

export const Attributes = () => {
  const { bg, setBg } = useContext(SiteContext);

  return (
    <Fade>
      <div className="ft-services">
        <div className="services-container">
          <div className="service">
            <i class="fab fa-instalod"></i>
            <h3>Quick Installation</h3>
            <p
              style={
                bg === "light"
                  ? { color: "var(--color-primary0)" }
                  : {
                      color: "white",
                    }
              }
            >
              Download the beta version 1.0.X on October 20th
            </p>
          </div>

          <div className="service">
            <i class="fas fa-sync sync"></i>
            <h3>Easily Synchronized</h3>
            <p
              style={
                bg === "light"
                  ? { color: "var(--color-primary0)" }
                  : {
                      color: "white",
                    }
              }
            >
              Use Google to sync all your different devices
            </p>
          </div>

          <div className="service">
            <i class="fas fa-book-open"></i>
            <h3>Thousands to read from</h3>
            <p
              style={
                bg === "light"
                  ? { color: "var(--color-primary0)" }
                  : {
                      color: "white",
                    }
              }
            >
              Librum library will host 1000s of high quality literature
            </p>
          </div>

          <div className="service">
            <i class="fas fa-asterisk"></i>
            <h3>Light and Secure</h3>
            <p
              style={
                bg === "light"
                  ? { color: "var(--color-primary0)" }
                  : {
                      color: "white",
                    }
              }
            >
              Small file-size, quick Updates
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};
