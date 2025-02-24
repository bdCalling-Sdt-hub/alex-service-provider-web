import CustomComponent from "../../shared/CustomComponent";
import {  FaWallet } from "react-icons/fa";
import { useState } from "react";
import ProfileBackButton from "../../../src/components/profile/ProfileBackButton";

function MyBalance() {
  const [balance, ] = useState(20.0);

  return (
    <CustomComponent>
      <div className="text-[#0d0d0d] w-full  md:w-[400px] lg:w-[400px] px-5 mx-auto my-5 md:my-16">
        <div className="max-w-md mx-auto p-4">
          {/* Header */}
          <ProfileBackButton title="My Balance" />

          {/* Balance Amount */}
          <div className=" rounded-xl p-5 text-center mb-6">
            <div className="bg-[#E2F6FF] p-4 border-2 border-[#0084BF] rounded-lg w-1/2 mx-auto">
              <h2 className="text-4xl font-bold mb-2">${balance.toFixed(2)}</h2>
              <p className="text-gray-400 text-xs">Available balance</p>
            </div>
          </div>

          {/* Transactions */}
          <div className="space-y-4">
            {/* Deposit Transaction */}
            <div className="bg-white p-4 rounded-xl flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <FaWallet className="h-6 w-6 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Balance Deposit</h3>
                <div className="text-sm text-gray-400">
                  <span>Mr. Raju</span> <span>•</span> <span>Elderly care</span>{" "}
                  <span>•</span> <span>13 January 2025</span>
                </div>
              </div>
              <span className="text-green-500 font-medium">+$20.00</span>
            </div>

            {/* Refund Transaction */}
            <div className="bg-white p-4 rounded-xl flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <FaWallet className="h-6 w-6 text-red-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Balance Refund</h3>
                <div className="text-sm text-gray-400">
                  <span>Mr. Raju</span> <span>•</span> <span>Elderly care</span>{" "}
                  <span>•</span> <span>13 January 2025</span>
                </div>
              </div>
              <span className="text-red-500 font-medium">-$20.00</span>
            </div>
          </div>
        </div>
      </div>
    </CustomComponent>
  );
}

export default MyBalance;
