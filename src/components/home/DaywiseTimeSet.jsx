import { useState } from "react";
import CustomComponent from "../../../pages/shared/CustomComponent";
import { RxCross1 } from "react-icons/rx";

export default function DaywiseTimeSet() {
  const [selectedTime, setSelectedTime] = useState("16:30");
  const [price, setPrice] = useState(50);
  const timeSlots = [
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:30",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  return (
    <CustomComponent>
      <div className="w-full md:w-[400px] lg:w-[400px] mx-auto my-5 md:my-16 text-gray-400 px-5">
        <div className="flex items-center justify-between my-5">
          <p className="text-[#0d0d0d] text-3xl font-bold">Monday</p>
          <div className="bg-white p-3 rounded-lg shadow-md text-[#0D0D0D]">
            <RxCross1 className="w-5 h-5 text-[#0d0d0d]" />
          </div>
        </div>
        <div className="space-y-5">
          <div>
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

          {/* Time Selection Section */}
          <div className="space-y-5">
            <h2 className="text-[#0d0d0d]">Start Time</h2>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2 px-4 rounded-lg text-center text-sm transition-colors ${
                    selectedTime === time
                      ? "bg-white text-black"
                      : "border border-gray-300 text-gray-400"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full py-4 bg-teal-400 text-[#0d0d0d] rounded-lg font-medium ">
            Save {selectedTime} - 18:30 for $20
          </button>
        </div>
      </div>
    </CustomComponent>
  );
}
