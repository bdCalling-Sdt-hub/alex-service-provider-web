import PropTypes from "prop-types";
import { useState } from "react";
import { FaCalendarAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import cleanerImg from "../../assets/cleaner.jpg";
import RatingModal from "./RatingModal";
// import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { SlCallOut } from "react-icons/sl";
import { RiMessage2Line } from "react-icons/ri";
// import { SlCallOut } from "react-icons/sl";
// import { RiMessage2Line } from "react-icons/ri";

export default function ServiceCard({ title, time, date, image, type }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full md:w-[400px] lg:w-[400px] mx-auto my-5 md:my-16 h-[150px] bg-white rounded-2xl shadow-lg p-4 flex items-center">
        <img
          onClick={() => {
            navigate("/ProfessionalProfile");
          }}
          src={image ? image : cleanerImg}
          alt={title}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="ml-4 flex-grow">
          <h3 className="text-lg font-semibold text-[#00C0B5] ">{title}</h3>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <FaClock className="w-4 h-4 mr-2 text-gray-500" />
            {time}
          </div>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <FaCalendarAlt className="w-4 h-4 mr-2 text-gray-500" />
            {date}
          </div>
          <div className="mt-2">
            {type === "upcoming" && (
              <span className="text-xs text-[#00C0B5] bg-[#D9FFFD] py-1 px-3 rounded-md">
                Pending acceptance
              </span>
            )}
            {type === "past" && (
              <div className="flex gap-2">
                <button
                  size="small"
                  className="text-xs text-teal-400 hover:text-teal-500 bg-teal-100 hover:bg-teal-200 py-1 px-3 rounded-md cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  Rating
                </button>
                <button
                  onClick={() => {
                    setIsModalOpen2(true);
                  }}
                  className="flex items-center text-xs text-blue-600 bg-blue-100 py-1 px-3 rounded-md"
                >
                  <FaPhoneAlt className="w-4 h-4 mr-1" /> Need Support
                  Immediately
                </button>
              </div>
            )}
            {type === "cancelled" && (
              <span className="text-xs text-red-600 bg-red-100 py-1 px-3 rounded-md">
                Cancel
              </span>
            )}
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen2}
        onCancel={() => {
          setIsModalOpen2(false);
        }}
        footer={null}
        centered
        width={400}
        className="rounded-lg shadow-lg"
      >
        <div className="mt-6 space-y-4">
          <div className="flex justify-center items-center">
            <img src="/chat.png" alt="" className="w-20 h-20" />
          </div>
          <button
            onClick={() => {
              setIsModalOpen2(true);
              navigate("/callScreen");
            }}
            className="w-full bg-[#00C0B5] text-white rounded-lg px-4 py-3 flex items-center justify-center gap-2 mt-5"
          >
            <SlCallOut />
            <p> Call</p>
          </button>
          <button
            onClick={() => {
              setIsModalOpen2(true);
              navigate("/chat");
            }}
            className="w-full bg-[#00C0B5] text-white rounded-lg px-4 py-3 flex items-center justify-center gap-2 mt-2"
          >
            <RiMessage2Line />
            <p> Message</p>
          </button>
        </div>
      </Modal>

      {/* Rating Modal - Opens when "Rating" is clicked */}
      <RatingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string,
  type: PropTypes.oneOf(["upcoming", "past", "cancelled"]).isRequired,
};
