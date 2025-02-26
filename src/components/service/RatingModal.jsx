import { Input, Modal, Rate, Tag } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";

const tags = [
  "Overall Service",
  "Customer Support",
  "Speed and Efficiency",
  "Repair Quality",
];

export default function RatingModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [feedback, setFeedback] = useState("");

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width={400}
      className="rounded-lg shadow-lg"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-gray-800">
          Rate Your Experience
        </h2>
      </div>

      {/* Rating */}
      <p className="text-gray-600">Are you satisfied with the service?</p>
      <div className="flex justify-center my-2">
        <Rate allowHalf value={rating} onChange={setRating} />
      </div>

      {/* Improvement Tags */}
      <p className="text-gray-700 mt-3">Tell us what can be improved?</p>
      <div className="flex flex-wrap gap-2 my-2">
        {tags.map((tag) => (
          <Tag
            key={tag}
            className={`cursor-pointer ${
              selectedTags.includes(tag)
                ? "bg-teal-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Tag>
        ))}
      </div>

      {/* Feedback Input */}
      <Input.TextArea
        rows={3}
        placeholder="Write your feedback..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="mt-4"
      />

      {/* Submit Button */}
      <div className="flex justify-center mt-4">
        <button
          type="primary"
          className="text-white bg-[#00C0B5] hover:bg-teal-600 px-4 py-3 rounded-lg w-1/2"
          onClick={() => {
            console.log("Feedback Submitted:", {
              rating,
              selectedTags,
              feedback,
            });
            onClose();
          }}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
}

RatingModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
