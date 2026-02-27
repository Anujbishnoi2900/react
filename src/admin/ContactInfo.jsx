import React, { useEffect, useState } from "react";

const ContactInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/contact");
        const result = await res.json();

        if (result.success) {
          setData(Array.isArray(result.data) ? result.data : [result.data]);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setData([]);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
          📩 Saved Contacts
        </h2>

        {data.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <p className="text-lg font-medium">No Data Found</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full text-sm text-left text-gray-600">
              
              <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Phone</th>
                  <th className="px-6 py-3">Subject</th>
                  <th className="px-6 py-3">Message</th>
                  <th className="px-6 py-3">Created At</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {data.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 transition duration-200"
                  >
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {item.name}
                    </td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.phone}</td>
                    <td className="px-6 py-4">{item.subject}</td>
                    <td className="px-6 py-4 max-w-xs truncate">
                      {item.message}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {new Date(item.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}

      </div>
    </div>
  );
};

export default ContactInfo;