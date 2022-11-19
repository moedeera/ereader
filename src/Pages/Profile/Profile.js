import React, { useContext, useRef } from "react";
import { SiteContext } from "../../Context/Context";
import "./Profile.css";
import img1 from "../AboutPage/about2.png";
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
        <div className="profile-page-landing">
          <div className="profile-page-landing-text">
            <h1
              style={
                bg === "light"
                  ? {
                      color: "var(--color-primary)",
                    }
                  : {
                      color: "var(--color-primary)",
                    }
              }
            >
              Hello James
            </h1>
            <p
              style={
                bg === "light"
                  ? {
                      color: "rgba(1,1,1,.75)",
                    }
                  : {
                      color: "white",
                    }
              }
            >
              Lorem ipsum dolor sit amet. Ut perferendis fugit sit dolorem sint
              et culpa eaque qui possimus totam et quasi aperiam qui voluptas
              accusamus aut eveniet praesentium. Quo consectetur sunt aut
              dolorem iure non sequi nihil ut nihil rerum a temporibus itaque.
              Sit delectus nisi quo placeat voluptatum est tempore voluptatum
              eum distinctio quam.
            </p>
            <div className="buttons-section">
              <button className="btn btn-secondary">Report Bug</button>
              <button className="btn btn-alternate">See Updates</button>
            </div>
          </div>
          <div className="profile-page-landing-image">
            <img src={img1} alt="imag" />
          </div>
        </div>

        <div className="profile-page-navigation">
          <div className="profile-page-navigate-section">
            <div className="profile-page-navigate-icon">
              <i className="fas fa-bug"></i>
            </div>
            <div className="profile-page-navigation-text">
              <h1>
                Reports <i className="far fa-arrow-alt-circle-right"></i>
              </h1>
              <p>See the Latest Bugs other users are reporting</p>
            </div>
          </div>

          <div className="profile-page-navigate-section">
            <div className="profile-page-navigate-icon">
              <i className="fas fa-file"></i>
            </div>
            <div className="profile-page-navigation-text">
              <h1>
                Updates <i className="far fa-arrow-alt-circle-right"></i>
              </h1>
              <p>See the Latest Bugs other users are reporting</p>
            </div>
          </div>

          <div className="profile-page-navigate-section">
            <div className="profile-page-navigate-icon">
              <i className="fas fa-cog"></i>
            </div>
            <div className="profile-page-navigation-text">
              <h1>
                Settings <i className="far fa-arrow-alt-circle-right"></i>
              </h1>
              <p>See the Latest Bugs other users are reporting</p>
            </div>
          </div>
        </div>

        <div className="profile-page-menu">
          <div className="profile-page-menu-header"> Menu header</div>
          <div className="profile-page-menu-list">
            <div className="profile-page-menu-item">Item 1</div>
            <div className="profile-page-menu-item">Item 2</div>
            <div className="profile-page-menu-item">Item 3</div>
            <div className="profile-page-menu-item">Item 4</div>
          </div>
          <div className="profile-page-menu-actions"></div>
        </div>

        {/* Hello {user.displayName}
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
        </button> */}
      </div>
    </div>
  );
};
