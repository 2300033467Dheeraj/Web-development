import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './Home.css';
import CommentSection from './CommentSection';

export default function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [votes, setVotes] = useState([]);
  const [openComments, setOpenComments] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All Topics"); // Default category

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
    setVotes(storedPosts.map(() => 0));
  }, []);

  const handleVote = (index, change) => {
    const newVotes = [...votes];
    newVotes[index] += change;
    setVotes(newVotes);
  };

  const toggleComments = (index) => {
    setOpenComments({
      ...openComments,
      [index]: !openComments[index],
    });
  };

  // Filtered posts based on selected category
  const filteredPosts = selectedCategory === "All Topics"
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="flex">
      <div className="parent">
        <div className="posts-container">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <div key={index} className="post-card">
                {/* Left Section (Votes and Comment) */}
                <div className="left-section">
                  <div className="vote-section">
                    <button className="vote-button upvote" onClick={() => handleVote(index, 1)}>▲</button>
                    <span className="vote-count">{votes[index]}</span>
                    <button className="vote-button downvote" onClick={() => handleVote(index, -1)}>▼</button>
                  </div>
                  <button className="comment-btn" onClick={() => toggleComments(index)}>
                    <i className="fas fa-comment"></i>
                    <img src="/Comment.jpg" alt="Comment" className="Commentimg" />
                  </button>
                  {openComments[index] && <CommentSection postId={index} />}
                </div>

                {/* Right Section (Post Content) */}
                <div className="post-content">
                  <div className="post-header">
                    <h2>{post.title}</h2>
                    <span className="post-category">{post.category}</span>
                  </div>
                  <p>{post.content}</p>
                  <div className="post-footer">
                    <div className="post-meta">
                      <span>Posted by: {post.author}</span>
                      <span>{new Date(post.timestamp).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No posts available in this category.</p>
          )}
        </div>
      </div>

      <div className="sidebar">
        <button 
          className="createthread" 
          onClick={() => navigate('/Create')} 
          aria-label="Go to Create New Thread">
          <i className="fas fa-edit"></i> Create New Thread
        </button>

        {/* Categories Filter */}
        <div className="categories">
          <h3>Categories</h3>
          <ul className="button-list">
            {["All Topics", "Development", "Design", "Devops", "Career","Technology", "Programming", "Web"].map((text, index) => (
              <li key={index}>
                <button
                  className={selectedCategory === text ? "active-category" : ""}
                  onClick={() => setSelectedCategory(text)}
                >
                  {text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 