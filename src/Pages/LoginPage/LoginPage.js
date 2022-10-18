import React, { useContext, useEffect } from "react";
import "./LoginPage.css";
import { LoginForm } from "../../Components/LoginForm/LoginForm";
import { SiteContext } from "../../Context/Context";

export const LoginPage = () => {
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
          ? {
              backgroundColor: "white",
              color: "var(--color-primary)",
            }
          : {
              backgroundColor: "#282c34",
              color: "var(--color-primary)",
            }
      }
      className="container"
    >
      <LoginForm />
    </div>
  );
};
