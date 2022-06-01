import React from "react";
import "./Navbar.css";
import icon from "./ereader1.png";
import { Link } from "react-router-dom";

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
              <Link to={"./"}>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to={"./about"}>
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link to={"./"}>
                <p>Features</p>
              </Link>
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
