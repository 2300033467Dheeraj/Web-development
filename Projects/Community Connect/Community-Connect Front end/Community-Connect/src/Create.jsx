import { useState } from "react";
import "./Create.css"; // Import the CSS file

const Create = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState(["Technology", "Programming", "Web","Development", "Design", "Devops", "Career"]);
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...imageUrls]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      category,
      images,
      tags,
      timestamp: Date.now(),
    };

    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));

    alert("Thread created successfully!");
  };

  return (
    <div className="thread-container">
      <div className="thread-box">
        <h2 className="heading">Create New Thread</h2>

        {/* Thread Title */}
        <input
          type="text"
          placeholder="Enter your thread title"
          maxLength={100}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />

        {/* Category Selection */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input-field"
        >
          <option value="">Select a category</option>
          <option value="Technology">Technology</option>
          <option value="Programming">Programming</option>
          <option value="Web">Web</option>
          <option value="Development">Development</option>
          <option value="Design">Design</option>
          <option value="Devops">Devops</option>
          <option value="Career">Career</option>

          {/* Add custom category */}
          
        </select>

        {/* Thread Content */}
        <textarea
          placeholder="Write your thread content here..."
          maxLength={5000}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="textarea-field"
        ></textarea>

        {/* Image Upload */}
        <div className="image-upload">
          <label className="image-label">
            <span>Drag and drop images, or click to select files</span>
            <input type="file" multiple className="file-input" onChange={handleImageUpload} />
          </label>

          {/* Display Uploaded Images */}
          <div className="image-preview">
            {images.map((img, index) => (
              <div key={index} className="image-container">
                <img src={img} alt="Uploaded" className="uploaded-image" />
                <button onClick={() => removeImage(index)} className="remove-button">✕</button>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="button-container">
          <button onClick={handleSubmit}
           
          className="post-button">Post Thread</button>
          
        </div>
      </div>
    </div>
  );
};

export default Create;
