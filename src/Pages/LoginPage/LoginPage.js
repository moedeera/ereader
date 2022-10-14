import React, { useContext } from "react";
import "./LoginPage.css";
import { LoginForm } from "../../Components/LoginForm/LoginForm";
import { SiteContext } from "../../Context/Context";

export const LoginPage = () => {
  const { mode } = useContext(SiteContext);

  return (
    <div
      style={
        mode
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
