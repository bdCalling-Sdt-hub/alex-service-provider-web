import { FaEllipsisV, FaPlus } from "react-icons/fa";
import CustomComponent from "../../shared/CustomComponent";
import ProfileBackButton from "../../../src/components/profile/ProfileBackButton";
import { useNavigate } from "react-router-dom";

function Mylisting() {
  const navigate = useNavigate();
  return (
    <CustomComponent>
      <div className="text-[#0d0d0d] w-full  md:w-[400px] lg:w-[400px] px-5 mx-auto my-5 md:my-16">
        {/* Header */}
        <ProfileBackButton title="My Listing" />

        {/* Listing Card */}
        <div className="p-4">
          <div className="relative flex items-center gap-4 p-4 bg-white border border-gray-200 shadow-md rounded-lg">
            <img
              src="/about.png"
              alt="Elderly care service"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h2 className="font-medium text-gray-900">Elderly Care</h2>
              <p className="text-blue-500 font-medium">$10.00/hr</p>
              <p className="text-gray-500 text-sm">Client protection Free</p>
            </div>
            <button className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 p-2 rounded-lg">
              <FaEllipsisV className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="flex justify-end">
          <button
            onClick={() => navigate("/palliativeCareFilter")}
            className="h-14 w-14 flex items-center justify-center rounded-lg bg-[#0084BF] shadow-lg mt-10"
          >
            <FaPlus className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </CustomComponent>
  );
}

export default Mylisting;
