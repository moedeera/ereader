import React, { useEffect, useRef } from "react";
import "./SupportPage.css";

import reason1 from "./reasons1.png";
import reason2 from "./reasons2.png";
import reason3 from "./reasons3.png";
import { Fade } from "react-reveal";

import Lottie from "lottie-web";
import banner from "./stars.svg";

export const SupportPage = () => {
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
      <Fade>
        <section className="support-reasons">
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
              {/* <p className="extended">
                The Librum Reader will create an easy way to get the fun back
                into reading, Whether it be on the tablets, desktops or laptops.
                The Librum Reader Offers a fun and rewarding experience.
              </p> */}

              <br />
              {/* <p className="extended">
                This design will be an easy way to get into reading, Whether it
                be for informational, curiosity or amusement reasons. The Librum
                Reader Offers a fun and rewarding experience.
              </p> */}
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
        </section>
      </Fade>
      {/* <div class="container-2">
        <div class="wrapper card">
          <div class="border">
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
              porro.
            </p>
            <div class="icons">
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>.
              <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>.
              <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="wrapper card">
          <div class="border">
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
              porro.
            </p>
            <div class="icons">
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>.
              <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>.
              <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="wrapper card">
          <div class="border">
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
              porro.
            </p>
            <div class="icons">
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>.
              <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>.
              <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
