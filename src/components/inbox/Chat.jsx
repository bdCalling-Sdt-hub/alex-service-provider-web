import { FiPaperclip, FiSend } from "react-icons/fi";
import { useState } from "react";
import CustomComponent from "../../../pages/shared/CustomComponent";
import ProfileBackButton from "../profile/ProfileBackButton";
import { IoCall } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

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

export default function Chat() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  return (
    <CustomComponent>
      <div className="flex flex-col bg-[#E6FAF9]">
        <div className="w-full md:w-[400px] lg:w-[400px] px-5 mx-auto my-5 md:my-16">
          {/* Header */}
          <div className="flex justify-between items-center p-4">
            <ProfileBackButton />
            <IoCall
              onClick={() => navigate("/callScreen")}
              className="text-[#00C0B5]"
            />
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
    </CustomComponent>
  );
}
