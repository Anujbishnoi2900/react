import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blog");
      const result = await response.json();

      if (result.success) {
        setBlogs(result.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result.success) {
        alert("Blog Deleted ✅");
        fetchBlogs();
      } else {
        alert("Delete Failed ❌");
      }
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Server Error ❌");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">All Blogs</h2>

      {blogs.length === 0 ? (
        <p className="text-gray-500">No Blogs Found</p>
      ) : (
        <div className="space-y-5">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border border-gray-200 shadow-sm rounded-md p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
                  <p className="text-gray-600 mt-1">
                    <strong>Status:</strong> {blog.status}
                  </p>
                  <p className="text-gray-700 mt-2">{blog.excerpt}</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Created: {new Date(blog.created_at).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => deleteBlog(blog.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;