import React from "react";
import "./Homepage.css";
import image1 from "./image1.svg";
import { Showcase } from "../../Components/Showcase/Showcase";
import { Features } from "../../Components/Features/Features";
import { About } from "../../Components/About/About";
import { Support } from "../../Components/Support/Support";
import { Attributes } from "../../Components/Attributes/Attributes";
import { CountUP } from "../../Components/CountUp/CountUp";

export const Homepage = () => {
  return (
    <div className="container">
      <Showcase image1={image1} />
      <CountUP />
      <Attributes />

      <Features />
      <About />
      <Support />
    </div>
  );
};
