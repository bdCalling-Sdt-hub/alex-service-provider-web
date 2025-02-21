import { useState } from "react";
import ProfileBackButton from "../../src/components/profile/ProfileBackButton";
import CustomComponent from "../shared/CustomComponent";

export default function Language() {
  const [language, setLanguage] = useState("English");

  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Arabic",
  ];

  return (
    <CustomComponent>
      <div className="w-[400px] mx-auto p-16">
        {/* Back Button */}
        <ProfileBackButton title="Language" />

        {/* Language Dropdown */}
        <div className="relative w-full">
          <select
            className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-800 appearance-none bg-white focus:ring-2 focus:ring-[#00C0B5] outline-none cursor-pointer"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
            ▼
          </div>
        </div>

        {/* Save Button */}
        <button className="w-full bg-[#00C0B5] text-white cursor-pointer text-lg font-semibold py-3 mt-6 rounded-lg hover:bg-[#009a95] transition">
          Save
        </button>
      </div>
    </CustomComponent>
  );
}
