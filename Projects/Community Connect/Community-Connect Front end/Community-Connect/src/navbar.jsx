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
      </button>

    </nav>
  );
};

export default Navbar;
