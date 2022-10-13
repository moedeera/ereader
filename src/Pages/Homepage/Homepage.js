import React, { useContext } from "react";
import "./Homepage.css";
import image1 from "./image1.svg";
import { Showcase } from "../../Components/Showcase/Showcase";
import { Features } from "../../Components/Features/Features";
import { About } from "../../Components/About/About";
import { Support } from "../../Components/Support/Support";
import { Attributes } from "../../Components/Attributes/Attributes";
import { CountUP } from "../../Components/CountUp/CountUp";
import { Circles } from "../../Components/CirclePercent/Circles";
import { SiteContext } from "../../Context/Context";
import { auth } from "../../firebase-config";
// import Example from "../../Components/Tabs/Tabs";

export const Homepage = () => {
  const { mode } = useContext(SiteContext);
  return (
    <div
      // style={
      //   mode
      //     ? { backgroundColor: "white", color: "var(--color-primary)" }
      //     : {
      //         backgroundColor: "#282c34",
      //         color: "var(--color-primary)",
      //       }
      // }
      className="container"
    >
      {/* Hello {auth.currentUser.email} */}
      <Showcase image1={image1} />
      <CountUP />
      <Attributes />
      <Features />
      <Circles />
      <About />
      <Support />
      {/* <Example /> */}
    </div>
  );
};
