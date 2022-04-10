import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogo from "../../images/google.svg";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/login";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="passwrod"
              id=""
              required
            />
            <p style={{ color: "red" }}>{error?.message}</p>
            {loading && <p>Loading...</p>}
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
