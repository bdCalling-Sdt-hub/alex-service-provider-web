/* eslint-disable react/prop-types */
import { useState } from "react";
import CustomComponent from "../../../pages/shared/CustomComponent";
import { FaArrowsRotate } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function TimeSlot({ day, onDelete }) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-cyan-50 rounded-md w-full border border-gray-300 shadow-md mt-2">
      <span className="font-medium text-gray-700">{day}</span>
      <span className="text-gray-600">14:15 - 15:15</span>
      <button
        onClick={onDelete}
        className="h-8 w-8 flex items-center justify-center text-gray-500"
      >
        <RiDeleteBin6Line className="h-4 w-4" />
        <span className="sr-only">Delete time slot</span>
      </button>
    </div>
  );
}

function WeeklyBookingTime() {
  const [timeSlots, setTimeSlots] = useState({});
  const navigate = useNavigate();

  const days = [
    { name: "Monday", available: true },
    { name: "Tuesday", available: true },
    { name: "Wednesday", available: true },
    { name: "Thursday", available: true },
    { name: "Friday", available: true },
    { name: "Saturday", available: true },
    { name: "Sunday", available: false },
  ];

  const handleDaySelect = (day) => {
    setTimeSlots((prev) => ({ ...prev, [day]: true }));
  };

  const handleDelete = (day) => {
    setTimeSlots((prev) => {
      const updatedSlots = { ...prev };
      delete updatedSlots[day];
      return updatedSlots;
    });
  };

  return (
    <CustomComponent>
      <div className="w-full md:w-[400px] lg:w-[400px] mx-auto my-5 md:my-16 text-gray-400 px-5">
        <div className="flex flex-1 justify-end">
          <div className="flex justify-between items-center mb-4 gap-5">
            <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-md text-[#0D0D0D] gap-2">
              <FaArrowsRotate className="w-5 h-5 text-[#00C0B5]" />
              <p>Weekly</p>
              <IoIosArrowDown className="w-5 h-5" />
            </div>
            <div className="bg-white p-3 rounded-lg shadow-md text-[#0D0D0D]">
              <RxCross1 className="w-5 h-5 text-[#0d0d0d]" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {days.map((day) =>
            timeSlots[day.name] ? (
              <TimeSlot
                key={day.name}
                day={day.name}
                onDelete={() => handleDelete(day.name)}
              />
            ) : (
              <div
                key={day.name}
                className="border border-gray-400 px-2 py-3 rounded-md flex items-center justify-between"
              >
                <span className="text-gray-700 font-medium">{day.name}</span>
                {day.available && (
                  <button
                    onClick={() => handleDaySelect(day.name)}
                    className="text-blue-500 font-medium"
                  >
                    <FaPlus className="h-4 w-4 text-gray-400" />
                  </button>
                )}
              </div>
            )
          )}
        </div>
        <div className="mt-5 w-full">
          <button
            onClick={() => navigate("/daywiseTimeSet")}
            className="bg-[#6A6D76] text-white py-3 rounded-lg w-full"
          >
            Set up at least one day
          </button>
        </div>
      </div>
    </CustomComponent>
  );
}

export default WeeklyBookingTime;
