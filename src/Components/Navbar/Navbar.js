import React, { useState } from "react";
import "./Navbar.css";
import icon from "./ereader1.png";
import { Link } from "react-router-dom";
import { Menu } from "../Menu/Menu";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(1);
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
              <Link
                to={"./"}
                onClick={() => {
                  setSelected(1);
                }}
              >
                <p style={selected === 1 ? { color: "crimson" } : {}}>Home</p>
              </Link>
            </li>
            <li>
              <Link
                to={"./support"}
                onClick={() => {
                  setSelected(2);
                }}
              >
                <p style={selected === 2 ? { color: "crimson" } : {}}>
                  Support
                </p>
              </Link>
            </li>

            <li>
              <Link
                to={"./about"}
                onClick={() => {
                  setSelected(3);
                }}
              >
                <p style={selected === 3 ? { color: "crimson" } : {}}>About</p>
              </Link>
            </li>

            <li>
              <Link
                to={"./login"}
                onClick={() => {
                  setSelected(0);
                }}
              >
                <button className="btn btn-primary">Login</button>
              </Link>
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
          <i
            className="fas fa-bars fa-2x"
            onClick={() => {
              setShow(true);
            }}
          ></i>
        </div>
      </div>
      {show && <Menu setShow={setShow} />}
    </div>
  );
};
