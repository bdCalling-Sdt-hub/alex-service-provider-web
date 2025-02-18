import { useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import CustomComponent from "../../../pages/shared/CustomComponent";
import { useNavigate } from "react-router-dom";

export default function Frequency() {
  const [frequency, setFrequency] = useState("once");
  const [selectedDate, setSelectedDate] = useState("13");
  const [duration, setDuration] = useState(2);
  const [startType, setStartType] = useState("flexible");
  const [timeSlot, setTimeSlot] = useState("");
  const navigate = useNavigate();

  const days = [
    { day: "Mon", date: "13" },
    { day: "Tue", date: "14" },
    { day: "Wed", date: "15" },
    { day: "Thu", date: "16" },
    { day: "Fri", date: "17" },
    { day: "Sat", date: "18" },
  ];

  const timeSlots = [
    { time: "9-6", icon: <IoSunny className="h-4 w-4" /> },
    { time: "9-12", icon: <IoSunny className="h-4 w-4" /> },
    { time: "12-15", icon: <IoSunny className="h-4 w-4" /> },
  ];
  const timeSlots2 = [
    { time: "15-18", icon: <IoSunny className="h-4 w-4" /> },
    { time: "18-21", icon: <IoMoon className="h-4 w-4" /> },
    { time: "21-00", icon: <IoMoon className="h-4 w-4" /> },
  ];
  const singleDays = [
    { day: "Mon" },
    { day: "Tue" },
    { day: "Wed" },
    { day: "Thu" },
    { day: "Fri" },
    { day: "Sat" },
  ];

  const [hour, setHour] = useState(1);
  const [minute, setMinute] = useState(0);
  const [meridian, setMeridian] = useState("AM");

  const increaseHour = () => setHour((prev) => (prev === 12 ? 1 : prev + 1));
  const decreaseHour = () => setHour((prev) => (prev === 1 ? 12 : prev - 1));

  const increaseMinute = () =>
    setMinute((prev) => (prev === 59 ? 0 : prev + 1));
  const decreaseMinute = () =>
    setMinute((prev) => (prev === 0 ? 59 : prev - 1));

  const toggleMeridian = () =>
    setMeridian((prev) => (prev === "AM" ? "PM" : "AM"));

  return (
    <CustomComponent>
      <div className=" bg-[#F2F2F2]">
        <div className="bg-[#00C0B5] h-[200px] flex justify-center items-center gap-5 font-bold">
          <div className="">
            <button
              onClick={() => navigate(-1)}
              className="inset-y-0 flex items-center bg-white p-2 rounded-full "
            >
              <FaArrowLeft
                className="h-5 w-5 text-[#0D0D0D]"
                width={20}
                height={20}
              />
            </button>
          </div>
          <h1 className="text-3xl text-white font-bold">
            When do you need it?
          </h1>
        </div>
        <div className="text-white p-6 space-y-8 w-[460px] mx-auto">
          {/* Frequency Selection */}
          <section>
            <div className="flex justify-center items-center text-[#0D0D0D] font-bold">
              <h2 className="text-3xl mb-4">Frequency</h2>
            </div>
            <div className="flex bg-white/10 p-1 rounded-full">
              <button
                className={`flex-1 rounded-full px-4 py-2 transition ${
                  frequency === "once"
                    ? "bg-[#E6FAF9] text-black border border-[#00C0B5]"
                    : "text-black"
                }`}
                onClick={() => setFrequency("once")}
              >
                <div className="flex flex-col">
                  <p className="font-bold"> Just once</p>
                  <p>One-Time</p>
                </div>
              </button>
              <button
                className={`flex-1 rounded-full px-4 py-2 transition ${
                  frequency === "weekly"
                    ? "bg-[#E6FAF9] text-black border border-[#00C0B5]"
                    : "text-black"
                }`}
                onClick={() => setFrequency("weekly")}
              >
                <div className="flex flex-col">
                  <p> Weekly</p>
                  <p>Recurring</p>
                </div>
              </button>
            </div>
          </section>

          {/* Date Selection monthly */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black">January</h2>
              <button className="text-sm px-3 py-1 rounded-lg text-black border border-[#6A6D76]">
                Show month
              </button>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {days.map(({ day, date }) => (
                <button
                  key={date}
                  className={`flex flex-col justify-center items-center p-2 h-auto rounded-md border ${
                    selectedDate === date
                      ? "bg-[#E6FAF9] border border-[#00C0B5] text-black"
                      : "border-[#0D0D0D] text-[#0D0D0D]"
                  }`}
                  onClick={() => setSelectedDate(date)}
                >
                  <span className="text-lg font-semibold">{day}</span>
                  <span className="text-base font-semibold">{date}</span>
                </button>
              ))}
            </div>
          </section>
          {/* Date Selection day wise */}
          <section>
            <div className="flex justify-start items-start mb-4">
              <h2 className="text-xl font-bold text-black">
                Day(s) of the week
              </h2>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {singleDays.map(({ day, index }) => (
                <button
                  key={index}
                  className={`flex flex-col justify-center items-center p-2 h-auto rounded-md border ${
                    selectedDate === day
                      ? "bg-[#E6FAF9] border border-[#00C0B5] text-black"
                      : "border-[#0D0D0D] text-[#0D0D0D]"
                  }`}
                  onClick={() => setSelectedDate(day)}
                >
                  <span className="text-lg font-semibold">{day}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Duration Slider (Custom) */}
          <section>
            <h2 className="text-lg mb-4 text-[#0D0D0D]">
              Duration <span className="text-[#00C0B5]">{duration}h</span>
            </h2>
            <input
              type="range"
              min="1"
              max="8"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full appearance-none h-2 rounded-lg bg-[#00C0B5]"
            />
          </section>

          {/* Start Time */}
          <section>
            <h2 className="text-xl mb-4 text-[#0D0D0D] font-bold">
              Start time
            </h2>
            <div className="flex bg-white/10 p-1 rounded-full mb-6">
              <button
                className={`flex-1 rounded-full px-4 py-2 transition  ${
                  startType === "flexible"
                    ? "bg-white text-[#0D0D0D] shadow-xl"
                    : "text-[#0D0D0D]"
                }`}
                onClick={() => setStartType("flexible")}
              >
                Flexible start
              </button>
              <button
                className={`flex-1 rounded-full px-4 py-2 transition ${
                  startType === "exact"
                    ? "bg-white text-[#0D0D0D] shadow-xl"
                    : "text-[#0D0D0D]"
                }`}
                onClick={() => setStartType("exact")}
              >
                Exact start
              </button>
            </div>
            {/* .............................................. */}
            {/* Time Slot Selection */}
            <div className="space-y-2">
              <h1 className="text-[#0D0D0D] text-xl font-semibold">Morning</h1>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map(({ time, icon }) => (
                  <button
                    key={time}
                    className={`flex flex-col justify-center items-center gap-2 border border-[#0D0D0D] text-[#0D0D0D] rounded-md px-3 py-2 ${
                      timeSlot === time
                        ? " bg-[#E6FAF9] border-[#00C0B5] text-[#0D0D0D]"
                        : "border-[#0D0D0D]"
                    }`}
                    onClick={() => setTimeSlot(time)}
                  >
                    {icon}
                    <span>{time}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2 mt-5">
              <h1 className="text-[#0D0D0D] text-xl font-semibold">
                Afternoon
              </h1>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots2.map(({ time, icon }) => (
                  <button
                    key={time}
                    className={`flex flex-col justify-center items-center gap-2 border rounded-md px-3 py-2 ${
                      timeSlot === time
                        ? "bg-[#E6FAF9] border-[#00C0B5] text-[#0D0D0D]"
                        : "border-[#0D0D0D] text-[#0D0D0D]"
                    }`}
                    onClick={() => setTimeSlot(time)}
                  >
                    {icon}
                    <span>{time}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center border-gray-400 text-[#0D0D0D] p-5 bg-white mt-5 rounded-lg">
              <div className="flex justify-center items-center gap-5">
                <div className="flex flex-col items-center">
                  <button onClick={increaseHour} className="text-[#0D0D0D]">
                    ▲
                  </button>
                  <span className="text-2xl">
                    {String(hour).padStart(2, "0")}
                  </span>
                  <button onClick={decreaseHour} className="text-[#0D0D0D]">
                    ▼
                  </button>
                </div>
                <span className="text-2xl">:</span>
                <div className="flex flex-col items-center">
                  <button onClick={increaseMinute} className="text-[#0D0D0D]">
                    ▲
                  </button>
                  <span className="text-2xl">
                    {String(minute).padStart(2, "0")}
                  </span>
                  <button onClick={decreaseMinute} className="text-[#0D0D0D]">
                    ▼
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  <button onClick={toggleMeridian} className="text-[#0D0D0D]">
                    ▲
                  </button>
                  <span className="text-2xl">{meridian.toLowerCase()}</span>
                  <button onClick={toggleMeridian} className="text-[#0D0D0D]">
                    ▼
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Buttons */}
          <div className="p-4 flex gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex-1 border border-[#0D0D0D] text-[#0D0D0D] px-4 py-2 rounded-md"
            >
              Skip
            </button>
            <button
              onClick={() => navigate("/serviceSearch")}
              className="flex-1 bg-[#00C0B5] text-white px-4 py-2 rounded-md"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </CustomComponent>
  );
}
