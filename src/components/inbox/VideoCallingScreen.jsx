import { FaMicrophone, FaPhone, FaVideoSlash } from "react-icons/fa";
import CustomComponent from "../../../pages/shared/CustomComponent";
import { AiFillSound } from "react-icons/ai";

const VideoCallingScreen = () => {
  return (
    <CustomComponent>
      <div className="relative w-full md:w-[400px] lg:w-[400px] h-[500px] mx-auto mb-5 md:mb-16">
        {/* Main Video */}
        <img
          src="/video.png"
          alt="Main Caller"
          className="h-full w-full object-cover"
        />

        {/* Call Info */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-2xl font-semibold text-[#00BFB3]">Ms. Jan</h1>
          <p className="text-xl text-white/90">9:30</p>
        </div>

        {/* Mini Video */}
        <div className="absolute bottom-24 right-10 w-24 h-32 bg-gray-700 rounded-lg overflow-hidden">
          <img
            src="/video.png"
            alt="Mini Caller"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Call Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-6">
          <button
            className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500"
            onClick={() => navigate("/videoCallingScreen")}
          >
            <FaPhone className="w-5 h-5 text-white" />
          </button>
          <button
            className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-500"
            onClick={() => navigate("/videoCallingScreen")}
          >
            <FaVideoSlash className="w-5 h-5 text-white" />
          </button>
          <button
            className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-500"
            onClick={() => navigate("/videoCallingScreen")}
          >
            <FaMicrophone className="w-5 h-5 text-white" />
          </button>
          <button
            className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-500"
            onClick={() => navigate("/videoCallingScreen")}
          >
            <AiFillSound className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </CustomComponent>
  );
};

export default VideoCallingScreen;
