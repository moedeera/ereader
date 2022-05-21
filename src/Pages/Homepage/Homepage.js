import React from "react";
import "./Homepage.css";
import image1 from "./image1.svg";
import { Showcase } from "../../Components/Showcase/Showcase";
import { Features } from "../../Components/Features/Features";

export const Homepage = () => {
  return (
    <div className="container">
      <Showcase image1={image1} />
      <Features />
    </div>
  );
};
