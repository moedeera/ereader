import React from "react";
import "./Support.css";

export const Support = () => {
  return (
    <div className="container">
      <div className="support-container">
        <h2>Free and Open Source</h2>

        <p>
          Our code is open source so feel free to propose a new feature or
          improvement on it . Also check out our blog for latest updates and
          downloads.
        </p>
        <div className="support-links">
          <a
            href={"https://github.com/Librum-Reader/Librum"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href={"https://www.patreon.com/librum_reader"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-patreon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
