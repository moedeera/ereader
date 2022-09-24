import React, { useEffect, useRef } from "react";
import "./SupportPage.css";

import reason1 from "./reasons1.png";
import reason2 from "./reasons2.png";
import reason3 from "./reasons3.png";
import { Fade } from "react-reveal";
import pic4 from "./pic4.svg";

import Lottie from "lottie-web";
import banner from "./stars.svg";

export const SupportPage = ({ message, anchor, cards }) => {
  console.log(window.location.href);
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
      <div className="header-container"></div>

      <section className="support-ways">
        <div className="support-way-container">
          <div className="support-ways-header">
            <h1 className="larger-Header">{message}</h1>
            <h1 style={{ margin: "50px" }}>{anchor}</h1>
          </div>
          {cards && (
            <Fade right>
              <div className="support-ways-text">
                <div className="support-ways-unit sd1" id="sd-1">
                  <div className="sw-image">
                    {" "}
                    <img src={reason3} alt="" className="im1" />
                  </div>
                  <h2>Support us on Patreon</h2>
                  <p>
                    Check out our Patreon support page and support us for as
                    little as 3$ a month.
                  </p>
                </div>

                <div className="support-ways-unit">
                  <div className="sw-image">
                    {" "}
                    <img src={reason1} alt="" />
                  </div>
                  <h2>Contribute</h2>
                  <p>
                    If you have experience, feel free to contribute to our code
                    which is open source. We are always looking for ways to
                    improve the application and any suggestions are welcome. if
                    you want to take it a step further donate to us on payPal.
                  </p>
                </div>

                <div className="support-ways-unit">
                  <div className="sw-image">
                    {" "}
                    <img src={reason2} alt="" />
                  </div>

                  <h2>Join the Community</h2>
                  <p>
                    Get involved by posting on the forum, reporting any bugs,
                    and liking our facebook and social media posts.If you have
                    any experience with marketing feel free to spread our
                    message across.
                  </p>
                </div>
              </div>
            </Fade>
          )}
        </div>
      </section>
      <Fade>
        <div className="support-page-contact">
          <div className="support-page-contact-form">
            <h2>Got Questions ?</h2>
            <p>Just Send us a Message today</p>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea type="text" placeholder="Enter Message" />
            <div>
              <button className="btn btn-secondary">Submit </button>
            </div>
          </div>
          <div className="support-page-contact-image">
            <img src={pic4} alt="" />
          </div>
        </div>
      </Fade>
    </div>
  );
};
