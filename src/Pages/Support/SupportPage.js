import React, { useContext, useEffect, useRef } from "react";
import "./SupportPage.css";

import reason1 from "./reasons1.png";
import reason2 from "./reasons2.png";
import reason3 from "./reasons3.png";

import { Form } from "../../Components/Form/Form";

import { Link } from "react-router-dom";
import { SiteContext } from "../../Context/Context";

export const SupportPage = ({ message, anchor, cards }) => {
  const { bg, setBg } = useContext(SiteContext);

  useEffect(() => {
    if (localStorage.getItem("Theme")) {
      let theme = JSON.parse(localStorage.getItem("Theme"));

      console.log(theme);

      setBg(theme);

      return;
    }
  }, []);

  // console.log(window.location.href);
  const container = useRef(null);

  return (
    <div
      style={
        bg === "light"
          ? {
              backgroundColor: "white",
              color: "var(--color-primary)",
              paddingBottom: "100px;",
            }
          : {
              backgroundColor: "#282c34",
              color: "var(--color-primary)",
              paddingBottom: "100px",
            }
      }
      className="container"
    >
      <div className="supportPage-container">
        <section className="support-ways">
          <div className="support-way-container">
            <div className="support-ways-header">
              <h1 className="larger-Header">Ways to Support Us</h1>
            </div>
            {cards && (
              <div className="support-ways-text">
                <div className="support-ways-unit sd1" id="sd-1">
                  <div className="sw-image">
                    {" "}
                    <a
                      href={"https://www.patreon.com/librum_reader"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <img src={reason3} alt="" className="im1" />
                    </a>
                  </div>
                  <h2>Support us on Patreon</h2>
                  <p
                    style={
                      bg === "light"
                        ? { color: "var(--color-primary0)" }
                        : {
                            color: "white",
                          }
                    }
                  >
                    Check out our Patreon support page and support us for as
                    little as 3$ a month.
                  </p>
                </div>

                <div className="support-ways-unit">
                  <div className="sw-image">
                    {" "}
                    <a
                      href={"https://github.com/Librum-Reader/Librum"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <img src={reason1} alt="" className="im1" />
                    </a>
                  </div>
                  <h2>Contribute</h2>
                  <p
                    style={
                      bg === "light"
                        ? { color: "var(--color-primary0)" }
                        : {
                            color: "white",
                          }
                    }
                  >
                    If you have experience, feel free to contribute to our code
                    which is open source. We are always looking for ways to
                    improve the application and any suggestions are welcome. if
                    you want to take it a step further donate to us on payPal.
                  </p>
                </div>

                <div className="support-ways-unit">
                  <div className="sw-image">
                    {" "}
                    <Link to={"../login"}>
                      <img src={reason2} alt="" />
                    </Link>
                  </div>

                  <h2>Join the Community</h2>
                  <p
                    style={
                      bg === "light"
                        ? { color: "var(--color-primary0)" }
                        : {
                            color: "white",
                          }
                    }
                  >
                    Get involved by posting on the forum, reporting any bugs,
                    and liking our facebook and social media posts.If you have
                    any experience with marketing feel free to spread our
                    message across.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      <Form />
    </div>
  );
};
