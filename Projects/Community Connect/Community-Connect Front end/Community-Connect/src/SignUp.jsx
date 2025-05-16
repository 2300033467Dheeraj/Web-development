import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    fetch('http://localhost:8080/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text || 'Signup failed');
          });
        }
        return res.text();
      })
      .then((data) => {
        alert(data);
        if (data === 'Signup successful!') {
          navigate('/login'); // Redirect to the login page after successful signup
        }
      })
      .catch((error) => {
        console.error('Signup failed:', error);
        alert(`Signup failed: ${error.message}`);
      });
  };

  return (
    <div className="gradient-background">
      <div className="container">
        <div className="card">
          <h1 className="company-name">Community Connect</h1>
          <h2 className="title">Create Account</h2>
          <p className="subtitle">Join our community today</p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="label">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="label">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="label">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="label">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="terms">
              <label className="terms-label">
                <input type="checkbox" /> I agree to the Terms & Conditions
              </label>
            </div>

            <button type="submit" className="sign-up-button">Create Account</button>
          </form>

          <div className="social-signup">
            <p className="social-text">Or sign up with</p>
            <button className="social-button">Google</button>
            <button className="social-button">Facebook</button>
          </div>

          <p className="login-text">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;