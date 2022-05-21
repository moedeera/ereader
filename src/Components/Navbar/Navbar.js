import React from "react";
import "./Navbar.css";
import icon from "./ereader1.png";

export const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar-container">
        <div className="logo">
          <img src={icon} alt="" />
          <h2>Librum-Reader</h2>
        </div>
        <div className="navbar-menu">
          <ul>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/" className="menu-md">
                Support
              </a>
            </li>
            <li>
              <button className="btn btn-primary">Login</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-container-sm">
        <div className="logo">
          <img src={icon} alt="" />
          <h2>Librum-Reader</h2>
        </div>
        <div style={{ color: "black" }}>
          <i className="fas fa-bars fa-2x"></i>
        </div>
      </div>
    </div>
  );
};
