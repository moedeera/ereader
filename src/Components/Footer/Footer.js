import React from "react";
import "./Footer.css";
import image1 from "./ereader1.png";

export const Footer = ({ image }) => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-upper">
            <h3>Stay up to date with what we are doing</h3>
            <input placeholder="Enter your email address" type="text" />
            <button className="btn btn-secondary">Contact Us</button>
          </div>
        </div>
      </div>

      <div className="footer-lower">
        <div className="footer-lower-label">
          <img src={image1} alt="" />
          <h3>Librum-Reader</h3>
        </div>

        <ul>
          <li>Features</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};
