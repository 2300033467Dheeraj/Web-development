import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      {/* Home Button */}
      <button className="nav-home" onClick={() => navigate('/')} aria-label="Go to Home">
        Community Connect
      </button>

      {/* Search Bar */}
      <input type="text" className="nav-search" placeholder="Search Discussions" aria-label="Search" />

<<<<<<< HEAD
      {/* Login & Sign Up Buttons */}
      <button className="nav-login" onClick={() => navigate('/login')} aria-label="Login"> 
        Login
      </button>
      <button className="nav-signup" onClick={() => navigate('/signup')} aria-label="Sign Up"> 
        Sign Up
      </button>

      {/* Profile Button */}
      <button className="nav-profile" onClick={() => navigate('/profile')} aria-label="Go to Profile Page">
        Profile
=======
      

      {/* Login & Signup Buttons */}
      <button className="nav-login" onClick={() => navigate('/login')} aria-label="Login"> 
        Login
>>>>>>> 2e598a3c50eae530fab424248e9de4e09fb1a791
      </button>
      <button className="nav-signup" onClick={() => navigate('/signup')} aria-label="Sign Up"> 
        Sign Up
      </button>

      {/* Profile Button */}
      <button className="nav-profile" onClick={() => navigate('/profile')}>
        <img src="/" alt="Profile" />
      </button>

    </nav>
  );
};

export default Navbar;
