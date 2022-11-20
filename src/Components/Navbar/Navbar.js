import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import icon from "./ereader1.png";
import { Link } from "react-router-dom";
import { Menu } from "../Menu/Menu";
import { SiteContext } from "../../Context/Context";
import { getAuth } from "firebase/auth";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(1);
  const auth = getAuth();
  const color = "#b18cf7";
  const colorA = "white";

  const colorB = "crimson";
  const { user, setUser, logout, mode, bg, setBg } = useContext(SiteContext);
  // const [bg, setBg] = useState("dark");
  return (
    <div
      // style={{ backgroundColor: "white", color: "var(--color-primary)" }}
      style={
        bg === "light"
          ? {
              backgroundColor: "white",
              color: "var(--color-primary)",
            }
          : {
              backgroundColor: "#282c34",
              color: "white",
            }
      }
      className="nav-box"
    >
      <div className="nav-contain">
        <div className="navbar-container">
          <div className="logo">
            <img src={icon} alt="" />
            <h2>Librum</h2>
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
                      window.location.href === "http://localhost:3000/" ||
                      window.location.href === "https://librum-reader.com/"
                        ? { color: color }
                        : bg === "light"
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
                        : bg === "light"
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
                  to={"./news"}
                  onClick={() => {
                    setSelected(3);
                  }}
                >
                  <p
                    style={
                      window.location.href === "http://localhost:3000/news" ||
                      window.location.href === "https://librum-reader.com/news"
                        ? { color: color }
                        : bg === "light"
                        ? { color: colorB }
                        : { color: colorA }
                    }
                  >
                    News
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
                        : bg === "light"
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
                <>
                  <li>
                    <Link
                      to={"./profile"}
                      onClick={() => {
                        setSelected(1);
                      }}
                    >
                      <p
                        style={
                          window.location.href ===
                            "http://localhost:3000/profile" ||
                          window.location.href ===
                            "https://librum-reader.com/profile"
                            ? { color: color }
                            : bg === "light"
                            ? { color: colorB }
                            : { color: colorA }
                        }
                      >
                        Account
                      </p>
                    </Link>
                  </li>
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
                </>
              )}

              {bg === "light" ? (
                <li
                  className="toggle-li"
                  onClick={() => {
                    if (bg === "light") {
                      setBg("dark");
                    }
                    if (bg === "dark") {
                      setBg("light");
                    }
                  }}
                >
                  <div>
                    <small>Light</small>
                  </div>
                  <i
                    style={{ color: "purple", cursor: "pointer" }}
                    className="fas fa-toggle-on fa-2x"
                  ></i>
                </li>
              ) : (
                <li
                  className="toggle-li"
                  onClick={() => {
                    if (bg === "light") {
                      setBg("dark");
                    }
                    if (bg === "dark") {
                      setBg("light");
                    }
                  }}
                >
                  <div>
                    <small>Dark</small>
                  </div>
                  <i
                    style={{ color: "purple", cursor: "pointer" }}
                    className="fas fa-toggle-off fa-2x"
                  ></i>
                </li>
              )}
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
