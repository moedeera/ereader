import React, { useEffect, useRef } from "react";
import "./SupportPage.css";

import reason1 from "./reasons1.png";
import reason2 from "./reasons2.png";
import reason3 from "./reasons3.png";
import { Fade } from "react-reveal";

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
        {/* <section className="support-reasons">
          <div className="support-image" ref={container}></div>
          <div className="support-text">
            <div>
              <h2>We aim to help a generation expand its knowledge</h2>
              <p>
                There was a time where reading was the norm. There were'nt as
                much options to watch on television and the internet was not
                something people had access to. Those days went away but we can
                use technology to instill the love of reading back.
              </p>
              <br />

            </div>

            <div className="support-dates">
              <h1>Events</h1>
              <div className="support-date">
                <div className="support-date-date">
                  <p>July</p>
                  <h1>15th</h1>
                </div>
                <div className="support-date-info">
                  <h3>Software Reveal</h3>
                  This software will be showcased in the beta version at the
                  Bergen start-up festival in Norway. The event starts on May
                  5th and goes all the way to June 19th
                </div>
                <div className="support-date-add btn-small">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                  Add to calendar
                </div>
              </div>
              <div className="support-date">
                <div className="support-date-date">
                  <p>June</p>
                  <h1>9th</h1>
                </div>
                <div className="support-date-info">
                  <h3>Beta version launch</h3>
                  This software will be showcased in the beta version at the
                  Bergen start-up festival in Norway. The event starts on May
                  5th and goes all the way to June 19th
                </div>
                <div className="support-date-add btn-small">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                  Add to calendar
                </div>
              </div>
              <div className="support-date">
                <div className="support-date-date">
                  <p>June</p>
                  <h1>19th</h1>
                </div>
                <div className="support-date-info">
                  <h3>Forum live</h3>
                  This software will be showcased in the beta version at the
                  Bergen start-up festival in Norway. The event starts on May
                  5th and goes all the way to June 19th
                </div>
                <div className="support-date-add btn-small">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                  Add to calendar
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </Fade>
    </div>
  );
};
