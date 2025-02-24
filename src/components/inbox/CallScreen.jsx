import { FiPhone } from "react-icons/fi";
import CustomComponent from "../../../pages/shared/CustomComponent";
import { useNavigate } from "react-router-dom";

export default function CallScreen() {
    const navigate = useNavigate();
  return (
    <CustomComponent>
      <div className="w-full md:w-[400px] lg:w-[400px] px-5 my-5 md:my-16 h-[500px] mx-auto flex flex-col items-center justify-around md:justify-between">
        {/* Profile Section */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-teal-500">
              <img
                src="https://avatar.iran.liara.run/public/45"
                alt="Mr. Raju"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-2xl font-semibold text-teal-500">Mr. Raju</h1>
          <p className="text-gray-400">09127468125</p>
        </div>

        {/* Call Actions */}
        <div className="w-full flex justify-center gap-16 pb-12">
          <button
          onClick={() => navigate("/callingScreen")}
            className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            aria-label="Decline call"
          >
            <FiPhone className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => navigate("/callingScreen")}
            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
            aria-label="Accept call"
          >
            <FiPhone className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </CustomComponent>
  );
}
