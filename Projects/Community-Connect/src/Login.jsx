import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page refresh

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
    
    // TODO: Add authentication logic here (API call)
    
    navigate('/dashboard'); // Redirect after login
  };

  return (
    <div className="gradient-background">
      <div className="container">
        <div className="card">
          <h1 className="company-name">Community Connect</h1>
          <h2 className="title">Welcome back</h2>
          <p className="subtitle">Sign in to continue Community Connect</p>
          
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="label">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // ✅ Input now updates state
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="label">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // ✅ Input now updates state
                required
              />
            </div>

            <div className="options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <p className="forgot-password">
                <Link to="/Reset">Forgot password?</Link>
              </p>
            </div>

            <button type="submit" className="sign-in-button">Sign In</button>
          </form>
          
          <div className="social-login">
            <p className="social-text">Or continue with</p>
            <button className="social-button">Google</button>
            <button className="social-button">Facebook</button>
          </div>
          
          <p className="sign-up-text">Don't have an account? 
            <Link to="/signup"> Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
