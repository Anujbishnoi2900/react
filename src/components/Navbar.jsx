import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isAuth, setIsAuth, variant = "public" }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
  navigate("/", { replace: true });
  };

  // 🔹 PUBLIC NAVBAR (Top)
  if (variant === "public") {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="flex justify-between items-center text-white">
          <h1 className="text-xl font-bold">MyWebsite</h1>

          <div className="space-x-6">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <Link to="/about" className="hover:text-yellow-400">About</Link>
            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
            <Link to="/blogs" className="hover:text-yellow-400">Blogs</Link>

            {!isAuth && (
              <Link to="/login" className="hover:text-yellow-400">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }

  // 🔹 ADMIN SIDEBAR NAVBAR
  return (
    <div className="bg-gray-900 text-white min-h-screen w-64 p-5 space-y-6">
      <h1 className="text-2xl font-bold">Admin Panel</h1>

      <div className="flex flex-col space-y-4">
        <Link to="/dashboard" className="hover:text-yellow-400">
          Dashboard
        </Link>

        <Link to="/contactinfo" className="hover:text-yellow-400">
          ContactInfo
        </Link>

        <Link to="/myblog" className="hover:text-yellow-400">
          MyBlog
        </Link>

        <Link to="/experiment" className="hover:text-yellow-400">
        Experiment
        </Link>
        

        <button
          onClick={handleLogout}
          className="text-left hover:text-red-400"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;