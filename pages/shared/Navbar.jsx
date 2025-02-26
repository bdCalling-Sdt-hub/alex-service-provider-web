/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Navbar = ({ userType }) => {
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

  const providerLinks = [
    { name: "Home", path: "/providerHome" },
    { name: "Calender", path: "/calender" },
    { name: "Notification", path: "/inbox" },
    { name: "Request", path: "/providerRequest" },
    { name: "Inbox", path: "/inbox" },
    { name: "Profile", path: "/providerProfile" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 w-full bg-white text-[#0D0D0D] px-5 md:px-20 lg:px-24 py-5 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold hover:text-[#00BFB3]">
          iBadi
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center text-lg font-medium gap-8">
          {(userType === "user" ? navLinks : providerLinks).map(
            ({ name, path }) => (
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
            )
          )}
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
            onClick={() => setIsProfileModalOpen(true)}
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
        {(userType === "user" ? navLinks : providerLinks).map(
          ({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setMenu(false)}
              className="hover:text-[#98dad9] transition-all cursor-pointer text-2xl"
            >
              {name}
            </Link>
          )
        )}

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
              <span
                onClick={() => {
                  navigate("/profile/terms");
                  setIsModalOpen(false);
                }}
                className="text-[#00C0B5]"
              >
                Terms and Conditions
              </span>
              and confirm that I have read the{" "}
              <span
                onClick={() => {
                  navigate("/profile/privacy");
                  setIsModalOpen(false);
                }}
                className="text-[#00C0B5]"
              >
                Profile Privacy
              </span>
            </p>
          </div>
        </div>
      </Modal>
      <Modal open={isProfileModalOpen} centered footer={null} closable={false}>
        <div className="w-full max-w-md mx-auto  rounded-lg">
          <div>
            {/* Header */}
            <div className="flex items-end justify-end mb-5">
              <button
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200"
                onClick={() => setIsProfileModalOpen(false)}
              >
                X<span className="sr-only">Close</span>
              </button>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-md text-center">
              <h1 className="text-3xl font-bold text-[#1C3E64] mb-2">
                What will you do on iBadi?
              </h1>
              <p className="text-sm text-gray-600 mb-6">
                This decision is not final. You can later be both a client and a
                professional from the account if you wish.
              </p>

              {/* Cards */}
              <div className="space-y-6">
                {/* Book Service Card */}
                <div
                  onClick={() => {
                    setIsModalOpen2(true);
                    setIsProfileModalOpen(false);
                  }}
                  className="bg-[#f2f2f2] rounded-xl flex justify-between items-center p-3"
                >
                  <img
                    src="/create/create1.png"
                    alt="Client booking a service"
                    className="object-cover"
                  />

                  <div className="p-4 text-center">
                    <h2 className="text-lg font-semibold text-[#1C3E64]">
                      Book a service
                    </h2>
                    <p className="text-sm text-gray-600">(I am a Client)</p>
                  </div>
                </div>

                {/* Offer Services Card */}
                <div
                  onClick={() => {
                    setIsModalOpen2(true);
                    setIsProfileModalOpen(false);
                  }}
                  className="bg-[#f2f2f2] rounded-xl flex justify-between items-center p-3"
                >
                  <img
                    src="/create/create2.png"
                    alt="Professional offering services"
                    className="object-cover"
                  />
                  <div className="p-4 text-center">
                    <h2 className="text-lg font-semibold text-[#1C3E64]">
                      Offer Services
                    </h2>
                    <p className="text-sm text-gray-600">
                      (I am a Professional)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal open={isModalOpen2} centered footer={null} closable={false}>
        <div className="w-full max-w-md mx-auto bg-white  rounded-lg p-6">
          <div className="space-y-1 relative pb-2">
            <div className="flex items-center justify-between mb-5">
              <h1 className="text-2xl font-bold text-[#1C3E64]">
                Create Account
              </h1>
              <button
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200"
                onClick={() => setIsModalOpen2(false)}
              >
                X<span className="sr-only">Close</span>
              </button>
            </div>
          </div>

          <div className="w-full max-w-md">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full h-12 px-4 border rounded-lg outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 px-4 border rounded-lg outline-none"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full h-12 px-4 pr-10 border rounded-lg outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <FiEye className="h-5 w-5" />
                  ) : (
                    <FiEyeOff className="h-5 w-5" />
                  )}
                </button>
              </div>
              <button className="w-full h-12 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium">
                Create Account
              </button>
            </div>

            <div className="text-center text-sm text-gray-500 mt-6">
              <p>
                Already have an account?{" "}
                <span
                  className="text-[#00C0B5]"
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsModalOpen2(false);
                  }}
                >
                  {" "}
                  Log In
                </span>
              </p>
              <p className="mt-4">
                By creating an account, I accept the
                <span
                  onClick={() => {
                    navigate("/profile/terms");
                    setIsModalOpen2(false)
                  }}
                  className="text-[#00C0B5]"
                >
                  Terms and Conditions
                </span>
                and confirm that I have read the
                <span
                  onClick={() =>{
                    navigate("/profile/privacy");
                    setIsModalOpen2(false);
                  }}
                  className="text-[#00C0B5]"
                >
                  Profile Privacy
                </span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default Navbar;
