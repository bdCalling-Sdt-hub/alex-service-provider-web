import { useState } from "react";
import CustomComponent from "../../shared/CustomComponent";
import ProfileBackButton from "../../../src/components/profile/ProfileBackButton";
import { FaRegLightbulb } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

function MinimumBookingAmount() {
  const [price, setPrice] = useState("15");

  const handleSave = () => {
    console.log("Saving minimum price:", price);
  };
  return (
    <CustomComponent>
      <div className="w-full md:w-[400px] lg:w-[400px] mx-auto my-5 md:my-16 text-[#0d0d0d] px-5">
        <div className="">
          <div className="max-w-md w-full">
            <ProfileBackButton />

            <h1 className="text-2xl font-bold mb-4 text-[#1C3E64]">
              Minimum Price
            </h1>

            {/* <div className="bg-gray-900 border border-gray-800 rounded-lg p-6"> */}
            <p className="text-[#6A6D76] mb-4">
              What is the minimum price a client must pay to book your service?
            </p>

            <div className="flex items-center justify-center">
              <div className=" text-[#0d0d0d] p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-3 relative w-48 my-5">
                <p className="text-[#0d0d0d] text-sm font-semibold">
                  Minimum price:
                </p>
                <div className="flex justify-center items-center gap-5">
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-16 text-center text-3xl bg-white text-black font-bold rounded-md py-1"
                  />
                  <RiMoneyDollarCircleLine className="text-[#0d0d0d] w-10 h-10" />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-10 p-4 border border-[#6A6D76] rounded-lg">
              <div className="mt-1 inline-block w-20 h-10">
                <FaRegLightbulb className="w-10 h-10 text-yellow-400" />
              </div>
              <p className="text-sm text-[#6A6D76]">
                This will avoid being booked for a price so low that it is not
                worth your time to commute to the service.
              </p>
            </div>
            <button
              onClick={handleSave}
              className="w-full bg-[#0084BF]  text-white py-2 rounded-md "
            >
              Save
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </CustomComponent>
  );
}

export default MinimumBookingAmount;
