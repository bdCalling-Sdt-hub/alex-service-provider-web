{
  /* Auth Buttons */
}
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
</div>;

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="sticky z-20 w-full text-[#0D0D0D] bg-white px-[20px] md:px-[100px] lg:px-[100px] py-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center cursor-pointer">
          <Link to="/" duration={500}>
            <h1 className="text-2xl font-semibold hover:text-[#00BFB3]">
              iBadi
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
          <Link
            to="/about"
            className="hover:text-[#00BFB3] transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="hover:text-[#00BFB3] transition-all cursor-pointer"
          >
            Service
          </Link>
          <Link
            to="/skills"
            className="hover:text-[#00BFB3] transition-all cursor-pointer"
          >
            Favourite
          </Link>
          <Link
            to="/blogs"
            className="hover:text-[#00BFB3] transition-all cursor-pointer"
          >
            Inbox
          </Link>
          <Link
            to="/certification"
            className="hover:text-[#00BFB3] transition-all cursor-pointer"
          >
            Profile
          </Link>
        </nav>

        {/* Contact Button */}
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
        <div className="lg:hidden flex items-center">
          {menu ? (
            <AiOutlineClose
              size={28}
              onClick={handleChange}
              className="cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              size={28}
              onClick={handleChange}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-[#2e424d] text-white text-2xl flex flex-col items-center justify-center gap-8 transform ${
          menu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <Link
          to="/about"
          onClick={closeMenu}
          className="hover:text-[#98dad9] transition-all cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/projects"
          onClick={closeMenu}
          className="hover:text-[#98dad9] transition-all cursor-pointer"
        >
          Service
        </Link>
        <Link
          to="/skills"
          onClick={closeMenu}
          className="hover:text-[#98dad9] transition-all cursor-pointer"
        >
          Favourite
        </Link>
        <Link
          to="/blogs"
          onClick={closeMenu}
          className="hover:text-[#98dad9] transition-all cursor-pointer"
        >
          Favourite
        </Link>
        <Link
          to="/certification"
          onClick={closeMenu}
          className="hover:text-[#98dad9] transition-all cursor-pointer"
        >
          Profile
        </Link>
        {/* Contact Button */}
        <div className="flex space-x-4">
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
      </div>
    </div>
  );
};

export default Navbar;
