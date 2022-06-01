import React from "react";
import "./LoginForm.css";

export const LoginForm = () => {
  return (
    <div className="container">
      <div className="login-form-container">
        <form className="login-form">
          <h1>Login</h1>
          <div>
            {" "}
            <i className="fas fa-user"></i>
            <input type="text" name="name" placeholder="Enter Your Email" />
          </div>
          <div>
            {" "}
            <i className="fas fa-lock"></i>
            <input type="text" name="name" placeholder="Enter Your Password" />
          </div>

          <button className="btn btn-alternate">Login</button>
          <h3>or</h3>
          <button className="btn btn-alternate2">Register</button>
        </form>
      </div>
    </div>
  );
};
