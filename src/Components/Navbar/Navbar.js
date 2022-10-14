import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import icon from "./ereader1.png";
import { Link } from "react-router-dom";
import { Menu } from "../Menu/Menu";
import { SiteContext } from "../../Context/Context";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(1);
  const color = "#b18cf7";
  const colorA = "white";
  const colorB = "crimson";
  const { user, setUser, logout, mode, setMode } = useContext(SiteContext);
  const [bg, setBg] = useState(false);
  return (
    <div
      // style={{ backgroundColor: "white", color: "var(--color-primary)" }}
      style={
        bg
          ? {
              backgroundColor: "white",
              color: "var(--color-primary)",
            }
          : {
              backgroundColor: "#282c34",
              color: "white",
            }
      }
    >
      <div className="nav-contain">
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
                  <p
                    style={
                      window.location.href === "http://localhost:3000" ||
                      window.location.href === "https://librum-reader.com"
                        ? { color: color }
                        : mode
                        ? { color: colorB }
                        : { color: colorA }
                    }
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to={"./support"}
                  onClick={() => {
                    setSelected(2);
                  }}
                >
                  <p
                    style={
                      window.location.href ===
                        "http://localhost:3000/support" ||
                      window.location.href ===
                        "https://librum-reader.com/support"
                        ? { color: color }
                        : mode
                        ? { color: colorB }
                        : { color: colorA }
                    }
                  >
                    Support
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to={"./blog"}
                  onClick={() => {
                    setSelected(3);
                  }}
                >
                  <p
                    style={
                      window.location.href === "http://localhost:3000/blog" ||
                      window.location.href === "https://librum-reader.com/blog"
                        ? { color: color }
                        : mode
                        ? { color: colorB }
                        : { color: colorA }
                    }
                  >
                    Blog
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to={"./about"}
                  onClick={() => {
                    setSelected(4);
                  }}
                >
                  <p
                    style={
                      window.location.href === "http://localhost:3000/about" ||
                      window.location.href === "https://librum-reader.com/about"
                        ? { color: color }
                        : mode
                        ? { color: colorB }
                        : { color: colorA }
                    }
                  >
                    About
                  </p>
                </Link>
              </li>
              {!user ? (
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
              ) : (
                <li>
                  <button
                    onClick={() => {
                      logout();
                    }}
                    className="btn btn-secondary"
                  >
                    Logout
                  </button>
                </li>
              )}

              {/* 
              <li>
                <i class="fas fa-moon fa-2x"></i>{" "}
              </li> */}
              <li
                onClick={() => {
                  setBg(!bg);
                  console.log(mode);
                }}
              >
                <i
                  style={{ color: "goldenrod", cursor: "pointer" }}
                  class="far fa-sun fa-2x"
                ></i>
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
              className="fas fa-bars"
              style={{ fontSize: "20px", color: "white" }}
              onClick={() => {
                setShow(true);
              }}
            ></i>
          </div>
        </div>
        {show && <Menu setShow={setShow} />}
      </div>
    </div>
  );
};
