import './login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="gradient-background">
      <div className="container">
        <div className="card">
          <h1 className="company-name">Community Connect</h1>
          <h2 className="title">Welcome back</h2>
          <p className="subtitle">Sign in to continue Community Connect</p>
          
          <form className="form">
            <div className="form-group">
              <label htmlFor="email" className="label">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="label">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="input"
              />
            </div>
                          <div className="options">
                            <label className="remember-me">
                              <input type="checkbox" /> Remember me
                            </label>
                            <p className="forgot-password">
                              <Link to="/Reset" >Forgot password?</Link>
                            </p>
                          </div>
            <button type="submit" className="sign-in-button">Sign In</button>
          </form>
          
          <div className="social-login">
            <p className="social-text">Or continue with</p>
            <button className="social-button">Google</button>
            <button className="social-button">Facebook</button>
          </div>
          
          <p className="sign-up-text">
            Don't have an account? <Link to ="/SignUp">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
