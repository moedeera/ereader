import React from "react";
import "./Homepage.css";
import image1 from "./showcase.svg";
import { Showcase } from "../../Components/Showcase/Showcase";

export const Homepage = () => {
  return (
    <div className="container">
      <Showcase image1={image1} />
    </div>
  );
};
