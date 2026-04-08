import React from 'react'

const BlogCard = () => {
  return (
    <>
       <div className="bg-white p-5 m-5 rounded-xl shadow-sm border">
      <h3 className="text-lg font-bold">Blog Title</h3>

      <p className="text-gray-600 mt-2">
        This is a sample blog content preview...
      </p>

      <div className="flex gap-3 mt-4">
        <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Edit
        </button>

        <button className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
    </>
  )
}

export default BlogCard
