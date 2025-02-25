import { FiMinusCircle, FiPaperclip, FiSend } from "react-icons/fi";
import { useState } from "react";
import CustomComponent from "../../../pages/shared/CustomComponent";
import ProfileBackButton from "../profile/ProfileBackButton";
import { IoCall } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaVideo } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Modal } from "antd";

const messages = [
  { id: 1, text: "Hello", time: "3:00 pm", sender: "user" },
  { id: 2, text: "How can we help you", time: "3:01 pm", sender: "admin" },
  {
    id: 3,
    text: "I need an emergency appointment. Are you available now?",
    time: "3:01 pm",
    sender: "user",
  },
  {
    id: 4,
    text: "Yes, we are available. Please book an appointment first and visit. You can use Google Maps for directions.",
    time: "3:02 pm",
    sender: "admin",
  },
];

export default function MessageProfessionals() {
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState("");
  const [isModalOpen2, setIsModalOpen2] = useState("");

  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-[#E6FAF9]">
      <div className="w-full md:w-[400px] lg:w-[400px] px-5 mx-auto my-5 md:my-16">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <ProfileBackButton />
          <div className="flex justify-center items-center gap-3">
            <IoCall
              onClick={() => navigate("/callScreen")}
              className="text-[#00C0B5]"
            />
            <FaVideo
              onClick={() => navigate("/videoCallScreen")}
              className="text-[#00C0B5]"
            />
            <BsThreeDotsVertical
              onClick={() => setIsModalOpen(true)}
              className="text-[#00C0B5]"
            />
            <Modal
              open={isModalOpen}
              onCancel={() => setIsModalOpen(false)}
              footer={null}
              centered
              width={400}
              className="rounded-xl shadow-lg"
              title="Settings"
            >
              <div className="my-5">
                <div
                  onClick={() => setIsModalOpen2(true)}
                  className="w-full  text-[#00C0B5] py-2 flex items-center justify-start text-xl gap-2"
                >
                  <FiMinusCircle className="text-[#00C0B5]" />
                  <p>Block this user</p>
                </div>
              </div>
            </Modal>
            <Modal
              open={isModalOpen2}
              onCancel={() => setIsModalOpen2(false)}
              footer={null}
              centered
              width={400}
              className="rounded-xl shadow-lg"
            >
              <h2 className="text-xl font-semibold text-center mt-4">
                Are you sure you want to block?
              </h2>
              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="primary"
                  className="w-full bg-[#00C0B5] text-white py-2 rounded-md cursor-pointer"
                  onClick={() => handleDelete(selectedAddress.id)}
                >
                  YES, BLOCK
                </button>
                <button
                  className="w-full border border-[#00C0B5] text-[#00C0B5] py-2 rounded-md cursor-pointer"
                  onClick={() => setIsDeleteModalOpen(false)}
                >
                  NO, DON&apos;T BLOCK
                </button>
              </div>
            </Modal>
          </div>
        </div>

        <div className="flex items-center gap-3 p-5">
          <img
            src="https://avatar.iran.liara.run/public/31"
            alt="Admin Maria"
            className="h-8 w-8 rounded-full text-[#00C0B5]"
          />
          <span className="font-semibold text-xl">Admin Maria</span>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="text-zinc-400 text-center text-sm">Today</div>

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "admin" && (
                <img
                  src="https://avatar.iran.liara.run/public/31"
                  alt="Admin Maria"
                  className="h-8 w-8 rounded-full mr-2"
                />
              )}
              <div className="max-w-[80%]">
                <div
                  className={`rounded-2xl px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-teal-500 text-white"
                      : "bg-white text-zinc-900"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
                <div
                  className={`text-xs mt-1 text-zinc-400 ${
                    message.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  {message.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-5">
          <div className="flex items-center gap-2 bg-white  rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Message"
              className="flex-1 bg-transparent text-white placeholder-zinc-400 focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="text-zinc-400 hover:text-zinc-300">
              <FiPaperclip className="h-5 w-5" />
            </button>
            <button className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600">
              <FiSend className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
