import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert("Please fill all fields ❌");
      return;
    }

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const text = await response.text();
      console.log("RAW SERVER RESPONSE:", text);

      try {
        const data = JSON.parse(text);

        if (!response.ok) {
          alert(data.message || "Invalid credentials ❌");
          return;
        }

        // if (data.token) {
        //   localStorage.setItem("token", data.token)  ;
        // }

        localStorage.setItem("isAuth", "true");
        setIsAuth(true);
        navigate("/dashboard"); 

      } catch (err) {
        console.error("JSON Parse Error:", err);
        alert("Server returned invalid JSON ❌");
      }

    } catch (error) {
      console.error("Login Error:", error);
      alert("Server Error ❌");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Sign In</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;