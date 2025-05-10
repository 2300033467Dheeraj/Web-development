import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [username, setUsername] = useState("Alex Thompson");
  const [title, setTitle] = useState("Senior Software Engineer");
  const [bio, setBio] = useState(
    "Passionate about building great software and sharing knowledge with the community.\nAlways learning, always growing."
  );
  const [location, setLocation] = useState("San Francisco, CA");
  const [website, setWebsite] = useState("https://alex-thompson.dev");

  const [profilePic, setProfilePic] = useState("/profile.jpg");

  const navigate = useNavigate();

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
    <div className="profile-wrapper">
      {/* Left Panel */}
      <div className="profile-sidebar">
        <label htmlFor="profile-pic-upload">
          <img src={profilePic} alt="Profile" className="sidebar-pic" />
        </label>
        <input
          type="file"
          id="profile-pic-upload"
          accept="image/*"
          onChange={handleProfilePicChange}
          hidden
        />

        {isEditing ? (
          <>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                fontSize: "22px",
                fontWeight: "600",
                textAlign: "center",
                margin: "5px 0",
                border: "none",
                outline: "none",
                background: "#f9f9f9",
              }}
              className="sidebar-username"
            />
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                fontSize: "14px",
                color: "#777",
                marginBottom: "15px",
                border: "none",
                outline: "none",
                background: "#f9f9f9",
                textAlign: "center",
              }}
              className="sidebar-title"
            />
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              style={{
                fontSize: "13px",
                color: "#555",
                width: "100%",
                borderRadius: "6px",
                padding: "5px",
                border: "1px solid #ddd",
                resize: "vertical",
                whiteSpace: "pre-line",
                marginBottom: "20px",
              }}
              className="sidebar-bio"
            />
          </>
        ) : (
          <>
            <h2 className="sidebar-username">{username}</h2>
            <p className="sidebar-title">{title}</p>
            <p className="sidebar-bio">{bio}</p>
          </>
        )}

        <div className="sidebar-buttons">
          <button onClick={handleFollowClick} className="btn-follow">
            {isFollowing ? "Following" : "Follow"}
          </button>
          <button onClick={handleEditClick} className="btn-message">
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        <div className="sidebar-stats">
          <span>
            <strong>125</strong> Threads
          </span>
          <span>
            <strong>498</strong> Replies
          </span>
          <span>
            <strong>2.1k</strong> Upvotes
          </span>
        </div>

        <div className="sidebar-meta">
          {isEditing ? (
            <>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{
                  fontSize: "13px",
                  color: "#555",
                  marginBottom: "6px",
                  border: "none",
                  outline: "none",
                  background: "#f9f9f9",
                  width: "100%",
                }}
              />
              <input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                style={{
                  fontSize: "13px",
                  color: "#0073e6",
                  marginBottom: "10px",
                  border: "none",
                  outline: "none",
                  background: "#f9f9f9",
                  width: "100%",
                }}
              />
            </>
          ) : (
            <>
              <p>📍 {location}</p>
              <p>📅 Joined March 2020</p>
              <a href={website} target="_blank" rel="noreferrer">
                {website}
              </a>
            </>
          )}

          <div className="social-icons">
            <i className="fab fa-github"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="profile-main">
        <div className="tabs">
          <button onClick={() => navigate("/profile/threads")}>Threads</button>
          <button onClick={() => navigate("/profile/replies")}>Replies</button>
                 </div>

        <div className="thread-card">
          <h3>Best practices for React performance optimization</h3>
          <p>
            In this comprehensive guide, I’ll share my experience with React
            performance optimization techniques…
          </p>
          <div className="card-footer">
            <span>234 👍</span>
            <span>45 💬</span>
          </div>
        </div>

        <div className="thread-card">
          <h3>Understanding TypeScript generics</h3>
          <p>
            TypeScript generics can be confusing at first, but they're incredibly powerful once you understand them…
          </p>
          <div className="card-footer">
            <span>187 👍</span>
            <span>32 💬</span>
          </div>
        </div>

        <div className="thread-card">
          <h3>The future of web development</h3>
          <p>
            Let’s explore the upcoming trends and technologies that will shape
            the future of web development…
          </p>
          <div className="card-footer">
            <span>342 👍</span>
            <span>67 💬</span>
          </div>
        </div>
      </div>
    </div>
  );
}