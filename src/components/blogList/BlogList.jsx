import { useState } from "react";
import BlogCard from "../blogCard/BlogCard";

const BlogList = ({ blogs, onDelete, onEdit }) => {

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("latest");
    const [category, setCategory] = useState("All");

    const filteredBlogs = blogs
  ?.filter((blog) =>
    (category === "All" || blog.category === category) &&
    (
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.content.toLowerCase().includes(search.toLowerCase())
    )
  )
  ?.sort((a, b) => {
    if (sort === "latest") return b.id - a.id;
    if (sort === "oldest") return a.id - b.id;
    if (sort === "title") return a.title.localeCompare(b.title);
    return 0;
  });

    return (
        <>
            <div className="space-y-4">
                {blogs?.map((blog) => (
                    blog && (
                        <BlogCard
                            key={blog.id}
                            blog={blog}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    )
                ))}
            </div>
        </>
    );
};

export default BlogList;