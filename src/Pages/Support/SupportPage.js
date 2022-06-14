import React, { useEffect, useRef } from "react";
import "./SupportPage.css";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import Lottie from "lottie-web";
import banner from "./stars.svg";

export const SupportPage = () => {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./SupportPageLottie.json"),
    });
  }, []);

  return (
    <div className="supportPage-container">
      <div className="header-container">
        <section className="header">
          <div className="header-info">
            <div>
              {" "}
              <h1>Support </h1>
              <p>
                Home{" "}
                <i
                  className="fa fa-circle"
                  style={{ fontSize: "12px", color: "purple" }}
                ></i>{" "}
                Support
              </p>
            </div>
          </div>
          <div className="header-image">
            <img src={banner} alt="" />
          </div>
        </section>
      </div>

      <section className="support-reasons">
        <div className="support">
          <div className="support-image">
            <img src={pic2} alt="" />
            <img src={pic1} alt="" />
            <img src={pic3} alt="" />
          </div>
          <div className="support-text">
            <h2>Create an account Today</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              a diam eu augue interdum tincidunt non hendrerit est. Nulla
              pharetra mauris dolor, vel pretium tellus luctus at. Nunc iaculis
              ullamcorper ligula, at pharetra lorem suscipit eget. Vestibulum
            </p>
            <h2>Join our forum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              a diam eu augue interdum tincidunt non hendrerit est. Nulla
              pharetra mauris dolor, vel pretium tellus luctus at. Nunc iaculis
              ullamcorper ligula, at pharetra lorem suscipit eget. Vestibulum
            </p>
            <h2>Submit bug-reports and suggestions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              a diam eu augue interdum tincidunt non hendrerit est. Nulla
              pharetra mauris dolor, vel pretium tellus luctus at. Nunc iaculis
              ullamcorper ligula, at pharetra lorem suscipit eget. Vestibulum
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
