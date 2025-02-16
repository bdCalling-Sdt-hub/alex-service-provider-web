import { useState } from "react";
import { IoCut, IoHammer, IoPaw, IoBook } from "react-icons/io5";
import { FaBroom, FaUserCheck, FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import CustomComponent from "../../../pages/shared/CustomComponent";

export default function SearchPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const services = [
    { icon: <FaBroom className="h-5 w-5" />, name: "Cleaning" },
    { icon: <span className="text-lg">💅</span>, name: "Manicure/Pedicure" },
    { icon: <IoHammer className="h-5 w-5" />, name: "Handyman" },
    { icon: <IoCut className="h-5 w-5" />, name: "Hairdressing" },
    { icon: <IoPaw className="h-5 w-5" />, name: "Dog Grooming" },
    { icon: <span className="text-lg">💆</span>, name: "Massage Therapy" },
    { icon: <IoBook className="h-5 w-5" />, name: "Tutoring Lessons" },
    { icon: <FaUserCheck className="h-5 w-5" />, name: "Personal Trainer" },
  ];

  return (
    <CustomComponent>
      <div className="bg-[#F2F2F2] min-h-screen flex justify-center">
        <div className="w-full max-w-xl mx-auto py-5 px-5">
          {/* Search Bar */}
          <div className="relative">
            <button
              onClick={() => navigate(-1)}
              className="absolute inset-y-0 left-2 flex items-center"
            >
              <FaArrowLeft className="h-5 w-5 text-[#00C0B5]" />
            </button>
            <input
              type="text"
              placeholder="Find the service you need"
              className="w-full pl-10 pr-4 py-3 bg-white rounded-full text-sm focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            />
          </div>

          {/* Show service list only when input is focused or has text */}
          {(isFocused || search.length > 0) && (
            <div className="mt-4 bg-white shadow-md rounded-lg p-4">
              <h2 className="text-sm font-medium mb-4">
                Most popular in your area
              </h2>
              <div className="space-y-2">
                {services.map((service) => (
                  <button
                    key={service.name}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors w-full text-left"
                  >
                    <div className="flex items-center justify-center w-10 h-10">
                      {service.icon}
                    </div>
                    <span className="text-xl text-[#0D0D0D]">
                      {service.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </CustomComponent>
  );
}
