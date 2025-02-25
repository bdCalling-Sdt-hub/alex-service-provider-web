import { useState } from "react";
import CustomComponent from "../../shared/CustomComponent";
import ProfileBackButton from "../../../src/components/profile/ProfileBackButton";
import { Modal } from "antd";
import { TimeSelector } from "../../shared/TimeSelector";
// import { useNavigate } from "react-router-dom";

export default function ProfileWorkSchedule() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [fromHours, setFromHours] = useState("09");
  const [fromMinutes, setFromMinutes] = useState("00");
  const [untilHours, setUntilHours] = useState("18");
  const [untilMinutes, setUntilMinutes] = useState("00");

  const adjustTime = (value, setValue, increment, maxValue) => {
    const numValue = Number.parseInt(value, 10);
    let newValue = increment ? numValue + 1 : numValue - 1;

    if (newValue >= maxValue) newValue = 0;
    if (newValue < 0) newValue = maxValue - 1;

    setValue(newValue.toString().padStart(2, "0"));
  };
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [availability, setAvailability] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  const toggleAvailability = (day) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };
  // const navigate = useNavigate();
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
          <div className="space-y-5 mt-5">
            {days.map((day) => (
              <div
                key={day}
                className="flex flex-col items-center justify-between p-2"
              >
                <div className="flex items-center justify-between p-2 gap-10">
                  <span className="text-[#0D0D0D] font-medium">{day}</span>
                  <div className="flex items-center gap-3">
                    {/* ✅ Toggle Switch */}
                    <div
                      onClick={() => toggleAvailability(day)}
                      className={`${
                        availability[day] ? "bg-[#0084BF]" : "bg-[#ffffff]"
                      } w-[65px] h-[35px] p-[0.140rem] border cursor-pointer transition-colors duration-500 border-[#e5eaf2] rounded-full relative`}
                    >
                      <div
                        className={`${
                          availability[day]
                            ? "translate-x-[29px]"
                            : "translate-x-[0px]"
                        } w-[28px] h-[28px] pb-1 transition-all duration-500 rounded-full bg-[#F2F2F2]`}
                        style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
                      ></div>
                    </div>

                    {/* ✅ Status & Time in Column */}
                    <div className="flex flex-col items-start">
                      <span className="text-gray-500 text-sm">
                        {availability[day] ? "Available" : "Not available"}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setIsAddModalOpen(true);
                  }}
                  className="mt-2 text-xl"
                >
                  {availability[day] && (
                    <span className="text-black text-2xl font-medium">
                      9:00 - 18:00
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Modal
          open={isAddModalOpen}
          onCancel={() => {
            setIsAddModalOpen(false);
          }}
          footer={null}
          centered
          width={400}
          className="rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mt-2 text-center">
            Schedule Monday
          </h2>
          <div className="w-full max-w-md mx-auto bg-white p-5 mt-5">
            {/* Time Selector */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {/* From Time */}
                <div className="space-y-2">
                  <label className="text-lg text-gray-500">From:</label>
                  <TimeSelector
                    hours={fromHours}
                    minutes={fromMinutes}
                    setHours={setFromHours}
                    setMinutes={setFromMinutes}
                    adjustTime={adjustTime}
                  />
                </div>

                {/* Until Time */}
                <div className="space-y-2">
                  <label className="text-lg text-gray-500">Until:</label>
                  <TimeSelector
                    hours={untilHours}
                    minutes={untilMinutes}
                    setHours={setUntilHours}
                    setMinutes={setUntilMinutes}
                    adjustTime={adjustTime}
                  />
                </div>
              </div>

              {/* Confirm Button */}
              <button
                className="w-full h-12 text-lg bg-[#0088cc]  text-white rounded-xl"
                onClick={() => {
                  setIsAddModalOpen(false);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </CustomComponent>
  );
}
