import { Modal } from "antd";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaHeart,
  FaStar,
  FaSyncAlt,
} from "react-icons/fa";

export default function FavouritesCard() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [comment, setComment] = useState("");

  const tags = [
    "Overall Service",
    "Customer Support",
    "Speed and Efficiency",
    "Repair Quality",
  ];

  const handleRating = (index) => setRating(index);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="w-full md:w-[400px] lg:w-[400px] p-5  mx-auto my-5 md:my-16 bg-white rounded-2xl shadow-lg flex flex-col">
      {/* Profile Image */}
      <div className="flex">
        <div className="relative">
          <img
            src="https://avatar.iran.liara.run/public/18"
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
          <div
            onClick={() => setIsDeleteModalOpen(true)}
            className="flex items-center text-gray-600 text-sm"
          >
            <FaStar className="text-yellow-500 mr-1" /> 5.0
            <span className="ml-1 text-gray-500">(1) | 2 Service</span>
          </div>
          <Modal
            open={isDeleteModalOpen}
            onCancel={() => setIsDeleteModalOpen(false)}
            footer={null}
            centered
            width={400}
            className="rounded-xl shadow-lg"
            title="Rate Your Experience"
          >
            <div className="mx-auto p-5 bg-white">
              <p className="text-gray-500 text-sm">
                Are you satisfied with the service?
              </p>

              {/* Star Rating */}
              <div className="flex justify-center my-3">
                {[1, 2, 3, 4, 5].map((index) => (
                  <button key={index} onClick={() => handleRating(index)}>
                    {index <= rating ? (
                      <AiFillStar className="text-teal-500 text-2xl mx-1" />
                    ) : (
                      <AiOutlineStar className="text-teal-500 text-2xl mx-1" />
                    )}
                  </button>
                ))}
              </div>

              {/* Improvement Tags */}
              <p className="text-gray-500 text-sm mb-2">
                Tell us what can be improved?
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedTags.includes(tag)
                        ? "bg-teal-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Comment Box */}
              <textarea
                className="w-full mt-3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                rows="3"
                placeholder="Write your feedback..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              {/* Submit Button */}
              <button className="w-full mt-4 bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600">
                Submit
              </button>
            </div>
          </Modal>
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
