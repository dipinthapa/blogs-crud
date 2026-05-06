import { useBlogs } from "../hooks/useBlogs";
import CreateForm from "../components/createBlog/CreateBlog";
import BlogList from "../components/blogList/BlogList";
import { useState } from "react";
import BlogControls from "../components/BlogControls";
import { useFilteredBlogs } from "../hooks/useFilteredBlogs";

const BlogPage = () => {
    const { blogs, addBlog, deleteBlog, updateBlog } = useBlogs();
    const [editingBlog, setEditingBlog] = useState(null);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("latest");
    const [category, setCategory] = useState("All");

    const handleSubmit = (data) => {
        if (editingBlog) {
            updateBlog({ ...data, id: editingBlog.id });
            setEditingBlog(null);
        } else {
            addBlog(data);
        }
    };
    const filteredBlogs = useFilteredBlogs(
        blogs,
        search,
        sort,
        category
    );

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold text-center">Blog App</h1>
                <BlogControls
                    search={search}
                    setSearch={setSearch}
                    sort={sort}
                    setSort={setSort}
                    category={category}
                    setCategory={setCategory}
                />

                <CreateForm onSubmit={handleSubmit} editingBlog={editingBlog} />

                <BlogList
                    blogs={filteredBlogs}
                    onDelete={deleteBlog}
                    onEdit={setEditingBlog}
                />
            </div>
        </div>
    );
};

export default BlogPage;