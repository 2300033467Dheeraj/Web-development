import { useState, useEffect } from "react";
import "./threads.css"; // Import the CSS file

export default function Threads() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const storedThreads = JSON.parse(localStorage.getItem("posts")) || [];
    setThreads(storedThreads);
  }, []);

  return (
    <div className="threads-container">
      <h2>📌 Threads I Posted</h2>
      {threads.length > 0 ? (
        <ul className="threads-list">
          {threads.map((thread, index) => (
            <li key={index}>{thread.title}</li>
          ))}
        </ul>
      ) : (
        <p className="no-threads">No threads posted yet.</p>
      )}
    </div>
  );
}
