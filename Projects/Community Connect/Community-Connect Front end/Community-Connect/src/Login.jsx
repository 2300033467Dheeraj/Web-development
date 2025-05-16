import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"; // Ensure you have this CSS file

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data);
        if (data === "Login successful!") {
          navigate("/"); // Or your desired dashboard route
        }
      })
      .catch((err) => {
        console.error("Login failed", err);
        alert("Login failed. Please try again.");
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Community Connect</h1>
        <h2 className="login-subtitle">Welcome Back</h2>
        <p className="login-text">Sign in to continue</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/reset" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="login-button">Sign In</button>
        </form>

        <div className="social-login">
          <p>Or continue with</p>
          <button className="google-button">Google</button>
          <button className="facebook-button">Facebook</button>
        </div>

        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;