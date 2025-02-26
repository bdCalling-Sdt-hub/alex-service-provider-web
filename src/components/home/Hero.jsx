import { Modal } from "antd";
import { useState } from "react";
import { RiMessage2Line } from "react-icons/ri";
import { SlCallOut } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  return (
    <div className="flex items-center justify-center py-10">
      <div className="relative w-[300px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[500px] lg:h-[600px]">
        {/* Center Item */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center w-20 h-20 md:w-40 md:h-40 bg-white rounded-full shadow-lg">
          <div className="flex flex-col items-center justify-center">
            <img
              onClick={() => {
                setIsModalOpen2(true);
              }}
              src="/icon/phone.png"
              alt="Support"
              className="w-5 md:w-12 h-5 md:h-12"
            />
            <p className="text-xs md:text-sm font-medium">Support</p>
          </div>
        </div>
        <Modal
          open={isModalOpen2}
          onCancel={() => {
            setIsModalOpen2(false);
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
                setIsModalOpen2(true);
                navigate("/callScreen");
              }}
              className="w-full bg-[#00C0B5] text-white rounded-lg px-4 py-3 flex items-center justify-center gap-2 mt-5"
            >
              <SlCallOut />
              <p> Call</p>
            </button>
            <button
              onClick={() => {
                setIsModalOpen2(true);
                navigate("/chat");
              }}
              className="w-full bg-[#00C0B5] text-white rounded-lg px-4 py-3 flex items-center justify-center gap-2 mt-2"
            >
              <RiMessage2Line />
              <p> Message</p>
            </button>
          </div>
        </Modal>

        {/* Circular Items */}
        {[
          {
            name: "Home",
            icon: "/icon/house.png",
            top: "10%",
            left: "50%",
            url: "/frequency",
          },
          {
            name: "Cleaning",
            icon: "/icon/spray.png",
            top: "25%",
            left: "85%",
            url: "/frequency",
          },
          {
            name: "Care",
            icon: "/icon/Group.png",
            bottom: "15%",
            left: "85%",
            url: "/care",
          },
          {
            name: "Handyman",
            icon: "/icon/toy.png",
            bottom: "-10%",
            left: "50%",
            url: "/frequency",
          },
          {
            name: "Others",
            icon: "/icon/prize.png",
            bottom: "15%",
            left: "15%",
            url: "/frequency",
          },
          {
            name: "Pets",
            icon: "/icon/icon.png",
            top: "25%",
            left: "20%",
            url: "/frequency",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center justify-center w-20 h-20 md:w-32 md:h-32 bg-white rounded-full shadow-lg"
            onClick={() => {
              if (item.url) {
                navigate(item.url);
              }
            }}
            style={{
              top: item.top,
              bottom: item.bottom,
              left: item.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-5 md:w-10 h-5 md:h-10"
            />
            <p className="text-xs md:text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
