import { useState, useEffect } from "react";
import './replies.css'; // Import the CSS file

export default function Replies() {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    const storedReplies = JSON.parse(localStorage.getItem("replies")) || [];
    setReplies(storedReplies);
  }, []);

  return (
    <div className="replies-container">
      <h2>💬 Replies I Gave</h2>
      <ul className="replies-list">
        {replies.length > 0 ? (
          replies.map((reply, index) => <li key={index}>{reply.text}</li>)
        ) : (
          <p className="no-replies">No replies yet.</p>
        )}
      </ul>

      {/* Include the CommentSection component */}
    </div>
  );
}
