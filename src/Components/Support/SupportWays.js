import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SiteContext } from "../../Context/Context";

export const SupportWays = ({ pics, cards }) => {
  const { bg, setBg } = useContext(SiteContext);
  return (
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
                  <img src={pics[0]} alt="" className="im1" />
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
                Consider supporting us on Patreon for as little as 2$ a month.
                As a team of opensource developers we rely on donations from the
                community to be able to continue working on projects like
                Librum.
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
                  <img src={pics[1]} alt="" className="im1" />
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
                If you like Librum and have some programming skills, consider
                contributing to our open source codebase. If you don't have any
                experience but still want to contribute, you can search for bugs
                and request features that you believe are missing in Librum."
              </p>
            </div>

            <div className="support-ways-unit">
              <div className="sw-image">
                {" "}
                <Link to={"../login"}>
                  <img src={pics[2]} alt="" />
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
                Consider writing an article, sharing Librum on social media, or
                simply letting your friends know how much you enjoy Librum if
                you want to get more involved in the community."
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
