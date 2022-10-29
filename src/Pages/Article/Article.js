import React, { useContext, useEffect } from "react";
import { SiteContext } from "../../Context/Context";
import "./Article.css";
import avatar from "./avatar.png";
export const Article = () => {
  const { bg, setBg } = useContext(SiteContext);

  useEffect(() => {
    if (localStorage.getItem("Theme")) {
      let theme = JSON.parse(localStorage.getItem("Theme"));

      console.log(theme);

      setBg(theme);

      return;
    }
  }, []);

  return (
    <div
      style={
        bg === "light"
          ? { backgroundColor: "white", color: "var(--color-primary)" }
          : {
              backgroundColor: "#282c34",
              color: "var(--color-primary)",
            }
      }
      className="article-page"
    >
      {/* <div className="sidenav left">
        <ul>
          <li>Option L1</li>
          <li>Option L2</li>
          <li>Option L3</li>
          <li>Option L4</li>
          <li>Option L5</li>
        </ul>
      </div> */}
      <div className="main"></div>
      <div
        style={
          bg === "light"
            ? { backgroundColor: "white", color: "var(--color-primary)" }
            : {
                backgroundColor: "#282c34",
                color: "var(--color-primary)",
              }
        }
        className="sidenav right"
      >
        <div className="sr-search">
          <div className="sr-header">
            <h1>
              Librum
              <span style={{ color: "purple" }}>Blog</span>
            </h1>
          </div>
          <div className="search-input">
            <i className="fas fa-search"></i>
            <input placeholder="Search " />
          </div>
        </div>
        <div className="sr-bio">
          <div className="sr-bio-name">
            <img src={avatar} alt="" />
            <div className="sr-bio-text">
              <h3> Jonas Smith</h3>
              <p>Librum Software Developer</p>
              <small>Co-founder</small>
            </div>
          </div>
          <div className="sr-bio-links">
            <button className="bio-links-btn">Message</button>
            <i className="fa fa-twitter fa-2x"></i>
            <i className="fa fa-github fa-2x"></i>
            <i className="fa fa-medium fa-2x"></i>
          </div>
          <div></div>
        </div>
        <div className="sr-suggestions">
          <h3>See Also</h3>
          <div className="sr-suggestion">
            <div className="sr-suggestion-text">
              <small className="sr-suggestion-date"></small>
              <h3>8 Must have CSS tricks</h3>
              <small>
                Lorem ipsum dolor sit amet. Et delectus ullam ab sunt
                consequatur et eveniet maxime.
              </small>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
              className="suggestions-image"
            ></div>
          </div>

          <div className="sr-suggestion">
            <div className="sr-suggestion-text">
              <small className="sr-suggestion-date"></small>
              <h3>3 Ways to Authenticate in react</h3>
              <small>
                Lorem ipsum dolor sit amet. Et delectus ullam ab sunt
                consequatur et eveniet maxime.
              </small>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
              className="suggestions-image"
            ></div>
          </div>

          <div className="sr-suggestion">
            <div className="sr-suggestion-text">
              <small className="sr-suggestion-date"></small>
              <h3>Lessons from my first Interview</h3>
              <small>
                Lorem ipsum dolor sit amet. Et delectus ullam ab sunt
                consequatur et eveniet maxime.
              </small>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
              className="suggestions-image"
            ></div>
          </div>

          <div className="sr-suggestion">
            <div className="sr-suggestion-text">
              <small className="sr-suggestion-date"></small>
              <h3>Lessons from my first Interview</h3>
              <small>
                Lorem ipsum dolor sit amet. Et delectus ullam ab sunt
                consequatur et eveniet maxime.
              </small>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
              className="suggestions-image"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
