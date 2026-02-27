import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Myblog from "./admin/Myblog";
import ProtectedRoute from "./components/ProtectedRoute";
import ContactInfo from "./admin/ContactInfo";
import Dashboard from "./admin/Dashboard";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Experiment from "./admin/Experiment";

function App() {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuth") === "true"
  );

  return (
    <BrowserRouter>
      
      {/* 🔹 PUBLIC NAVBAR (only when NOT logged in) */}
      {!isAuth && (
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      )}

      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id/:slug" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

        {/* ================= PROTECTED ROUTES ================= */}
        <Route element={<ProtectedRoute isAuth={isAuth} />}>
          
          <Route
            path="/dashboard"
            element={
              <div style={{ display: "flex" }}>
                <Navbar
                  isAuth={isAuth}
                  setIsAuth={setIsAuth}
                  variant="admin"
                />
                <div style={{ flex: 1, padding: "20px" }}>
                  <Dashboard />
                </div>
              </div>
            }
          />

          <Route
            path="/contactinfo"
            element={
              <div style={{ display: "flex" }}>
                <Navbar
                  isAuth={isAuth}
                  setIsAuth={setIsAuth}
                  variant="admin"
                />
                <div style={{ flex: 1, padding: "20px" }}>
                  <ContactInfo />
                </div>
              </div>
            }
          />

          <Route
            path="/myblog"
            element={
              <div style={{ display: "flex" }}>
                <Navbar
                  isAuth={isAuth}
                  setIsAuth={setIsAuth}
                  variant="admin"
                />
                <div style={{ flex: 1, padding: "20px" }}>
                  <Myblog />
                </div>
              </div>
            }
          />
                    <Route
            path="/experiment"
            element={
              <div style={{ display: "flex" }}>
                <Navbar
                  isAuth={isAuth}
                  setIsAuth={setIsAuth}
                  variant="admin"
                />
                <div style={{ flex: 1, padding: "20px" }}>
                  <Experiment />
                </div>
              </div>
            }
          />

        </Route>

        {/* 🔁 Redirect logic */}
        <Route
          path="*"
          element={
            isAuth ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

      </Routes>

      {/* 🔹 Footer only when NOT logged in */}
      {!isAuth && <Footer />}

    </BrowserRouter>
  );
}

export default App;