import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/LogIn.css";
function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both email and password.");
      return;
    }

    navigate("/");
  };

  return (
    <div className="login-main-body">
      <div className="login-card">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Enter email or username..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" type="submit">
            Login
          </button>
          <Link to="/SignUp">Sign Up</Link>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
