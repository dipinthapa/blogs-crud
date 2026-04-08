import React from 'react'

const CreateBlog = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create Blog</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Enter blog title"
          className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
        />

        <textarea
          placeholder="Enter blog content"
          rows="4"
          className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>

        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Save Blog
        </button>
      </form>
    </div>
    </>
  )
}

export default CreateBlog
