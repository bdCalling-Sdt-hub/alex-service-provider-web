import PropTypes from "prop-types";
import { useState } from "react";
import { FaCalendarAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import cleanerImg from "/about.png";

export default function RequestServiceCard({ title, time, date, image, type }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full md:w-[400px] lg:w-[400px] mx-auto my-5 md:my-16 h-[150px] bg-white rounded-2xl shadow-lg p-4 flex items-center">
        <img
          src={image ? image : cleanerImg}
          alt={title}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="ml-4 flex-grow">
          <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <FaClock className="w-4 h-4 mr-2 text-gray-500" />
            {time}
          </div>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <FaCalendarAlt className="w-4 h-4 mr-2 text-gray-500" />
            {date}
          </div>
          <div className="mt-2">
            {type === "Request" && (
              <span className="text-xs text-black bg-red-400 py-1 px-3 rounded-md">
                Cancle
              </span>
            )}
          
          </div>
        </div>
      </div>
    </>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string,
  type: PropTypes.oneOf(["upcoming", "past", "cancelled"]).isRequired,
};
