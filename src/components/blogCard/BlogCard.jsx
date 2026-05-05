import React from 'react'

const BlogCard = ({ blog, onDelete, onEdit }) => {
  if (!blog) return null;

  return (
    <>
      <div className='lg:max-w-[900px] mx-auto'>

        <div className="bg-white p-5 m-5 rounded-xl shadow-sm border">
          <h3 className="text-lg font-bold">{blog.title || "No Title"}</h3>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {blog.category || "General"}
          </span>
          <p>{blog.content}</p>
          <div className="flex gap-3 mt-4">
            <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => onEdit(blog)}
            >
              Edit
            </button>

            <button className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() => onDelete(blog.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCard
