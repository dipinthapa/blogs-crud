import React from 'react'
import { useState, useEffect } from "react";



const CreateBlog = ({ onSubmit, editingBlog }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setContent(editingBlog.content);
      setCategory(editingBlog.category || "General");
    }
  }, [editingBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return;

    onSubmit({ title, content, category });

    setTitle("");
    setContent("");
  };

  return (
    <>
      <div className='lg:max-w-[900px] mx-auto'>

        <div className="bg-white p-6 rounded-2xl m-5 shadow-md">
          <h2 className="text-xl font-semibold mb-4">{editingBlog ? "Edit Blog" : "Create Blog"}</h2>

          <form className="space-y-4"
            onSubmit={handleSubmit}
          >
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="General">General</option>
              <option value="Tech">Tech</option>
              <option value="Life">Life</option>
            </select>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter blog title"
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter blog content"
              rows="4"
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              {editingBlog ? "Update Blog" : "Save Blog"}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateBlog
