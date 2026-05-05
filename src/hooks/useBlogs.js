import { useContext, useEffect } from "react";
import { BlogContext } from "../context/BlogContext";
import { getBlogs, saveBlogs } from "../services/blogsServices";

export const useBlogs = () => {
  const { blogs, setBlogs } = useContext(BlogContext);

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  const addBlog = (blog) => {
  if (!blog?.title || !blog?.content) return;

  const newBlog = {
    id: Date.now(),
    title: blog.title,
    content: blog.content,
    category: blog.category || "General",
  };

  const updated = [...blogs, newBlog];
  setBlogs(updated);
  saveBlogs(updated);
};
const updateBlog = (updatedBlog) => {
  const updated = blogs.map((b) =>
    b.id === updatedBlog.id ? updatedBlog : b
  );

  setBlogs(updated);
  saveBlogs(updated);
};

  const deleteBlog = (id) => {
    const updated = blogs.filter((b) => b.id !== id);
    setBlogs(updated);
    saveBlogs(updated);
  };


  return { blogs, addBlog, deleteBlog, updateBlog };
};