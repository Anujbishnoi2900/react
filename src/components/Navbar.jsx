import { Link } from "react-router-dom";

const Navbar = ({ setIsAuth }) => {

  const handleLogout = () => {
    setIsAuth(false);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center text-white">

        <h1 className="text-xl font-bold">MyWebsite</h1>

        <div className="space-x-6">

          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>

          <button
            onClick={handleLogout}
            className="hover:text-orange-400 transition"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;