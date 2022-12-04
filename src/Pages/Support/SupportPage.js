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
                    Consider supporting us on Patreon for as little as 2$ a
                    month. As a team of opensource developers we rely on
                    donations from the community to be able to continue working
                    on projects like Librum.
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
                    If you like Librum and have some programming skills,
                    consider contributing to our open source codebase. If you
                    don't have any experience but still want to contribute, you
                    can search for bugs and request features that you believe
                    are missing in Librum."
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
                    Consider writing an article, sharing Librum on social media,
                    or simply letting your friends know how much you enjoy
                    Librum if you want to get more involved in the community."
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
