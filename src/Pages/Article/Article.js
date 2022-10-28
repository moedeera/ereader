import React, { useContext, useEffect } from "react";
import { SiteContext } from "../../Context/Context";
import "./Article.css";

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
      <div className="sidenav left">
        <ul>
          <li>Option L1</li>
          <li>Option L2</li>
          <li>Option L3</li>
          <li>Option L4</li>
          <li>Option L5</li>
        </ul>
      </div>
      <div className="main"></div>
      <div className="sidenav right">
        <ul>
          <li>Option R1</li>
          <li>Option R2</li>
          <li>Option R3</li>
          <li>Option R4</li>
          <li>Option R5</li>
        </ul>
      </div>
    </div>
  );
};
