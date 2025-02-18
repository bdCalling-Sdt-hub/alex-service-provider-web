import { AiFillStar, AiOutlineCheckCircle } from "react-icons/ai";
import CustomComponent from "../../../pages/shared/CustomComponent";
import { Divider, Modal } from "antd";
import { FaArrowLeft, FaRegHeart } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSyncAlt, FaCheckCircle } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { GiArcheryTarget } from "react-icons/gi";

export default function ProfessionalProfile() {
  const ratingCategories = [
    { name: "Service", score: 5.0 },
    { name: "Punctuality", score: 4.8 },
    { name: "Kindness", score: 5.0 },
    { name: "Value for money", score: 4.9 },
    { name: "Professionalism", score: 5.0 },
  ];
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState("weekly");

  return (
    <CustomComponent>
      <div className="max-w-[738px] mx-auto">
        <div className="my-10 flex justify-around">
          <button onClick={() => navigate(-1)} className="flex items-center">
            <FaArrowLeft className="h-5 w-5" />
          </button>
          <p className="text-gray-800">NB Sujon’s profile</p>
          <div className="flex gap-5">
            <BsDownload className="h-5 w-5" />
            <FaRegHeart className="h-5 w-5" />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="max-w-md mx-auto p-4 space-y-6">
            {/* Profile Header */}
            <div className="flex flex-col items-center space-y-3">
              <img
                src="https://avatar.iran.liara.run/public/38"
                alt="Professional caregiver"
                className="w-24 h-24 rounded-full object-cover"
              />
              <h2 className="text-lg font-medium text-gray-800">NB Sujon</h2>
              <p className="text-md font-medium text-[#6A6D76]">Elderly care</p>
            </div>

            {/* Stats Bar */}
            <div className="rounded-full p-5">
              <div className="flex justify-around items-center p-5 rounded-lg border border-[#6A6D76]">
                <div>
                  <img
                    src="/ProfessionalProfile/a.png"
                    alt="Professional caregiver"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <Divider
                  variant="solid"
                  style={{ borderColor: "#6A6D76", height: "50px" }}
                  type="vertical"
                />

                <div className="flex flex-col  items-center space-x-2 ">
                  <div className="flex items-center">
                    5<AiFillStar className="text-yellow-400 w-6 h-6" />
                  </div>
                  <div className="text-gray-800 text-sm">1 reviews</div>
                </div>
                <Divider
                  variant="solid"
                  style={{ borderColor: "#6A6D76", height: "50px" }}
                  type="vertical"
                />
                <div className="flex flex-col items-center space-x-2 ">
                  <span className="text-gray-800">2</span>
                  <span className="text-gray-800 text-sm">Service</span>
                </div>
                <Divider
                  variant="solid"
                  style={{ borderColor: "#6A6D76", height: "50px" }}
                  type="vertical"
                />
                <div className="">
                  <img
                    src="/ProfessionalProfile/b.png"
                    alt="Professional caregiver"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="space-y-2">
              <h3 className="text-[#1C3E64] text-xl font-medium">About me</h3>
              <p className="text-gray-600 text-sm">
                Welcome to my bio! I am a highly trained professional with a
                passion for excellence and a commitment to providing top-notch
                care. With my experience, I specialize in delivering superior
                service.
              </p>
              <button className="text-[#0D0D0D] text-sm hover:underline">
                +View more
              </button>
            </div>

            {/* Gallery Section */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-[#1C3E64] text-xl font-medium">Gallery</h3>
                <button className="text-[#0D0D0D] text-sm hover:underline">
                  View gallery
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <img
                  src="/about.png"
                  alt="Care service example"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
            </div>
            <Divider
              variant="solid"
              style={{ borderColor: "#6A6D76" }}
              type="horizontal"
            />
            {/* Price and Availability */}
            <div className="p-5 flex justify-between items-center">
              <span className="text-[#1C3E64] text-2xl font-bold">$10/h</span>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-teal-500 text-white px-6 py-2 rounded-lg"
              >
                View availability
              </button>
              <Modal
                open={isModalOpen}
                centered
                footer={null}
                onCancel={() => setIsModalOpen(false)}
                title="Service frequency"
              >
                <div className="max-w-md mx-auto bg-white p-5 relative">
                  {/* Title */}

                  <p className="text-gray-500 text-sm mt-1">
                    How many times do you want the service?
                  </p>

                  {/* Weekly Service Option */}
                  <div
                    className={`border p-4 mt-4 rounded-xl cursor-pointer ${
                      selected === "weekly"
                        ? "border-[#00C0B5] bg-[#F0FCFB]"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelected("weekly")}
                  >
                    <div className="flex items-center space-x-3">
                      <FaSyncAlt className="text-[#00C0B5] text-2xl" />
                      <div>
                        <h3 className="text-lg font-semibold">Weekly</h3>
                        <p className="text-gray-500 text-sm">
                          Recurring service
                        </p>
                      </div>
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <FaCheckCircle className="text-[#00C0B5]" />
                        <span>
                          Flexible terms: cancel or switch professionals free of
                          charge
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FaCheckCircle className="text-[#00C0B5]" />
                        <span>Automatic booking and weekly payment.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FaCheckCircle className="text-[#00C0B5]" />
                        <span>Cancel one-time service in 1 click.</span>
                      </li>
                    </ul>
                  </div>

                  {/* One-Time Service Option */}
                  <div
                    className={`border p-4 mt-4 rounded-xl cursor-pointer ${
                      selected === "once"
                        ? "border-[#00C0B5] bg-[#F0FCFB]"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelected("once")}
                  >
                    <div className="flex items-center space-x-3">
                      <GiArcheryTarget className="text-orange-500 text-2xl" />
                      <div>
                        <h3 className="text-lg font-semibold">Just once</h3>
                        <p className="text-gray-500 text-sm">
                          One-time service
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
          <div className="max-w-md mx-auto p-4 space-y-6">
            {/* Questions Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#1C3E64]">
                Some questions about me
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-[#1C3E64]">
                    How much experience do you have as a carer of the elderly?
                  </h4>
                  <p className="mt-1 text-gray-600">5-10 years experience</p>
                </div>

                <div>
                  <h4 className="text-[#1C3E64]">
                    Do you have a qualification, diploma or degree as a health
                    worker?
                  </h4>
                  <p className="mt-1 text-gray-600">Yes</p>
                </div>
              </div>
            </div>

            {/* View all */}
            <button className="border border-[#0D0D0D] text-[#0D0D0D] w-full py-2 rounded-lg">
              View all
            </button>

            {/* Ratings */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-3xl font-bold">5.0</span>
                <AiFillStar className="w-8 h-8 text-yellow-400" />
                <div className="flex flex-col">
                  <p className="text-xl">Outstanding</p>
                  <span className="text-gray-500">(3 ratings)</span>
                </div>
              </div>

              <div className="space-y-4">
                {ratingCategories.map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="text-gray-600 s">{category.name}</span>
                    <div className="flex items-center">
                      <div className="w-32 h-2 bg-orange-200 rounded-full mr-2">
                        <div
                          className="h-full bg-orange-500 rounded-full"
                          style={{ width: `${(category.score / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-gray-600">{category.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Comments</h3>
              <div className="flex items-center space-x-4">
                <img
                  src="https://avatar.iran.liara.run/public/1"
                  alt="Commenter"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    Ana.
                    <span className="text-gray-500">6 Hours Ago</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <AiOutlineCheckCircle className="" />
                    <span className="text-xs">Verified service</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[#0D0D0D] text-xs">
                  The service was outstanding! The provider was professional,
                  arrived on time, and completed the job perfectly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomComponent>
  );
}
