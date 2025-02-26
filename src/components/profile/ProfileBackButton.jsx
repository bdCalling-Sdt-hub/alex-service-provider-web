import PropTypes from "prop-types";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function ProfileBackButton({ title = "" }) {
  const navigate = useNavigate();
  return (
    <button className="flex items-center font-bold text-xl text-[#0D0D0D] mb-4 gap-5">
      <AiOutlineArrowLeft
        onClick={() => navigate(-1)}
        className="w-6 h-6 mr-2 cursor-pointer text-[#0D0D0D] font-bold"
      />
      <span className="text-2xl font-bold text-[#0D0D0D]">{title} </span>
    </button>
  );
}

ProfileBackButton.propTypes = {
  title: PropTypes.string,
};
