import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("your_username");
  const [bio, setBio] = useState("🌍 Traveler | 📸 Photographer | 💻 Developer");
  const [profilePic, setProfilePic] = useState("/profile.jpg");

  const navigate = useNavigate(); // Correct way to use navigation in an event handler

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <label htmlFor="profile-pic-upload">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </label>
        <input type="file" id="profile-pic-upload" accept="image/*" onChange={handleProfilePicChange} hidden />
        
        <div className="profile-info">
          {isEditing ? (
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="edit-input" 
            />
          ) : (
            <h2 className="username">{username}</h2>
          )}
          
          <div className="stats">
            <span><strong>120</strong> posts</span>
            <span><strong>10K</strong> followers</span>
            <span><strong>500</strong> following</span>
          </div>

          {isEditing ? (
            <textarea 
              value={bio} 
              onChange={(e) => setBio(e.target.value)} 
              className="edit-bio"
            />
          ) : (
            <p className="bio">{bio}</p>
          )}

          {/* Buttons */}
          <div className="profile-buttons">
            <button 
              className={`follow-btn ${isFollowing ? "following" : ""}`} 
              onClick={handleFollowClick}
            >
              {isFollowing ? "Following ✅" : "Follow ➕"}
            </button>

            <button className="edit-btn" onClick={handleEditClick}>
              {isEditing ? "Save Changes 💾" : "Edit Profile ✏️"}
            </button>
          </div>
        </div>
      </div>

      {/* Profile Links */}
      <div className="profile-links">
        <button className="profile-link" onClick={() => navigate('/profile/threads')}>
          Threads
        </button>
        <button className="profile-link" onClick={() => navigate('/profile/replies')}>
          Replies
        </button>
      </div>
    </div>
  );
}
