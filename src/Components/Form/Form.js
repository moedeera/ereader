import React, { useContext } from "react";
import { SiteContext } from "../../Context/Context";

import pic4 from "../../Pages/Support/pic4.svg";
import "./Form.css";
export const Form = () => {
  const { bg } = useContext(SiteContext);

  return (
    <div
      style={{ margin: "100px auto 0", paddingBottom: "100px" }}
      className="support-page-contact"
    >
      <div className="support-page-contact-form">
        <h2>Got Questions ?</h2>
        <p
          style={
            bg === "light"
              ? { color: "var(--color-primary0)" }
              : {
                  color: "white",
                }
          }
        >
          Just Send us a Message today
        </p>
        <div className="form-div">
          <p
            style={
              bg === "light"
                ? { color: "var(--color-primary0)" }
                : {
                    color: "white",
                  }
            }
            className="p-form"
          >
            Name
          </p>
          <input
            style={bg === "light" ? { color: "black" } : { color: "white" }}
            type="text"
            placeholder="Enter your Name"
          />
        </div>
        <div className="form-div">
          {" "}
          <p
            style={
              bg === "light"
                ? { color: "var(--color-primary0)" }
                : {
                    color: "white",
                  }
            }
            className="p-form"
          >
            Email
          </p>
          <input
            style={bg === "light" ? { color: "black" } : { color: "white" }}
            type="text"
            placeholder="Enter your email address"
          />
        </div>
        <div className="form-div">
          {" "}
          <p
            style={
              bg === "light"
                ? { color: "var(--color-primary0)" }
                : {
                    color: "white",
                  }
            }
            className="p-form"
          >
            Message
          </p>
          <textarea
            style={bg === "light" ? { color: "black" } : { color: "white" }}
            type="text"
            placeholder="Enter Message"
          />
        </div>

        <div>
          <button className="btn btn-secondary">Submit </button>
        </div>
      </div>
      <div className="support-page-contact-image">
        <img src={pic4} alt="" />
      </div>
    </div>
  );
};
