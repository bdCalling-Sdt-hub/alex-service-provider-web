// import { useState } from "react";
// import CustomComponent from "../../shared/CustomComponent";
// import { FaRegCheckSquare } from "react-icons/fa";
// import RequestServiceCard from "./RequestServiceCard";

// const tabs = ["Request", "Ongoing", "Cancelled"];

// export default function ProviderRequest() {
//   const [activeTab, setActiveTab] = useState("Upcoming");

//   const services = [
//     {
//       title: "Elderly Care",
//       time: "From 16:30 to 18:30",
//       date: "Monday, 1 Feb. 2025",
//       status: "Accept",
//       image: "",
//       type: "Request",
//     },
//     {
//       title: "Elderly Care",
//       time: "From 16:30 to 18:30",
//       date: "Monday, 1 Feb. 2025",
//       status: "Ongoing",
//       image: "",
//       type: "Ongoing",
//     },
//     {
//       title: "Elderly Care",
//       time: "From 16:30 to 18:30",
//       date: "Monday, 1 Feb. 2025",
//       status: "Cancel",
//       image: "",
//       type: "Canceled",
//     },
//   ];
//   return (
//     <CustomComponent>
//       <div className="w-full md:w-[400px] lg:w-[400px] px-5  mx-auto my-5 md:my-16">
//         {/* Title */}
//         <div className="flex items-center justify-between mt-2">
//           <h1 className="text-xl md:text-3xl font-bold text-black">Service</h1>
//           <FaRegCheckSquare className="w-10 h-10 text-[#0084BF]" />
//         </div>
//         {/* Tab Navigation */}
//         <div className="flex mt-5">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               className={`flex-1 py-2 text-center text-lg font-medium ${
//                 activeTab.toLowerCase() === tab.toLowerCase()
//                   ? "text-black bg-white rounded-2xl"
//                   : "text-gray-500"
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Filter Services Based on Active Tab */}
//         <div className="mt-4">
//           {services
//             .filter((service) => service.type === activeTab.toLowerCase())
//             .map((service, index) => (
//               <RequestServiceCard key={index} {...service} />
//             ))}
//         </div>
//       </div>
//     </CustomComponent>
//   );
// }

import { useState } from "react";
import CustomComponent from "../../shared/CustomComponent";
import { FaRegCheckSquare } from "react-icons/fa";
import RequestServiceCard from "./RequestServiceCard";
import { useNavigate } from "react-router-dom";

const tabs = ["request", "ongoing", "cancelled"];

export default function ProviderRequest() {
  const [activeTab, setActiveTab] = useState("request");
  const navigate = useNavigate();

  const services = [
    {
      title: "Elderly Care",
      time: "From 16:30 to 18:30",
      date: "Monday, 1 Feb. 2025",
      status: "accept",
      image: "",
      type: "request",
    },
    {
      title: "Elderly Care",
      time: "From 16:30 to 18:30",
      date: "Monday, 1 Feb. 2025",
      status: "ongoing",
      image: "",
      type: "ongoing",
    },
    {
      title: "Elderly Care",
      time: "From 16:30 to 18:30",
      date: "Monday, 1 Feb. 2025",
      status: "cancel",
      image: "",
      type: "cancelled",
    },
  ];

  return (
    <CustomComponent>
      <div className="w-full md:w-[400px] lg:w-[400px] px-5 mx-auto my-5 md:my-16">
        {/* Title */}
        <div className="flex items-center justify-between mt-2">
          <h1 className="text-xl md:text-3xl font-bold text-black">Service</h1>
          <FaRegCheckSquare
            onClick={() => {
              navigate("/complete");
            }}
            className="w-10 h-10 text-[#0084BF]"
          />
        </div>
        {/* Tab Navigation */}
        <div className="flex mt-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-2 text-center text-lg font-medium ${
                activeTab === tab
                  ? "text-black bg-white rounded-2xl"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Filter Services Based on Active Tab */}
        <div className="mt-4">
          {services
            .filter((service) => service.type === activeTab)
            .map((service, index) => (
              <RequestServiceCard key={index} {...service} />
            ))}
        </div>
      </div>
    </CustomComponent>
  );
}
