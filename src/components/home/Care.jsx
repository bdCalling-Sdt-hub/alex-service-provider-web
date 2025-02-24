import CustomComponent from "../../../pages/shared/CustomComponent";
import { IoNotifications, IoSearchSharp } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Care() {
  const navigate = useNavigate();

  return (
    <CustomComponent>
      <div className="my-5 flex justify-end items-center gap-5 px-5 md:px-20 lg:px-24 h-[100vh-50%] md:h-[100vh-20%]">
        <div className="bg-gray-100 p-2 rounded-full">
          <IoSearchSharp className="w-8 h-8 text-[#0D0D0D]" />
        </div>
        <div className="relative bg-gray-100 p-2 rounded-full">
          <IoNotifications className="w-8 h-8 text-[#0D0D0D]" />
          <div className="p-[2px] bg-white absolute top-0 left-1 rounded-full">
            <div className="w-[16px] h-[16px] rounded-full bg-green-400"></div>
          </div>
        </div>
      </div>
      <div className="w-[360px] h-[580px] mx-auto p-6">
        <header className="mb-8 flex justify-center items-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-[#00BFA5]"
          >
            <FaChevronLeft className="h-6 w-6" />
            <span className="text-2xl ml-2 font-bold">Care</span>
          </button>
        </header>

        <div className="grid grid-cols-2 gap-4 max-w-xs">
          <button
            onClick={() => navigate("/care/children")}
            className="group flex flex-col items-center"
          >
            <div className="mb-2 rounded-full bg-white p-4 aspect-square flex flex-col gap-5 items-center justify-center w-full transition-transform group-hover:scale-105">
              <img
                src="/care/baby.png"
                alt="Children"
                width={60}
                height={60}
                className="object-contain"
              />
              <span className="text-[#0D0D0D] text-center font-bold">
                Children
              </span>
            </div>
          </button>

          <button
            onClick={() => navigate("/care/elders")}
            className="group flex flex-col items-center"
          >
            <div className="mb-2 rounded-full bg-white p-4 aspect-square flex flex-col gap-5 items-center justify-center w-full transition-transform group-hover:scale-105">
              <img
                src="/care/old.png"
                alt="Elders"
                width={60}
                height={60}
                className="object-contain"
              />
              <span className="text-[#0D0D0D] text-center font-bold">
                Elders
              </span>
            </div>
          </button>
        </div>
      </div>
      {/* Display Address  */}
      <div className="flex justify-center items-center text-2xl text-[#1C3E64] font-bold">
        Dhaka,Bangladesh
      </div>
    </CustomComponent>
  );
}

export default Care;
