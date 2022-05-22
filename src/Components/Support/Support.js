import React from "react";
import "./Support.css";

export const Support = () => {
  return (
    <div className="container">
      <div className="support-container">
        <h2>Support</h2>

        <p>
          Our code is open source so feel free to propose a new feature or
          improvement on it . Also check out our blog for latest updates and
          downloads.
        </p>
        <div className="support-links">
          <i className="fab fa-github"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
};
