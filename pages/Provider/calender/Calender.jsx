import { RxLapTimer } from "react-icons/rx";
import CustomComponent from "../../shared/CustomComponent";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/en"; 

import enUS from "antd/es/date-picker/locale/en_US";
import { useNavigate } from "react-router-dom";

const defaultValue = dayjs("2024-01-01");

function Calender() {
    const navigate = useNavigate();
  const onChange = (_, dateStr) => {
    console.log("onChange:", dateStr);
  };

  return (
    <CustomComponent>
      <div className="w-full md:w-[400px] lg:w-[400px] px-5 mx-auto my-5 md:my-16 text-[#0d0d0d]">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-1">
            <RxLapTimer className="w-5 h-5 text-[#0084BF]" />
            <p className="text-md font-bold">Upcoming Booking</p>
          </div>
          {/* <div className=""> */}
          <DatePicker
            defaultValue={defaultValue}
            locale={enUS}
            onChange={onChange}
          />
          {/* </div> */}
        </div>
        <div 
       onClick={() => navigate("/calenderToBookingDetails")}
        className="relative w-full md:w-[400px] lg:w-[400px] mx-auto my-5  h-[150px] bg-white rounded-2xl shadow-lg p-4 flex justify-between items-center">
          <div className="flex justify-between items-center">
            <img
              src="/about.png"
              alt="calender"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="ml-4 flex-grow">
              <h3 className="text-lg font-semibold text-[#0084BF]">
                Elderly Care
              </h3>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <FaClock className="w-4 h-4 mr-2 text-gray-500" />
                Monday, 1 Feb. 2025
              </div>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <FaCalendarAlt className="w-4 h-4 mr-2 text-gray-500" />
                From 16:30 to 18:30
              </div>
              <div className="mt-2">
                <span className="text-xs text-[#00C0B5] bg-[#D9FFFD] py-1 px-3 rounded-md">
                  Ongoing
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-5 right-5">
            <p className="text-[#0084BF]">$10.00 hrs</p>
          </div>
        </div>
      </div>
    </CustomComponent>
  );
}

export default Calender;
