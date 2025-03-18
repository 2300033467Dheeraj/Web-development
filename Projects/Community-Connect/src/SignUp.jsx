import './signup.css';
import {Link} from 'react-router-dom';
const SignUp = () => {
  return (
    <div className="gradient-background">
      <div className="container">
        <div className="card">
          <h1 className="company-name">Community Connect</h1>
          <h2 className="title">Create Account</h2>
          <p className="subtitle">Join our community today</p>
          
          <form className="form">
            <div className="form-group">
              <label htmlFor="name" className="label">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="input"
              />
            </div>

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
                placeholder="Create a password"
                className="input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="label">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="input"
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
            Already have an account? <Link to ="/Login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;