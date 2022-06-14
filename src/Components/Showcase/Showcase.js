import React, { useEffect, useRef } from "react";

import Lottie from "lottie-web";
import "./Showcase.css";

export const Showcase = ({ image1 }) => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./reading.json"),
    });
  }, []);

  return (
    <div className="showcase-container">
      <div className="image sm">
        <img src={image1} alt="" />
      </div>
      <div className="info-section">
        <div className="info-section-text">
          <h1>A Simple Cross-Platform Reader</h1>
          <p>
            A clean and simple way to read ebooks on tablets, cellphones and
            desktops without worrying about cross-platform synchronization
          </p>
        </div>
        <div className="info-section-button">
          <button className="btn btn-primary">Download </button>
        </div>
      </div>
      <div className="image lg" ref={container}>
        {/* <img src={image1} alt="" /> */}
      </div>
    </div>
  );
};
