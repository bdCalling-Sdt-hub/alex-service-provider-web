import { useNavigate } from "react-router-dom";
import CustomComponent from "../../../pages/shared/CustomComponent";
import { FaArrowLeft, FaCheck, FaInfo, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { FaArrowRight, FaRepeat } from "react-icons/fa6";
import { Modal } from "antd";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

function ServiceSearch() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [filter, setFilter] = useState("When");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [openId, setOpenId] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "How does it work?",
      answer:
        "Our elderly care service provides professional caregivers to assist with daily activities, companionship, and specialized care.",
    },
    {
      id: 2,
      question: "Can they perform other tasks besides caregiving?",
      answer:
        "Yes, caregivers can assist with light housekeeping, meal preparation, and medication reminders.",
    },
    {
      id: 3,
      question: "Does it include care for people with medical conditions?",
      answer:
        "Yes, we provide specialized care for individuals with chronic illnesses, dementia, or other medical needs.",
    },
    {
      id: 4,
      question: "The person to be cared for is in the hospital",
      answer:
        "Our caregivers can provide companionship and support during hospital stays and assist with transitions back home.",
    },
    {
      id: 5,
      question: "Can I book the service on a weekly basis?",
      answer:
        "Yes, you can schedule caregiving services on a weekly or flexible basis as needed.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <CustomComponent>
      <div className="w-[360px] h-full mx-auto gap-4 py-16 ">
        {/* Search Bar */}
        <div className="flex justify-center items-center gap-5 w-full mt-5">
          <div className="relative w-[80%]">
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
          <div className="border border-black rounded-full p-2">
            <FaRegHeart />
          </div>
        </div>
        <div className="flex flex-row justify-start gap-2 mt-5">
          <button
            className={`rounded-lg p-2 transition ${
              filter === "When"
                ? "bg-[#E6FAF9] text-black text-md border border-[#00C0B5]"
                : "text-black border border-black"
            }`}
            onClick={() => setFilter("When")}
          >
            <div className="flex justify-center items-center gap-1">
              <CiCalendarDate className="w-6 h-6" />
              <p className="text-base"> When?</p>
            </div>
          </button>
          <button
            className={`rounded-lg p-2 transition ${
              filter === "Filters"
                ? "bg-[#E6FAF9] text-black text-md border border-[#00C0B5]"
                : "text-black border border-black"
            }`}
            // onClick={() => setFilter("Filters")}
            onClick={() => navigate("/palliativeCareFilter")}
          >
            <div className="flex justify-center items-center gap-1">
              <VscSettings className="w-6 h-6" />
              <p className="text-base"> Filters</p>
            </div>
          </button>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <FaInfo className="h-5 w-5 bg-[#00C0B5] text-white p-1 rounded-full" />
            <p>How does the service work?</p>
          </div>
          <button>
            <FaArrowRight
              onClick={() => setIsModalOpen(true)}
              className="h-5 w-5 text-[#00C0B5]"
            />
          </button>
          <Modal
            open={isModalOpen}
            centered
            footer={null}
            onCancel={() => setIsModalOpen(false)}
            title="How does the Elderly care service work?"
          >
            <div className="w-full max-w-md h-[70vh] mx-auto bg-white  rounded-lg p-6 overflow-y-auto">
              <div className="space-y-1 relative pb-2">
                {/* Illustration */}
                <div className="mb-8 flex justify-center">
                  <img
                    src="/faq.png"
                    alt="Elderly care illustration"
                    className="w-full max-w-md"
                  />
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                  {faqItems.map((item) => (
                    <div key={item.id} className="border-b border-gray-200">
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                      >
                        <span className="text-lg text-gray-900">
                          {item.question}
                        </span>
                        {openId === item.id ? (
                          <AiOutlineDown className="w-6 h-6 text-gray-400" />
                        ) : (
                          <AiOutlineRight className="w-6 h-6 text-gray-400" />
                        )}
                      </button>
                      {openId === item.id && (
                        <div className="p-4 text-gray-700 bg-gray-50">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Modal>
        </div>
        <div className="space-y-3 mt-5">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </CustomComponent>
  );
}

export default ServiceSearch;

const ServiceCard = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg flex justify-between items-center w-full">
      {/* Left Section: Profile */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-5">
          <img
            src="https://avatar.iran.liara.run/public/42"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="flex items-center gap-1">
              <h3 className="font-semibold text-lg">NB Sujon</h3>
              <FaCheck className="bg-[#0084BF] text-white p-1 rounded-full" />
            </div>
            <p className="text-gray-500 text-sm flex items-center">
              <span className="text-yellow-400 text-lg">★</span> 5.0 (1) | 2
              Service
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-1">
          <div className="flex justify-center items-center p-1 bg-[#E6FAF9] rounded-md">
            <FaRepeat className="text-[#00C0B5]" />
            <p className="text-xs">1 has repeated</p>
          </div>
          <div className="flex justify-center items-center p-1 bg-[#E6FAF9] rounded-md">
            <CiCalendarDate className="text-[#00C0B5]" />
            <p className="text-xs">1 has repeated</p>
          </div>
        </div>
      </div>

      {/* Right Section: Pricing */}
      <div>
        <span className="font-semibold text-lg">$10/h</span>
      </div>
    </div>
  );
};
