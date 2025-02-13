import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navLinks = [
    { name: "Home", path: "/about" },
    { name: "Service", path: "/projects" },
    { name: "Favourite", path: "/skills" },
    { name: "Inbox", path: "/blogs" },
    { name: "Profile", path: "/certification" },
  ];

  return (
    <header className="sticky top-0 z-20 w-full bg-white text-[#0D0D0D] px-5 md:px-20 lg:px-24 py-5 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold hover:text-[#00BFB3]">
          iBadi
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center text-lg font-medium gap-8">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="hover:text-[#00BFB3] transition-all cursor-pointer"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Authentication Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="border border-[#00BFB3] text-black py-2 px-4 rounded-lg hover:bg-[#00BFB3] hover:text-white transition"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-[#00BFB3] text-white py-2 px-4 rounded-lg hover:opacity-80 transition"
          >
            Create Account
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle Menu"
          className="lg:hidden"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed w-[300px] inset-0 bg-[#2e424d] text-white pt-10 px-10 flex flex-col justify-start gap-5 transform transition-all duration-300 ease-in-out z-50 ${
          menu ? "translate-x-0 top-0 left-0 " : "-translate-x-full"
        }`}
      >
        {navLinks.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            onClick={() => setMenu(false)}
            className="hover:text-[#98dad9] transition-all cursor-pointer text-2xl"
          >
            {name}
          </Link>
        ))}

        {/* Authentication Buttons (Mobile) */}
          <Link
            to="/login"
            className="border border-[#00BFB3] text-white py-2 px-4 rounded-lg hover:bg-[#00BFB3] hover:text-white transition"
            onClick={() => setMenu(false)}
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-[#00BFB3] text-white py-2 px-4 rounded-lg hover:opacity-80 transition"
            onClick={() => setMenu(false)}
          >
            Create Account
          </Link>
      </div>
    </header>
  );
};

export default Navbar;
