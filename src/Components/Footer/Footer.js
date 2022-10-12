import React from "react";
import "./Footer.css";
import image1 from "../Navbar/ereader1.png";
import { Link } from "react-router-dom";

export const Footer = ({ image }) => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-upper">
            <h2>Have any questions or concerns?</h2>

            <input placeholder="Enter your email address" type="text" />
            <textarea placeholder="Message" type="text" />
            <button className="btn btn-secondary">Send</button>
          </div>
        </div>
      </div>

      <div className="footer-lower">
        <div className="footer-lower-label">
          <img src={image1} alt="" />
          <h3>Librum-Reader</h3>
        </div>

        <ul>
          <Link style={{ color: "white" }} to={"/support"}>
            <li>Support</li>
          </Link>
          <Link style={{ color: "white" }} to={"/blog"}>
            <li>Blog</li>
          </Link>
          <Link style={{ color: "white" }} to={"/about"}>
            {" "}
            <li>About</li>
          </Link>
        </ul>
        <div className="footer-social">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};
