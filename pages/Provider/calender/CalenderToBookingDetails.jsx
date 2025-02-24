import {
  FaMapMarkerAlt,
  FaRegCalendarCheck,
  FaRegComments,
} from "react-icons/fa";
import ProfileBackButton from "../../../src/components/profile/ProfileBackButton";
import CustomComponent from "../../shared/CustomComponent";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { useState } from "react";

function CalenderToBookingDetails() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <CustomComponent>
      <div className="w-full md:w-[400px] lg:w-[400px] mx-auto my-5 md:my-16 flex flex-col items-start px-5">
        <div className="mt-5">
          <ProfileBackButton title="Details" />
        </div>

        {/* User Profile */}
        <div className="flex justify-between items-center   gap-28 mt-5">
          <div className="flex justify-between items-center gap-2">
            <img
              src="https://avatar.iran.liara.run/public/45"
              alt="User"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h3 className="text-[#0084BF] text-lg font-semibold">Mr. Raju</h3>
              <p className="text-[#0d0d0d] text-sm">+880 1840-550614</p>
            </div>
          </div>
          <div className="bg-[#0084BF] p-2 rounded-full">
            <FaRegComments
              onClick={() => navigate("/chat")}
              className="text-white text-2xl"
            />
          </div>
        </div>

        {/* Comment Section */}
        <div className="mt-5">
          <h1 className="text-[#1C3E64] text-xl">Comment</h1>
          <p className="text-[#0D0D0D] text-sm mt-2 text-start">
            Service booked successfully for elder care. Please ensure assistance
            includes daily check-ins, medication reminders, and help with
            mobility as discussed.
          </p>
        </div>

        {/* Date & Time */}
        <div className="mt-5">
          <h1 className="text-[#1C3E64] text-xl">Date and Time</h1>
          <div className=" mt-2 text-[#0d0d0d]">
            <div className="flex items-center gap-2 text-xl">
              <FaRegCalendarCheck className="text-[#0d0d0d] " />
              <p>Monday, January 13</p>
            </div>

            <div className="flex flex-col items-start">
              {/* Start Time */}
              <div className="flex items-center">
                <div className="w-4 h-4 border-2 border-black rounded-full"></div>
                <span className="ml-2 text-gray-800">Start 16:30</span>
              </div>

              {/* Vertical Line */}
              <div className="h-10 border-l-2 border-black ml-2"></div>

              {/* End Time */}
              <div className="flex items-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <span className="ml-2 text-gray-800">End: 18:30</span>
              </div>
            </div>

            <p className="mt-2">(Duration: 2h)</p>
          </div>
        </div>

        {/* Address */}
        <div className=" mt-5 w-full max-w-md">
          <h3 className="text-[#1C3E64] text-x mb-2">Address</h3>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <FaMapMarkerAlt className="text-[#0d0d0d]" />
            <p>Tallapoosa county, east-central Alabama, U.S</p>
          </div>
        </div>

        {/* Service Price */}
        <div className="text-white mt-6 w-full max-w-md">
          <h3 className="text-[#1C3E64] text-x mb-2">Service price</h3>
          <div className="text-[#0d0d0d]">
            <div className="flex justify-between  text-sm">
              <p>Elderly care</p>
              <p>$10.00/h</p>
            </div>
            <div className="flex justify-between  text-sm mt-2">
              <p>Booking hours</p>
              <p>2h</p>
            </div>
            <hr className="border-gray-700 my-3" />
            <div className="flex justify-between  text-sm">
              <p>Subtotal</p>
              <p>$20.00</p>
            </div>
            <div className="flex justify-between  text-sm mt-2">
              <p>Client protection</p>
              <p>Free</p>
            </div>
            <hr className="border-gray-700 my-3" />
            <div className="flex justify-between  text-lg font-semibold">
              <p>Price:</p>
              <p>$20.00</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex w-full max-w-md mt-5">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#0084BF] text-white w-full py-3 rounded-lg font-semibold"
          >
            Complete
          </button>
          <Modal
            open={isModalOpen}
            onCancel={() => {
              setIsModalOpen(false);
            }}
            footer={null}
            centered
            width={400}
            className="rounded-lg shadow-lg"
          >
            <div className="mt-6 space-y-4">
              <div className="flex justify-center items-center">
                <img src="/base.png" alt="" className="w-full h-full" />
              </div>
              <div>
                <h1 className="text-2xl text-center text-[#0084BF] font-bold">
                  Congratulations
                </h1>
                <p className="text-xs text-center text-[#0D0D0D] mt-2">
                  Congratulations on achieving this milestone in your
                  professional journey! Your dedication, expertise, and hard
                  work are truly commendable. This new step is a testament to
                  your skill and determination to grow and succeed.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                }}
                className="w-full bg-[#0084BF] text-white rounded-lg px-4 py-3 flex items-center justify-center gap-2 mt-5"
              >
                Done
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </CustomComponent>
  );
}

export default CalenderToBookingDetails;
