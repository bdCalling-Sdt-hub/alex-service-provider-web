import {
  FaChevronRight,
  FaCreditCard,
  FaFileAlt,
  FaGlobe,
  FaInfoCircle,
  FaLock,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomComponent from "../../shared/CustomComponent";

export default function ProviderProfile() {
  const settings = [
    { icon: <FaUser />, label: "Personal details", path: "/profile/details" },
    {
      icon: <FaMapMarkerAlt />,
      label: "My Balance",
      path: "/myBalance",
    },
    {
      icon: <FaCreditCard />,
      label: "My Listing",
      path: "/mylisting",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Booking Preference",
      path: "/bookingFreference",
    },
    {
      icon: <FaCreditCard />,
      label: "My Review",
      path: "/reviews",
    },
    { icon: <FaLock />, label: "Change password", path: "/profile/password" },
    { icon: <FaGlobe />, label: "Language", path: "/profile/language" },
    { icon: <FaInfoCircle />, label: "About Us", path: "/profile/about" },
    {
      icon: <FaFileAlt />,
      label: "Terms and conditions",
      path: "/profile/terms",
    },
    {
      icon: <FaShieldAlt />,
      label: "Privacy policy",
      path: "/profile/privacy",
    },
  ];

  return (
    <CustomComponent>
      <div className="w-full  md:w-[400px] lg:w-[400px] px-5 mx-auto my-5 md:my-16">
        {/* Profile Header */}
        <div className="flex items-center space-x-3">
          <img
            src="https://avatar.iran.liara.run/public/32"
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <h2 className="text-xl font-bold text-gray-800">Mr. Raju</h2>
        </div>

        {/* Upgrade Button */}
        <button className="w-full flex items-center justify-between mt-4 px-4 py-3 bg-white rounded-lg shadow text-gray-800 font-medium border border-gray-200">
          <span className="flex items-center text-[#00C0B5]">
            <FaUser className="mr-2" /> Switch to professional version
          </span>
          <FaChevronRight className="text-gray-400" />
        </button>

        {/* Account Settings */}
        <h3 className="mt-6 mb-2 text-gray-500 font-medium">
          Account Settings
        </h3>
        <div className="">
          {settings.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="flex justify-between items-center px-4 py-3 border-b-[3px] border-[#6A6D76] last:border-none hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex items-center space-x-3 text-gray-700">
                <span className="text-[#00C0B5] text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <FaChevronRight className="text-[#0D0D0D]" />
            </Link>
          ))}
        </div>
      </div>
    </CustomComponent>
  );
}
