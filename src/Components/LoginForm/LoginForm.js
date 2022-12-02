import React, { useContext, useState } from "react";
import "./LoginForm.css";
import logo from "../Navbar/ereader1.png";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { SiteContext } from "../../Context/Context";
export const LoginForm = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setdisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regLogState, setRegLogState] = useState(true);
  const { user, setUser, bg } = useContext(SiteContext);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
        displayName
      );

      console.log("successful login");
    } catch (error) {
      console.log(error.message, auth, registerEmail, registerPassword);
    }
    setRegisterEmail("");
    setRegisterPassword("");
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
    setloginEmail("");
    setLoginPassword("");
  };
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="container">
      {regLogState ? (
        <div className="form-container">
          <div
            style={
              bg === "dark"
                ? {
                    color: "white",
                    backgroundColor: "var(--color-primary)",
                  }
                : {
                    color: "white",
                    backgroundColor: "var(--color-primary)",
                  }
            }
            className="log-form"
          >
            <img
              src={logo}
              alt="logo"
              width={"80px"}
              style={{ marginBottom: "20px" }}
            />
            <div className="log-form-header">
              <h2>Login</h2>
            </div>
            <div className="form-input">
              <div>Email</div>
              <div className="form-input-input">
                <input
                  type="text"
                  name="name"
                  value={loginEmail ? loginEmail : ""}
                  placeholder="Enter Your Email"
                  onChange={(e) => {
                    setloginEmail(e.target.value);
                  }}
                  className="form-input-title"
                />
              </div>
            </div>

            <div className="form-input">
              <div>Password</div>
              <div className="form-input-input">
                <input
                  type="password"
                  name="password"
                  value={loginPassword ? loginPassword : ""}
                  placeholder="Enter Your Password"
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                  }}
                  className="form-input-title"
                />
              </div>
            </div>

            <button
              onClick={() => {
                login();
              }}
              className="btn btn-login"
            >
              Log in
            </button>

            <div className="form-checkbox">
              <div className="checkbox-unit">
                {" "}
                Not a member? Click{" "}
                <span
                  onClick={() => {
                    setRegLogState(false);
                  }}
                  style={{ color: "purple" }}
                >
                  here{" "}
                </span>
                to register
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="form-container">
          <div
            style={{
              color: "white",
              backgroundColor: "var(--color-primary)",
            }}
            className="log-form"
          >
            <div className="log-form-header">
              <img
                src={logo}
                alt="logo"
                width={"80px"}
                style={{ marginBottom: "20px" }}
              />
              <h2>Welcome</h2>
              <p>
                Your credentials are only used to authenticate yourself Your
                credentials will be stored in a secure database
              </p>
            </div>

            <div className="form-input reg">
              <div className="reg-form-name">
                {" "}
                <div className="form-input-title">First Name</div>
                <div className="form-input-input">
                  <input
                    type="text"
                    name="first-name"
                    value={displayName ? displayName : ""}
                    placeholder="First Name"
                    onChange={(e) => {
                      setdisplayName(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="reg-form-name">
                {" "}
                <div className="form-input-title">Last name</div>
                <div className="form-input-input">
                  <input
                    type="text"
                    name="last-name"
                    value={lastName ? lastName : ""}
                    placeholder="Last Name"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="form-input">
              <div className="form-input-title">Email</div>
              <div className="form-input-input">
                <input
                  type="text"
                  name="name"
                  value={registerEmail ? registerEmail : ""}
                  placeholder="Enter an Email"
                  onChange={(e) => {
                    setRegisterEmail(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-input">
              <div className="form-input-title">Password </div>
              <div className="form-input-input">
                <input
                  type="password"
                  name="password"
                  value={registerPassword ? registerPassword : ""}
                  placeholder="Enter Your Password"
                  onChange={(e) => {
                    setRegisterPassword(e.target.value);
                  }}
                  className="form-input-title"
                />
              </div>
            </div>

            <div className="form-input">
              <div className="form-input-title">Confirm Password</div>
              <div className="form-input-input">
                <input
                  type="password"
                  name="password-confirm"
                  value={confirmPassword ? setConfirmPassword : ""}
                  placeholder="Re-Enter Your Password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-checkbox">
              <div className="checkbox-unit">
                {" "}
                <input type="checkbox" /> Keep updated about improved features
                and upcoming improvements.
              </div>
              <div className="checkbox-unit">
                {" "}
                <input type="checkbox" /> I accept the terms and conditions and
                the privacy policy
              </div>

              <div className="checkbox-unit">
                {" "}
                Already a member? Click{" "}
                <span
                  onClick={() => {
                    setRegLogState(true);
                  }}
                  style={{ color: "purple" }}
                >
                  here{" "}
                </span>
                to login
              </div>
            </div>

            <button
              onClick={() => {
                register();
              }}
            >
              Lets get started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
