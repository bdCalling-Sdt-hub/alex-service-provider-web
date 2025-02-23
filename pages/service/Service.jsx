import { useState } from "react";
import ServiceCard from "../../src/components/service/ServiceCard";
import CustomComponent from "../shared/CustomComponent";

const tabs = ["Upcoming", "Past", "Cancelled"];

function Service() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const services = [
    {
      title: "Elderly Care",
      time: "From 16:30 to 18:30",
      date: "Monday, 1 Feb. 2025",
      status: "Pending acceptance",
      image: "",
      type: "upcoming",
    },
    {
      title: "Elderly Care",
      time: "From 16:30 to 18:30",
      date: "Monday, 1 Feb. 2025",
      status: "Rating",
      image: "",
      type: "past",
    },
    {
      title: "Elderly Care",
      time: "From 16:30 to 18:30",
      date: "Monday, 1 Feb. 2025",
      status: "Cancel",
      image: "",
      type: "cancelled",
    },
  ];

  return (
    <CustomComponent>
      <div className="w-full md:w-[400px] lg:w-[400px] px-5  mx-auto my-5 md:my-16">
        {/* Title */}
        <h1 className="text-2xl font-bold text-black">Service</h1>

        {/* Tab Navigation */}
        <div className="flex mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-2 text-center text-lg font-medium ${
                activeTab.toLowerCase() === tab.toLowerCase()
                  ? "text-black bg-white rounded-2xl"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filter Services Based on Active Tab */}
        <div className="mt-4">
          {services
            .filter((service) => service.type === activeTab.toLowerCase())
            .map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
        </div>
      </div>
    </CustomComponent>
  );
}

export default Service;
