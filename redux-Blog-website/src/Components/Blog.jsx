import { useState } from "react";
import "../styles/blog.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      return;
    }

    if (editIndex !== null) {
      const updatedPosts = [...posts];
      updatedPosts[editIndex] = { title, content };
      setPosts(updatedPosts);
      setEditIndex(null);
    }
    else {
      setPosts([...posts, { title, content }]);
    }

    setTitle("");
    setContent("");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setTitle(posts[index].title);
    setContent(posts[index].content);
  };

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  return (
    <div className="blog-container">
      <h1>Travel Blog</h1>
      <p>Share your travel stories, tips, and experiences.</p>

      <form className="blog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="4"
        />
        <button type="submit">{editIndex !== null ? "Update Post" : "Add Post"}</button>
      </form>

      <div className="blog-list">
        {posts.length === 0 ? (
          <p>No blog posts yet. Start writing!</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="blog-card">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <div className="blog-actions">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
