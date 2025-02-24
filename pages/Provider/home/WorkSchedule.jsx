/* eslint-disable react/prop-types */
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import CustomComponent from "../../shared/CustomComponent";
import ProfileBackButton from "../../../src/components/profile/ProfileBackButton";

function Switch({ checked, onChange }) {
  return (
    <button
      className={`w-12 h-6 flex items-center bg-gray-700 rounded-full p-1 transition duration-300 ease-in-out ${
        checked ? "bg-blue-500" : "bg-gray-700"
      }`}
      onClick={onChange}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
          checked ? "translate-x-6" : ""
        }`}
      />
    </button>
  );
}

export default function WorkSchedule() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [availability, setAvailability] = useState(
    Object.fromEntries(days.map((day) => [day, false]))
  );

  const toggleAvailability = (day) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  return (
    <CustomComponent>
      <div className="w-full md:w-[400px] lg:w-[400px] mx-auto my-5 md:my-16 text-[#0d0d0d] px-5">
        {/* <div className="w-full max-w-md"> */}
        <ProfileBackButton />
        <div className="mb-5">
          <h1 className="text-2xl font-semibold text-[#1C3E64] mb-2">
            Work Schedule
          </h1>
          <p className="text-gray-400">
            When are you available to offer your services?
          </p>
          {/* </div> */}

          {/* Schedule List */}
          <div className="space-y-5 p-4 rounded-lg shadow-lg">
            {days.map((day) => (
              <div
                key={day}
                className="flex items-center justify-between p-2 border-b border-gray-800 last:border-b-0"
              >
                <span className="text-[#0D0D0D] font-medium">{day}</span>
                <div className="flex items-center gap-3">
                  <Switch
                    checked={availability[day]}
                    onChange={() => toggleAvailability(day)}
                  />
                  <span className="text-gray-500 text-sm">
                    {availability[day] ? "Available" : "Not available"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CustomComponent>
  );
}
