import PropTypes from "prop-types";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function ProfileBackButton({ title = "" }) {
  const navigate = useNavigate();
  return (
    <button className="flex items-center font-bold text-lg text-gray-800 mb-4">
      <AiOutlineArrowLeft
        onClick={() => navigate(-1)}
        className="w-5 h-5 mr-2 cursor-pointer"
      />
      <span>{title}</span>
    </button>
  );
}

ProfileBackButton.propTypes = {
  title: PropTypes.string,
};
