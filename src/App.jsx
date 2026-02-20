import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
  <Routes>

    {/* Login Page (without Navbar/Footer) */}
    <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

    {/* Protected Layout */}
    <Route element={<ProtectedRoute isAuth={isAuth} />}>

      <Route
        element={
          <>
            <Navbar setIsAuth={setIsAuth} />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id/:slug" element={<Detail />} />
      </Route>

    </Route>

  </Routes>
</BrowserRouter>
  );
}

export default App;