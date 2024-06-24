import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/SignUp.css";
import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

function SignUpComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in both email and password fields.");
      return;
    }
    navigate("/");
  };

  return (
    <div className="signup-main-body">
      <div className="signup-card">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <input
            type="email"
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signup-btn" type="submit">
            Sign Up
          </button>
          <Link to="/Login">Login</Link>
        </form>
        <div className="other-btns">
          <Link to={"/Profile Card"} className="facebook-btn">
            <BiLogoFacebook className="fac-icn" />Sign With Facebook
          </Link>
          <Link to={"/Profile Card"} className="google-btn">
            <FcGoogle /> Sign With Google
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpComponent;
