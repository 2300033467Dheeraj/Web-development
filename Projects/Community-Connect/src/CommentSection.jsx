import { useState, useEffect } from 'react';
import './CommentSection.css';

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(`comments_${postId}`) || '[]');
    setComments(storedComments);
  }, [postId]);

  useEffect(() => {
    localStorage.setItem(`comments_${postId}`, JSON.stringify(comments));
  }, [comments, postId]);

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const commentObject = {
        id: Date.now(),
        text: newComment,
        timestamp: new Date().toISOString(),
        author: 'Anonymous',
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
        <button className='post-button' onClick={handleAddComment}>Post</button>
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
