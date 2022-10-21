import React, { useContext, useRef } from "react";
import { SiteContext } from "../../Context/Context";
import "./Profile.css";
import { getAuth, updateProfile } from "firebase/auth";
export const Profile = () => {
  const auth = getAuth();

  const name = useRef("");
  const photo = useRef("");

  const onSubmit = async () => {
    updateProfile(auth.currentUser, {
      displayName: name.current.value,
      photoURL: photo.current.value,
    })
      .then(() => {
        console.log(auth.currentUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { user, bg, setBg } = useContext(SiteContext);

  console.log(user);

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
      <div className="profile-page">
        Hello {user.displayName}
        <div className="profile-page-avatar">
          <img src={user.photoURL} alt="avatar" />
        </div>
        <input type={"/text"} ref={name} placeholder={"Enter name"} />
        <input type={"/text"} ref={photo} placeholder={"Enter photo URL"} />
        <button
          onClick={() => {
            onSubmit();
          }}
          className="btn btn-secondary"
        >
          Save
        </button>
      </div>
    </div>
  );
};
