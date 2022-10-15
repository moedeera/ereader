import React, { useContext, useEffect, useState } from "react";
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
  useEffect(() => {
    if (localStorage.getItem("Theme")) {
      let theme = JSON.parse(localStorage.getItem("Theme"));

      console.log(theme);

      setBg(theme);

      return;
    }

    // const theme = "light";

    // localStorage.setItem("Theme", JSON.stringify(theme));
    // console.log(theme);
  }, []);

  const { mode, bg, setBg } = useContext(SiteContext);
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
    </div>
  );
};
