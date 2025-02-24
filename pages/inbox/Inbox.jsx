import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import CustomComponent from "../shared/CustomComponent";
import { FaHeadset } from "react-icons/fa";
import { Modal } from "antd";
import { SlCallOut } from "react-icons/sl";
import { RiMessage2Line } from "react-icons/ri";
import AlertFeed from "../../src/components/inbox/AlertFeed";
import { useNavigate } from "react-router-dom";

function Inbox() {
  const [selectedTab, setSelectedTab] = useState("chat");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <CustomComponent>
      <div className="w-full md:w-[400px] lg:w-[400px] px-5  mx-auto my-5 md:my-16 text-[#0d0d0d]">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Inbox</h1>
          <div className="flex p-1 rounded-lg">
            <button
              onClick={() => setSelectedTab("chat")}
              className={`w-full py-2 text-sm font-medium leading-5 focus:outline-none ${
                selectedTab === "chat"
                  ? "border-b-2 border-[#00C0B5] text-[#00C0B5]"
                  : "border-b-2 border-[#6A6D76] text-[#6A6D76]"
              }`}
            >
              Chat
            </button>
            <button
              onClick={() => setSelectedTab("alerts")}
              className={`w-full py-2 text-sm font-medium leading-5 focus:outline-none  ${
                selectedTab === "alerts"
                  ? "border-b-2 border-[#00C0B5] text-[#00C0B5]"
                  : "border-b-2 border-[#6A6D76] text-[#6A6D76]"
              }`}
            >
              Alerts
            </button>
          </div>
          <div className="mt-4 space-y-4">
            {selectedTab === "chat" && (
              <>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search friends"
                    className="w-full px-10 py-2 bg-white rounded-md focus:outline-none"
                  />
                  <FiSearch className="absolute left-3 top-2.5 text-zinc-400 text-lg" />
                </div>
                <div className="space-y-2">
                  {["Admin Maria", "NB Sujon"].map((name, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white text-[#0D0D0D]"
                    >
                      <div className="relative">
                        <img
                          src="https://avatar.iran.liara.run/public/4"
                          alt="Profile"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="absolute bottom-0 right-1 w-2.5 h-2.5 bg-[#00C0B5] rounded-full" />
                      </div>
                      <div className="flex justify-between items-center gap-10 text-xs">
                        <div className="flex flex-col justify-start items-start">
                          <h3 className="font-semibold">{name}</h3>

                          <p className="text-sm text-zinc-400">
                            Hello Ken, Hope you are doing great
                          </p>
                        </div>
                        <div className="flex flex-col justify-end items-end gap-5">
                          <p className="text-sm text-zinc-400 whitespace-nowrap">
                            3:00 pm
                          </p>
                          <div className="h-5 w-5 rounded-full bg-[#F9FAFC] flex items-center justify-center text-xs">
                            2
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {selectedTab === "alerts" && <AlertFeed />}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="w-1/2 md:w-1/3 bg-[#00C0B5] text-white rounded-lg px-4 py-3 flex items-center justify-center gap-2"
            >
              <FaHeadset className="w-5 h-5" />
              <p> Support</p>
            </button>
          </div>
          <Modal
            open={isModalOpen}
            onCancel={() => {
              setIsModalOpen(false);
            }}
            footer={null}
            centered
            width={400}
            className="rounded-lg shadow-lg"
          >
            <div className="mt-6 space-y-4">
              <div className="flex justify-center items-center">
                <img src="/chat.png" alt="" className="w-20 h-20" />
              </div>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  navigate("/callScreen");
                }}
                className="w-full bg-[#00C0B5] text-white rounded-lg px-4 py-3 flex items-center justify-center gap-2 mt-5"
              >
                <SlCallOut />
                <p> Call</p>
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  navigate("/chat");
                }}
                className="w-full bg-[#00C0B5] text-white rounded-lg px-4 py-3 flex items-center justify-center gap-2 mt-2"
              >
                <RiMessage2Line />
                <p> Message</p>
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </CustomComponent>
  );
}

export default Inbox;
