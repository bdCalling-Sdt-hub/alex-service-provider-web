"use client";

import { FaPhone, FaPhoneSlash } from "react-icons/fa";
import CustomComponent from "../../../pages/shared/CustomComponent";
import { useNavigate } from "react-router-dom";

export default function VideoCallScreen() {
  const navigate = useNavigate();
  return (
    <CustomComponent>
      <div className="flex items-center justify-center py-16">
        <div className="relative h-[650px] w-[400px]  mx-auto bg-black ">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('/video.png')`,
              backgroundPosition: "center 20%",
            }}
          ></div>

          {/* Call Interface */}
          <div className="relative h-full flex flex-col items-center justify-between py-20 px-6">
            {/* Caller Info */}
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-semibold text-[#00BFB3]">Ms. Jan</h1>
              <p className="text-xl text-white/90">09127468125</p>
            </div>

            {/* Call Actions */}
            <div className="flex items-center justify-center gap-20">
              {/* Decline Call Button */}
              <button
                onClick={() => navigate("/videoCallingScreen")}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition-colors"
              >
                <FaPhoneSlash className="w-8 h-8 text-white rotate-135" />
              </button>

              {/* Accept Call Button */}
              <button
                className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                onClick={() => navigate("/videoCallingScreen")}
              >
                <FaPhone className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </CustomComponent>
  );
}
