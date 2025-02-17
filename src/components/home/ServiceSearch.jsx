import { useNavigate } from "react-router-dom";
import CustomComponent from "../../../pages/shared/CustomComponent";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

function ServiceSearch() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <CustomComponent>
      <div className="flex flex-col items-center gap-4 py-16">
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
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </CustomComponent>
  );
}

export default ServiceSearch;

const ServiceCard = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg flex justify-between items-center w-full">
      {/* Left Section: Profile */}
      <div className="flex items-center gap-3">
        <img
          src="https://avatar.iran.liara.run/public/42" 
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <div className="flex items-center gap-1">
            <h3 className="font-semibold text-lg">NB Sujon</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="blue"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m-7 8a9 9 0 1018 0 9 9 0 00-18 0z"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-sm flex items-center">
            <span className="text-yellow-400 text-lg">★</span> 5.0 (1) | 2
            Service
          </p>
        </div>
      </div>

      {/* Right Section: Pricing */}
      <div>
        <span className="font-semibold text-lg">$10/h</span>
      </div>
    </div>
  );
};
