import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import logo from "../assets/logo.png";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) navigate("/");
      })
      .catch((error) => {
        console.error("Registration error:", error.message);
        // You can also display the error message to the user using alert or any other method
      });
  };

  return (
    <div className="login">
      <Link to="/">
        {" "}
        <img
          className="login_logo"
          src={logo}
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms & Conditions</a>  of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button
          type="submit"
          onClick={register}
          className="login_registerButton"
        >
          Create your e-commerce Account
        </button>
      </div>
    </div>
  );
}

export default Login;
