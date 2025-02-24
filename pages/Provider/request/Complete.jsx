import PropTypes from "prop-types";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import cleanerImg from "/about.png";
import ProfileBackButton from "../../../src/components/profile/ProfileBackButton";
import CustomComponent from "../../shared/CustomComponent";
import { useNavigate } from "react-router-dom";

function Complete() {
    const navigate = useNavigate();
  return (
    <CustomComponent>
      <div
      onClick={() => navigate("/bookingDetails")}
      className="w-full md:w-[400px] lg:w-[400px] mx-auto my-5 md:my-16">
        <ProfileBackButton title="Complete" />
        <div className="w-full md:w-[400px] lg:w-[400px] mx-auto my-5 h-[150px] bg-white rounded-2xl shadow-lg p-4 flex items-center mt-5">
          <img
            src={cleanerImg}
            alt="Elderly care"
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div className="ml-4 flex-grow">
            <h3 className="text-lg font-semibold text-blue-600">
              Elderly care
            </h3>
            <div className="flex items-center text-gray-600 text-sm mt-1">
              <FaClock className="w-4 h-4 mr-2 text-gray-500" />
              $10.00 hrs
            </div>
            <div className="flex items-center text-gray-600 text-sm mt-1">
              <FaCalendarAlt className="w-4 h-4 mr-2 text-gray-500" />
              Monday, 1 Feb.2025
            </div>
            <div className="mt-2">
              <span className="text-xs text-[#0084BF] bg-[#C9EAF9] py-1 px-3 rounded-md">
                Complete
              </span>
            </div>
          </div>
        </div>
      </div>
    </CustomComponent>
  );
}

export default Complete;

Complete.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string,
  type: PropTypes.oneOf(["request", "ongoing", "cancelled"]).isRequired,
};
