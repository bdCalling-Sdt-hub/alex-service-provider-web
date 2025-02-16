import { IoNotifications, IoSearchSharp } from "react-icons/io5";
import CustomComponent from "../shared/CustomComponent";
import Hero from "../../src/components/home/Hero";
import { RiArrowDownSLine } from "react-icons/ri";
import { Divider, Modal } from "antd";
import { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

function HomeWithSearch() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState(""); 
  const [savedAddress, setSavedAddress] = useState(""); 

  const handleAddAddress = () => {
    if (address.trim() !== "") {
      setSavedAddress(address); 
      setIsModalOpen(false); 
    }
  };

  return (
    <CustomComponent>
      <div className="my-5 flex justify-end items-center gap-5 px-5 md:px-20 lg:px-24">
        <div className="bg-gray-100 p-2 rounded-full">
          <IoSearchSharp className="w-8 h-8 text-[#0D0D0D]" />
        </div>
        <div className="relative bg-gray-100 p-2 rounded-full">
          <IoNotifications className="w-8 h-8 text-[#0D0D0D]" />
          <div className="p-[2px] bg-white absolute top-0 left-1 rounded-full">
            <div className="w-[16px] h-[16px] rounded-full bg-green-400"></div>
          </div>
        </div>
      </div>

      <Hero />

    {/* Display Address if saved, else show "+ Add address" */}
<div className="flex justify-center items-center gap-2">
  {savedAddress ? (
    <p className="text-2xl text-[#1C3E64] font-bold">{savedAddress}</p>
  ) : (
    <p className="text-3xl text-[#00C0B5] font-bold">+ Add address</p>
  )}
  
  {!savedAddress && (
    <button onClick={() => setIsModalOpen(true)}>
      <RiArrowDownSLine className="w-8 h-8" />
    </button>
  )}
</div>

      <Modal open={isModalOpen} centered footer={null} closable={false}>
        <div className="w-full max-w-md mx-auto bg-white rounded-lg p-6">
          <div className="bg-white rounded-lg p-6 sm:max-w-md w-full">
            <div className="space-y-1 relative pb-2">
              <div className="flex items-center justify-between mb-5">
                <h1 className="text-2xl font-bold text-[#1C3E64]">
                  Service address
                </h1>
                <button
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200"
                  onClick={() => setIsModalOpen(false)}
                >
                  X<span className="sr-only">Close</span>
                </button>
              </div>
            </div>
            <p className="text-sm text-[#0D0D0D] mb-4">
              Select where you want to receive the service
            </p>
            <div className="flex flex-col gap-4 py-4">
              <Divider className="border-2 border-gray-400" />
              <div className="flex items-center justify-between rounded-lg p-2 gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500">
                  <FaCheck className="h-3 w-3 text-white" />
                </div>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter address"
                  className="shadow-lg bg-white py-2 px-5 text-base text-slate-900 w-[260px] h-[40px] outline-0"
                />
                <button className="h-8 w-8 flex items-center justify-center">
                  <FaPencil className="h-4 w-4 text-teal-500" />
                </button>
              </div>
              <Divider className="border-2 border-gray-400" />
              <button
                onClick={handleAddAddress}
                className="w-full bg-[#00C0B5] text-white py-2 rounded-lg"
              >
                Add address
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </CustomComponent>
  );
}

export default HomeWithSearch;
