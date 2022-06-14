import React, { useEffect, useRef } from "react";
import "./SupportPage.css";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import reason1 from "./reasons1.png";
import reason2 from "./reasons2.png";
import reason3 from "./reasons3.png";
import { Fade } from "react-reveal";

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
      animationData: require("./SL2.json"),
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

      <section className="support-ways">
        <div className="support-way-container">
          <div className="support-ways-header">
            <h1 className="larger-Header" style={{ color: "purple" }}>
              SUPPORTING THE COMMUNITY
            </h1>
            <h1 style={{ margin: "50px" }}>Ways to support us</h1>
          </div>

          <Fade right>
            <div className="support-ways-text">
              <div className="support-ways-unit sd1" id="sd-1">
                <div className="sw-image">
                  {" "}
                  <img src={reason1} alt="" className="im1" />
                </div>
                <h2>Create an account Today</h2>
                <p>
                  Create and account and sign up for a news letter. That way you
                  can keep up to date with the latest news regarding the release
                  of the Librum-Reader application. Keep up to date and never
                  miss any news.
                </p>
              </div>
              <div className="support-ways-unit">
                <div className="sw-image">
                  {" "}
                  <img src={reason2} alt="" />
                </div>

                <h2>Join the Community</h2>
                <p>
                  Get involved by posting on the forum, reporting any bugs, and
                  liking our facebook and social media posts.If you have any
                  experience with marketing feel free to spread our message
                  across.
                </p>
              </div>

              <div className="support-ways-unit">
                <div className="sw-image">
                  {" "}
                  <img src={reason3} alt="" />
                </div>
                <h2>Contribute</h2>
                <p>
                  If you have experience, feel free to contribute to our code
                  which is open source. We are always looking for ways to
                  improve the application and any suggestions are welcome. if
                  you want to take it a step further donate to us on payPal.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      <section className="support-reasons">
        <div className="support-image" ref={container}></div>
        <div className="support-text">
          <div>
            <h2>We aim to for a better reading experience</h2>
            <p>
              There was a time where reading was the norm. There were'nt as much
              options to watch on television and the internet was not a thing as
              of yet. Those days went away but we can use technology to instill
              the love of reading back.
            </p>
            <br />
            <p className="extended">
              The Librum Reader will create an easy way to get the fun back into
              reading, Whether it be on the tablets, desktops or laptops. The
              Librum Reader Offers a fun and rewarding experience.
            </p>
          </div>

          <div className="extended">
            {" "}
            <button className="btn btn-secondary">Sign up</button>
          </div>
          <div className="extended"></div>
        </div>
      </section>
    </div>
  );
};
