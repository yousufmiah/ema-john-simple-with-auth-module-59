import React from "react";
import { Link } from "react-router-dom";
import GoogleLogo from "../../images/google.svg";

import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="passwrod" id="" required />
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to ema-john?
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
        <div className="link-or">
          <div className="link-or2"></div>
          Or
          <div className="link-or3"></div>
        </div>
        <div>
          <button className="google-icon">
            <img src={GoogleLogo} alt="" />
            <p className="google-text">Continue with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
