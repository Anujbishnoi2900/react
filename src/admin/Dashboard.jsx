import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [recentContacts, setRecentContacts] = useState([]);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const res = await fetch("/api/dashboard");
        const result = await res.json();

        if (result.success) {
          setStats(result.data.stats);
          setRecentBlogs(result.data.recent_blogs);
          setRecentContacts(result.data.recent_contacts);
        }
      } catch (error) {
        console.error("Dashboard Error:", error);
      }
    }

    fetchDashboard();
  }, []);

  return (
    <div className="p-6 space-y-10 max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* Stats Section */}
      {stats && (
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-bold text-blue-700">{stats.total_blogs}</h2>
            <p className="text-gray-700 mt-1">Total Blogs</p>
          </div>

          <div className="bg-green-100 p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-bold text-green-700">{stats.published_blogs}</h2>
            <p className="text-gray-700 mt-1">Published Blogs</p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-bold text-yellow-700">{stats.draft_blogs}</h2>
            <p className="text-gray-700 mt-1">Draft Blogs</p>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-bold text-purple-700">{stats.total_contacts}</h2>
            <p className="text-gray-700 mt-1">Total Contacts</p>
          </div>
        </div>
      )}

      {/* Recent Blogs */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Blogs</h2>

        {recentBlogs.length === 0 ? (
          <p className="text-gray-500">No Blogs Found</p>
        ) : (
          <div className="space-y-4">
            {recentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                    <p className="text-gray-600 mt-1">Status: <span className="font-medium">{blog.status}</span></p>
                    <p className="text-gray-700 mt-2">{blog.excerpt}</p>
                    <p className="text-gray-400 text-sm mt-2">
                      Created: {new Date(blog.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recent Contacts */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Contacts</h2>

        {recentContacts.length === 0 ? (
          <p className="text-gray-500">No Contacts Found</p>
        ) : (
          <div className="space-y-4">
            {recentContacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-800">{contact.name}</h3>
                <p className="text-gray-600 mt-1">Email: <span className="font-medium">{contact.email}</span></p>
                <p className="text-gray-600 mt-1">Subject: <span className="font-medium">{contact.subject}</span></p>
                <p className="text-gray-400 text-sm mt-2">
                  Created: {new Date(contact.created_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Dashboard;