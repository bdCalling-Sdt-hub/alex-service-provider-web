import CustomComponent from "../../../pages/shared/CustomComponent";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { GiArcheryTarget } from "react-icons/gi";

function SingleDayBooking() {
  const [selectedDate, setSelectedDate] = useState("15");
  const [selectedTime, setSelectedTime] = useState("16:30");
  const [duration, ] = useState(2);
  const [price, setPrice] = useState(50);

  const dates = [
    { day: "Mon", date: "13" },
    { day: "Tue", date: "14" },
    { day: "Wed", date: "15" },
    { day: "Thu", date: "16" },
    { day: "Fri", date: "17" },
    { day: "Sat", date: "18" },
  ];

  const timeSlots = [
    ["06:00", "12:00", "18:00"],
    ["07:00", "13:00", "19:00"],
    ["08:00", "14:00", "20:00"],
    ["09:00", "15:00", "21:00"],
    ["10:00", "16:30", "22:00"],
    ["11:00", "17:00", "23:00"],
  ];
  return (
    <CustomComponent>
      <div className="w-full md:w-[400px] lg:w-[400px] mx-auto my-5 md:my-16 text-gray-400 px-5">
        <div className="flex flex-1 justify-end">
          <div className="flex justify-between items-center mb-4 gap-5">
            <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-md text-[#0D0D0D] gap-2">
              <GiArcheryTarget className="w-5 h-5 text-yellow-400" />
              <p>Just once</p>
              <IoIosArrowDown className="w-5 h-5" />
            </div>
            <div className="bg-white p-3 rounded-lg shadow-md text-[#0D0D0D]">
              <RxCross1 className="w-5 h-5 text-[#0d0d0d]" />
            </div>
          </div>
        </div>
        {/* <div className=""> */}
        {/* Duration Selection */}
        <div className="my-5">
          <label className="text-gray-800 font-semibold text-sm">
            Duration
            <span className="text-[#00C0B5] font-bold ml-2">2h</span>
          </label>
          <div className="relative w-full mt-2">
            <input
              type="range"
              min="0"
              max="100"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer"
              style={{
                WebkitAppearance: "none",
                background: `linear-gradient(to right, #00C0B5 ${price}%, #ccc ${price}%)`,
              }}
            />
          </div>
        </div>

        {/* Calendar */}
        <div className="space-y-2 mt-5">
          <div className="flex items-center justify-between">
            <button className="text-gray-400">
              <FaChevronLeft />
            </button>
            <h2 className="text-lg font-semibold">January</h2>
            <button className="text-gray-400">
              <FaChevronRight />
            </button>
          </div>
          <div className="flex gap-2 mt-2">
            {dates.map(({ day, date }) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg transition-colors
                ${
                  selectedDate === date
                    ? "bg-teal-400 text-white"
                    : "border border-[#0d0d0d] text-[#0d0d0d]"
                }`}
              >
                <span className="text-sm">{day}</span>
                <span className="text-sm font-medium">{date}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div className="space-y-2 mt-5">
          <h2 className="text-lg font-semibold">Start Time</h2>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.flat().map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-2 px-4 rounded-lg text-sm transition-colors
                ${
                  selectedTime === time
                    ? "bg-teal-400 text-white"
                    : "border border-[#0d0d0d] text-[#0d0d0d]"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <button className="w-full py-3 bg-teal-500 text-white rounded-lg font-medium mt-5">
          Save {selectedTime} - {getEndTime(selectedTime, duration)} for $20
        </button>
      </div>
      {/* </div> */}
    </CustomComponent>
  );
}

export default SingleDayBooking;

function getEndTime(startTime, duration) {
  const [hours, minutes] = startTime.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes + duration * 60;
  const endHours = Math.floor(totalMinutes / 60);
  const endMinutes = totalMinutes % 60;
  return `${endHours.toString().padStart(2, "0")}:${endMinutes
    .toString()
    .padStart(2, "0")}`;
}
