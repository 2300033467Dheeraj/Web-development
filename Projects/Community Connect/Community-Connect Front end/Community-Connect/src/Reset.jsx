import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./Reset.css"; // Import the CSS file

const Reset = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const handleReset = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
    
    // Simulate API call delay and navigate to login page
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="reset-page">
      <div className="reset-container">
        <h2>Reset Password</h2>
        <form onSubmit={handleReset}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default Reset;
