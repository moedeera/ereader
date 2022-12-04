import React, { useContext } from "react";
import "./Attributes.css";
import { Fade } from "react-reveal";
import { SiteContext } from "../../Context/Context";

export const Attributes = () => {
  const { bg, setBg } = useContext(SiteContext);

  return (
    <Fade>
      <div className="ft-services" id="ft-services">
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
              Install Librum in just 2 clicks
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
              Fully automatic synchronization
            </p>
          </div>

          <div className="service">
            <i class="fas fa-book-open"></i>
            <h3>Thousands of free books</h3>
            <p
              style={
                bg === "light"
                  ? { color: "var(--color-primary0)" }
                  : {
                      color: "white",
                    }
              }
            >
              Librum provides free access to over 60000 books
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
