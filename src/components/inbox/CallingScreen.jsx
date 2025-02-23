import {
  FaMicrophone,
  FaVideo,
  FaVolumeUp,
  FaPhoneSlash,
} from "react-icons/fa";
import CustomComponent from "../../../pages/shared/CustomComponent";

export default function CallingScreen() {
  return (
    <CustomComponent>
      <div className="flex w-[400px] h-[500px] mx-auto  items-center justify-center py-16">
        <div className="flex  flex-col items-center gap-5">
          <p>0:54</p>
          <div className="relative text-center">
            <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-teal-500">
              <img
                src="https://avatar.iran.liara.run/public/45"
                alt="Profile picture"
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="mt-4 text-xl font-medium text-[#00C0B5]">
              Mr. Raju
            </h2>
            <p className="text-sm text-[#6A6D76]">09127468125</p>
          </div>
          <div className="mt-auto flex w-full items-center justify-around">
            <button className="flex flex-col items-center gap-1 p-4 text-gray-400 transition-colors hover:text-white">
              <FaMicrophone className="h-6 w-6 text-[#00C0B5]" />
              <span className="text-xs">Mute</span>
            </button>
            <button className="flex flex-col items-center gap-1 p-4 text-gray-400 transition-colors hover:text-white">
              <FaVolumeUp className="h-6 w-6 text-[#00C0B5]" />
              <span className="text-xs">Speaker</span>
            </button>
            <button className="flex flex-col items-center gap-1 p-4 text-gray-400 transition-colors hover:text-white">
              <FaVideo className="h-6 w-6  text-[#00C0B5]" />
              <span className="text-xs">Video call</span>
            </button>
          </div>
          <button className="mb-5 rounded-full bg-red-500 p-4 text-white transition-transform hover:scale-110">
            <FaPhoneSlash className="h-6 w-6" />
          </button>
        </div>
      </div>
    </CustomComponent>
  );
}
