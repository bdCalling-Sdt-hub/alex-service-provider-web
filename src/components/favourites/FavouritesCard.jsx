import {
  FaCalendarAlt,
  FaCheckCircle,
  FaHeart,
  FaStar,
  FaSyncAlt,
} from "react-icons/fa";

export default function FavouritesCard() {
  return (
    <div className="w-[400px] bg-white rounded-2xl shadow-lg p-4 flex flex-col">
      {/* Profile Image */}
      <div className="flex">
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <span className="absolute top-10 -right-1 bg-white opacity-75 p-1 rounded-full shadow">
            <FaHeart className="text-red-500 z-10 opacity-100" />
          </span>
        </div>

        {/* Profile Details */}
        <div className="ml-4 flex-grow">
          <div className="flex items-center">
            <h3 className="text-lg font-semibold text-blue-600">NB Sujon</h3>
            <FaCheckCircle className="text-blue-500 ml-1" />
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <FaStar className="text-yellow-500 mr-1" /> 5.0
            <span className="ml-1 text-gray-500">(1) | 2 Service</span>
          </div>
        </div>

        {/* Pricing */}
        <span className="text-xl font-semibold text-blue-600">$10/h</span>
      </div>

      {/* Tags */}
      <div className="flex space-x-2 mt-4">
        <span className="flex items-center text-xs text-[#00C0B5] bg-[#D9FFFD] py-1 px-2 rounded-md">
          <FaSyncAlt className="mr-1" /> 1 has repeated
        </span>
        <span className="flex items-center text-xs text-[#00C0B5] bg-[#D9FFFD] py-1 px-2 rounded-md">
          <FaCalendarAlt className="mr-1" /> Updated Schedule
        </span>
      </div>
    </div>
  );
}
