import { Modal } from "antd";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/service" },
    { name: "Favourite", path: "/favourite" },
    { name: "Inbox", path: "/inbox" },
    { name: "Profile", path: "/profile" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

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
              className={`${
                location.pathname === path
                  ? "text-[#00BFB3] font-bold"
                  : "hover:text-[#00BFB3]"
              } transition-all cursor-pointer`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Authentication Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link
            className="border border-[#00BFB3] text-black py-2 px-4 rounded-lg hover:bg-[#00BFB3] hover:text-white transition"
            onClick={() => {
              setMenu(false);
              setIsModalOpen(true);
            }}
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
          className="border border-[#00BFB3] text-white py-2 px-4 rounded-lg hover:bg-[#00BFB3] hover:text-white transition"
          onClick={() => {
            setMenu(false);
            setIsModalOpen(true);
          }}
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
      <Modal open={isModalOpen} centered footer={null} closable={false}>
        <div className="w-full max-w-md mx-auto bg-white  rounded-lg p-6">
          <div className="space-y-1 relative pb-2">
            <div className="flex items-center justify-between mb-5">
              <h1 className="text-2xl font-bold text-[#1C3E64]">Log in</h1>
              <button
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200"
                onClick={() => setIsModalOpen(false)}
              >
                X<span className="sr-only">Close</span>
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg hover:bg-black/90">
              <FaApple className="h-4 w-4" /> Continue with Apple
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-[#1877F2] text-white py-2 rounded-lg hover:bg-[#1877F2]/90">
              <FaFacebook className="h-4 w-4" /> Continue with Facebook
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg">
              <FaGoogle className="h-4 w-4 text-red-500" /> Continue with Google
            </button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-2 text-gray-500">or</span>
              </div>
            </div>
            <button
              onClick={() => {
                setIsModalOpen(false);
                navigate("/homeSlider");
              }}
              className="w-full border border-gray-300 py-2 rounded-lg"
            >
              Log in with email
            </button>
            <p className="text-center text-sm text-[#0D0D0D]">
              By creating an account, I accept the{" "}
              <button className="text-blue-500 hover:underline">
                Terms and Conditions
              </button>{" "}
              and confirm that I have read the{" "}
              <Link to="/" className="text-blue-500 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default Navbar;
