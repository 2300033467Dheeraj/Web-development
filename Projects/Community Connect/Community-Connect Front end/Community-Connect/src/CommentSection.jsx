import { useState, useEffect } from 'react';
import './CommentSection.css'; // Create this CSS file

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Load comments from local storage or an API
    const storedComments = JSON.parse(localStorage.getItem(`comments_${postId}`) || '[]');
    setComments(storedComments);
  }, [postId]);

  useEffect(() => {
    // Save comments to local storage or an API
    localStorage.setItem(`comments_${postId}`, JSON.stringify(comments));
  }, [comments, postId]);

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const commentObject = {
        id: Date.now(), // Generate a unique ID
        text: newComment,
        timestamp: new Date().toISOString(),
        author: 'Anonymous', // Or get the user's name
      };
      setComments([...comments, commentObject]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  return (
    <div className="comment-section">
      <h3 className='comment'>Comments</h3>
      <div className="comment-input">
        <textarea
          value={newComment}
          onChange={handleInputChange}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Post</button>
      </div>
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment.id} className="comment">
            <div className="comment-header">
              <span className="comment-author">{comment.author}</span>
              <span className="comment-timestamp">
                {new Date(comment.timestamp).toLocaleString()}
              </span>
              <button
                className="delete-button"
                onClick={() => handleDeleteComment(comment.id)}
              >
                Delete
              </button>
            </div>
            <p className="comment-text">{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentSection;