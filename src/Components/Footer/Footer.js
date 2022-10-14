import React, { useContext } from "react";
import "./Footer.css";
import image1 from "../Navbar/ereader1.png";
import { Link } from "react-router-dom";
import { SiteContext } from "../../Context/Context";

export const Footer = ({ image }) => {
  const { mode } = useContext(SiteContext);
  return (
    <div
      style={
        mode
          ? {
              backgroundColor: "aliceblue",
              color: "var(--color-primary)",
              borderTop: "2px dotted grey",
            }
          : {
              backgroundColor: "#282c34",
              color: "var(--color-primary)",
            }
      }
      className="footer"
      id="footer"
    >
      <div className="container">
        <div className="footer-container">
          <div className="footer-upper footer-light">
            <h2 style={!mode ? { color: "white" } : { color: "crimson" }}>
              Have any questions or concerns?
            </h2>

            <input placeholder="Enter your email address" type="text" />
            <textarea
              className="footer-light"
              placeholder="Message"
              type="text"
            />
            <button className="btn btn-secondary">Send</button>
          </div>
        </div>
      </div>

      <div className="footer-lower">
        <div className="footer-lower-label">
          <img src={image1} alt="" />
          <h3 style={mode ? { color: "crimson" } : { color: "white" }}>
            Librum-Reader
          </h3>
        </div>

        <ul>
          <Link
            style={mode ? { color: "crimson" } : { color: "white" }}
            to={"/support"}
          >
            <li>Support</li>
          </Link>
          <Link
            style={mode ? { color: "crimson" } : { color: "white" }}
            to={"/blog"}
          >
            <li>Blog</li>
          </Link>
          <Link
            style={mode ? { color: "crimson" } : { color: "white" }}
            to={"/about"}
          >
            {" "}
            <li>About</li>
          </Link>
        </ul>
        <div
          style={mode ? { color: "crimson" } : { color: "white" }}
          className="footer-social"
        >
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};
