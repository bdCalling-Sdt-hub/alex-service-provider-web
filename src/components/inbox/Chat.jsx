import { FiArrowLeft, FiPaperclip, FiSend } from "react-icons/fi";
import { useState } from "react";

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

  return (
    <div className="flex flex-col h-screen bg-zinc-900 text-white">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
        <button className="text-white hover:text-gray-300">
          <FiArrowLeft className="h-6 w-6" />
        </button>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20427321969-fwvP2rr3F2TXImZqWqOzicP451f4AA.png"
          alt="Admin Maria"
          className="h-8 w-8 rounded-full"
        />
        <span className="font-semibold">Admin Maria</span>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20427321969-fwvP2rr3F2TXImZqWqOzicP451f4AA.png"
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
      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center gap-2 bg-zinc-800 rounded-full px-4 py-2">
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
  );
}
