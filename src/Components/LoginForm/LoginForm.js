import React, { useContext, useState } from "react";
import "./LoginForm.css";
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
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regLogState, setRegLogState] = useState(false);
  const { user, setUser } = useContext(SiteContext);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      console.log("successful login");
    } catch (error) {
      console.log(error.message);
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
      <div className="login-form-container">
        {regLogState ? (
          <div className="login-form">
            <h1>Register</h1>
            <div>
              {" "}
              <i className="fas fa-user"></i>
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
            <div>
              {" "}
              <i className="fas fa-lock"></i>
              <input
                className="input-psw"
                type="password"
                name="name"
                value={registerPassword ? registerPassword : ""}
                placeholder="Enter Your Password"
                onChange={(e) => {
                  setRegisterPassword(e.target.value);
                }}
              />
            </div>

            <button
              className="btn btn-alternate2"
              onClick={() => {
                register();
              }}
            >
              Register
            </button>
            <h3>or</h3>
            <button
              onClick={() => {
                setRegLogState(false);
              }}
              className="btn btn-alternate"
            >
              Login
            </button>
          </div>
        ) : (
          <div className="login-form">
            <h1>Login</h1>
            <div>
              {" "}
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="name"
                value={loginEmail ? loginEmail : ""}
                placeholder="Enter Your Email"
                onChange={(e) => {
                  setloginEmail(e.target.value);
                }}
              />
            </div>
            <div>
              {" "}
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="name"
                value={loginPassword ? loginPassword : ""}
                placeholder="Enter Your Password"
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
              />
            </div>

            <button
              onClick={() => {
                login();
              }}
              className="btn btn-alternate"
            >
              Login
            </button>
            <h3>or</h3>
            <button
              onClick={() => {
                setRegLogState(true);
              }}
              className="btn btn-alternate2"
            >
              Register
            </button>
          </div>
        )}
      </div>

      {/* <div className="form-container">
        <div className="log-form">
          <div className="log-form-header">Welcome back</div>
          <div className="form-input">
            <div className="form-input-title">Email</div>
            <div className="form-input-input">
              <input />
            </div>
          </div>

          <div className="form-input">
            <div className="form-input-title">Password</div>
            <div className="form-input-input">
              <input />
            </div>
          </div>

          <button>Log in</button>
        </div>
      </div>

      <div className="form-container">
        <div className="log-form">
          <div className="log-form-header">
            <h1>Welcome</h1>
            <p>Your credentials will be stored in a secure database</p>
          </div>

          <div className="form-input reg">
            <div className="reg-form-name">
              {" "}
              <div className="form-input-title">First Name</div>
              <div className="form-input-input">
                <input />
              </div>
            </div>

            <div className="reg-form-name">
              {" "}
              <div className="form-input-title">Last name</div>
              <div className="form-input-input">
                <input />
              </div>
            </div>
          </div>

          <div className="form-input">
            <div className="form-input-title">Email</div>
            <div className="form-input-input">
              <input />
            </div>
          </div>

          <div className="form-input">
            <div className="form-input-title">Password</div>
            <div className="form-input-input">
              <input />
            </div>
          </div>

          <div className="form-input">
            <div className="form-input-title">Confirm Password</div>
            <div className="form-input-input">
              <input />
            </div>
          </div>

          <div className="form-checkbox">
            <div className="checkbox-unit">
              {" "}
              <input type="checkbox" /> Keep e updated about improved features
              and upcoming improvements.
            </div>
            <div className="checkbox-unit">
              {" "}
              <input type="checkbox" /> I accept the terms and conditions and
              the privacy policy
            </div>
          </div>

          <button>Lets get started</button>
        </div>
      </div> */}
    </div>
  );
};
