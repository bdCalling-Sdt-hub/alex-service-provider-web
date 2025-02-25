/* eslint-disable react/prop-types */
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export function TimeSelector({
  hours,
  minutes,
  setHours,
  setMinutes,
  adjustTime,
}) {
  return (
    <div className="flex items-center justify-center gap-2 text-2xl">
      <div className="flex flex-col items-center">
        <button
          className="p-2 text-gray-600 hover:text-gray-800"
          onClick={() => adjustTime(hours, setHours, true, 24)}
        >
          <BiChevronUp className="h-6 w-6" />
        </button>
        <span className="font-medium">{hours}</span>
        <button
          className="p-2 text-gray-600 hover:text-gray-800"
          onClick={() => adjustTime(hours, setHours, false, 24)}
        >
          <BiChevronDown className="h-6 w-6" />
        </button>
      </div>
      <span className="text-2xl">:</span>
      <div className="flex flex-col items-center">
        <button
          className="p-2 text-gray-600 hover:text-gray-800"
          onClick={() => adjustTime(minutes, setMinutes, true, 60)}
        >
          <BiChevronUp className="h-6 w-6" />
        </button>
        <span className="font-medium">{minutes}</span>
        <button
          className="p-2 text-gray-600 hover:text-gray-800"
          onClick={() => adjustTime(minutes, setMinutes, false, 60)}
        >
          <BiChevronDown className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
