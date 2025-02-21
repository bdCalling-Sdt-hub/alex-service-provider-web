import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import ProfileBackButton from "../../src/components/profile/ProfileBackButton";
import CustomComponent from "../shared/CustomComponent";

export default function PasswordChange() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <CustomComponent>
      <div className="w-[400px] mx-auto p-6">
        {/* Back Button */}
        <ProfileBackButton title="Change password" />

        {/* Old Password Input */}
        <label className="block text-lg font-medium text-gray-800 mb-1">
          Old password
        </label>
        <div className="relative w-full mb-4">
          <input
            type={showOldPassword ? "text" : "password"}
            className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-800 focus:ring-2 focus:ring-[#00C0B5] outline-none"
            placeholder="Password"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-4 flex items-center text-gray-500"
            onClick={() => setShowOldPassword(!showOldPassword)}
          >
            {showOldPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>

        {/* New Password Input */}
        <label className="block text-lg font-medium text-gray-800 mb-1">
          New password
        </label>
        <div className="relative w-full mb-4">
          <input
            type={showNewPassword ? "text" : "password"}
            className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-800 focus:ring-2 focus:ring-[#00C0B5] outline-none"
            placeholder="Password"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-4 flex items-center text-gray-500"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>

        {/* Confirm Password Input */}
        <label className="block text-lg font-medium text-gray-800 mb-1">
          Confirm password
        </label>
        <div className="relative w-full mb-6">
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-800 focus:ring-2 focus:ring-[#00C0B5] outline-none"
            placeholder="Password"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-4 flex items-center text-gray-500"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>

        {/* Change Password Button */}
        <button className="w-full bg-[#00C0B5] text-white text-lg font-semibold py-3 rounded-lg hover:bg-[#009a95] transition">
          Change password
        </button>
      </div>
    </CustomComponent>
  );
}
