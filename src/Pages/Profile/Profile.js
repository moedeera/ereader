import React, { useContext } from "react";
import { SiteContext } from "../../Context/Context";
import "./Profile.css";

export const Profile = () => {
  const { user, bg, setBg } = useContext(SiteContext);

  console.log(user.email);

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
      <div className="profile-page">Profile Page for {user.email} </div>
    </div>
  );
};
