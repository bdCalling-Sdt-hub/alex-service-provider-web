import { useState } from "react";
import CustomComponent from "../../../pages/shared/CustomComponent";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import ProfileBackButton from "../../../src/components/profile/ProfileBackButton";

function PalliativeCareFilterProvider() {
  const navigate = useNavigate();

  const tasks = [
    "Basic household cleaning",
    "Washing and Ironing clothes",
    "Cooking",
    "Feeding the elderly",
    "Going for walks",
    "Medication reminder",
    "Help with personal hygiene",
    "Basic exercise",
    "Grocery shopping",
  ];
  const experiences = [
    "+20 years of experience",
    "11-20 years of experiences",
    "6-10 years of experience",
    "2-5 years of experience ",
    "2-5 years of experience ",
    "0-2 years of experience",
  ];

  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const handleCheckboxChange2 = (event) => {
    if (event.target.checked) {
      setIsChecked2(true);
    } else {
      setIsChecked2(false);
    }
  };

  const [toggle, setToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [price, setPrice] = useState(9);

  return (
    <div>
      <CustomComponent>
        <div className="w-full md:w-[800px] lg:w-[800px] px-5 my-5 md:my-16 text-gray-800 mx-auto">
          <div className="flex justify-between items-center">
            <ProfileBackButton title="Back" />
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-2xl text-black font-bold underline"
            >
              <span className="">Clear filters</span>
            </button>
            <Modal open={isModalOpen} centered footer={null} closable={false}>
              <div className="w-full max-w-md mx-auto bg-white  rounded-lg p-5 overflow-y-auto">
                <div className="my-5">
                  <ProfileBackButton title="Back" />
                </div>

                <div className="">
                  <label className="text-gray-800 font-semibold text-sm">
                    Price/hour:{" "}
                    <span className="text-[#00C0B5] font-bold">
                      ${price}/h-Maximum
                    </span>
                  </label>
                  <div className="relative w-full mt-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer"
                      style={{
                        WebkitAppearance: "none",
                        background: `linear-gradient(to right, #00C0B5 ${price}%, #ccc ${price}%)`,
                      }}
                    />
                  </div>
                </div>
                <div className="my-5 border-t-2 border-[#6A6D76] py-5">
                  <h2 className="text-xl font-bold">
                    Professional’s experience
                  </h2>
                  {experiences.map((task) => (
                    <label
                      key={task}
                      className="flex items-center gap-[10px] cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        onChange={handleCheckboxChange2}
                      />
                      {isChecked2 ? (
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Group 335">
                            <rect
                              id="Rectangle 331"
                              x="-0.00012207"
                              y="6.10352e-05"
                              width="20"
                              height="20"
                              rx="4"
                              className="fill-[#00C0B5] border border-[#00C0B5]"
                              stroke="#00C0B5"
                            ></rect>
                            <path
                              id="Vector"
                              d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                              fill="white"
                            ></path>
                          </g>
                        </svg>
                      ) : (
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Group 335">
                            <rect
                              id="Rectangle 331"
                              x="-0.00012207"
                              y="6.10352e-05"
                              width="20"
                              height="20"
                              rx="4"
                              className="fill-transparent"
                              stroke="#ccc"
                            ></rect>
                          </g>
                        </svg>
                      )}

                      <span className="text-[1.2rem] text-[#424242]">
                        {task}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="mb-6 border-t-2 border-[#6A6D76] pt-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold">Palliative care</h2>
                    <div
                      className={`${
                        toggle ? " bg-[#3B9DF8]" : "bg-[#ffffff]"
                      } w-[65px] h-[35px] p-[0.140rem] border cursor-pointer transition-colors duration-500 border-[#e5eaf2]  rounded-full relative`}
                      onClick={() => setToggle(!toggle)}
                    >
                      <div
                        className={`${
                          toggle ? " translate-x-[29px]" : "translate-x-[0px]"
                        } w-[28px] h-[28px] pb-1 transition-all duration-500 rounded-full bg-[#F2F2F2]`}
                        style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
                      ></div>
                    </div>
                  </div>
                  <p className="flex items-center justify-between cursor-pointer text-[1.2rem] text-[#424242]">
                    Only show professionals specialising in palliative care
                  </p>
                </div>
                <div className="pt-4 border-t-2 border-[#6A6D76]">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold">Palliative care</h2>
                    <div
                      className={`${
                        toggle ? " bg-[#3B9DF8]" : "bg-[#ffffff]"
                      } w-[65px] h-[35px] p-[0.140rem] border cursor-pointer transition-colors duration-500 border-[#e5eaf2]  rounded-full relative`}
                      onClick={() => setToggle(!toggle)}
                    >
                      <div
                        className={`${
                          toggle ? " translate-x-[29px]" : "translate-x-[0px]"
                        } w-[28px] h-[28px] pb-1 transition-all duration-500 rounded-full bg-[#F2F2F2]`}
                        style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
                      ></div>
                    </div>
                  </div>
                  <p className="flex items-center justify-between cursor-pointer text-[1.2rem] text-[#424242]">
                    Only show professionals specialising in palliative care
                  </p>
                </div>
                <button
                  className="w-full h-12 text-lg bg-[#0088cc]  text-white rounded-xl mt-5"
                  onClick={() => navigate("/pofilePictureChange")}
                >
                  Confirm
                </button>
              </div>
            </Modal>
          </div>

          <div className="flex flex-col md:flex-row justify-between w-full mt-10">
            <div className="w-full md:w-1/2">
              <div className="mb-5 ">
                <h2 className="text-xl font-bold mb-2">Other required tasks</h2>
                {tasks.map((task) => (
                  <label
                    key={task}
                    className="flex items-center gap-[10px] cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      onChange={handleCheckboxChange}
                    />
                    {isChecked ? (
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Group 335">
                          <rect
                            id="Rectangle 331"
                            x="-0.00012207"
                            y="6.10352e-05"
                            width="20"
                            height="20"
                            rx="4"
                            className="fill-[#00C0B5] border border-[#00C0B5]"
                            stroke="#00C0B5"
                          ></rect>
                          <path
                            id="Vector"
                            d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                            fill="white"
                          ></path>
                        </g>
                      </svg>
                    ) : (
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Group 335">
                          <rect
                            id="Rectangle 331"
                            x="-0.00012207"
                            y="6.10352e-05"
                            width="20"
                            height="20"
                            rx="4"
                            className="fill-transparent"
                            stroke="#ccc"
                          ></rect>
                        </g>
                      </svg>
                    )}

                    <span className="text-[1.2rem] text-[#424242]">{task}</span>
                  </label>
                ))}
              </div>
              <div className="mb-6 ">
                <h2 className="text-lg font-bold mb-2">Show specialists in:</h2>
                {tasks.map((task) => (
                  <label
                    key={task}
                    className="flex items-center gap-[10px] cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      onChange={handleCheckboxChange}
                    />
                    {isChecked ? (
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Group 335">
                          <rect
                            id="Rectangle 331"
                            x="-0.00012207"
                            y="6.10352e-05"
                            width="20"
                            height="20"
                            rx="4"
                            className="fill-[#00C0B5] border border-[#00C0B5]"
                            stroke="#00C0B5"
                          ></rect>
                          <path
                            id="Vector"
                            d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                            fill="white"
                          ></path>
                        </g>
                      </svg>
                    ) : (
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Group 335">
                          <rect
                            id="Rectangle 331"
                            x="-0.00012207"
                            y="6.10352e-05"
                            width="20"
                            height="20"
                            rx="4"
                            className="fill-transparent"
                            stroke="#ccc"
                          ></rect>
                        </g>
                      </svg>
                    )}

                    <span className="text-[1.2rem] text-[#424242]">{task}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="mb-6 pt-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold">Palliative care</h2>
                  <div
                    className={`${
                      toggle ? " bg-[#3B9DF8]" : "bg-[#ffffff]"
                    } w-[65px] h-[35px] p-[0.140rem] border cursor-pointer transition-colors duration-500 border-[#e5eaf2]  rounded-full relative`}
                    onClick={() => setToggle(!toggle)}
                  >
                    <div
                      className={`${
                        toggle ? " translate-x-[29px]" : "translate-x-[0px]"
                      } w-[28px] h-[28px] pb-1 transition-all duration-500 rounded-full bg-[#F2F2F2]`}
                      style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
                    ></div>
                  </div>
                </div>
                <p className="flex items-center justify-between cursor-pointer text-[1.2rem] text-[#424242]">
                  Only show professionals specialising in palliative care
                </p>
              </div>

              <div className="mb-6 border-t-2 border-[#6A6D76] pt-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold">Palliative care</h2>
                  <div
                    className={`${
                      toggle ? " bg-[#3B9DF8]" : "bg-[#ffffff]"
                    } w-[65px] h-[35px] p-[0.140rem] border cursor-pointer transition-colors duration-500 border-[#e5eaf2]  rounded-full relative`}
                    onClick={() => setToggle(!toggle)}
                  >
                    <div
                      className={`${
                        toggle ? " translate-x-[29px]" : "translate-x-[0px]"
                      } w-[28px] h-[28px] pb-1 transition-all duration-500 rounded-full bg-[#F2F2F2]`}
                      style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
                    ></div>
                  </div>
                </div>
                <p className="flex items-center justify-between cursor-pointer text-[1.2rem] text-[#424242]">
                  Only show professionals specialising in palliative care
                </p>
              </div>

              <div className="pt-4 border-t-2 border-[#6A6D76]">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold">Palliative care</h2>
                  <div
                    className={`${
                      toggle ? " bg-[#3B9DF8]" : "bg-[#ffffff]"
                    } w-[65px] h-[35px] p-[0.140rem] border cursor-pointer transition-colors duration-500 border-[#e5eaf2]  rounded-full relative`}
                    onClick={() => setToggle(!toggle)}
                  >
                    <div
                      className={`${
                        toggle ? " translate-x-[29px]" : "translate-x-[0px]"
                      } w-[28px] h-[28px] pb-1 transition-all duration-500 rounded-full bg-[#F2F2F2]`}
                      style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
                    ></div>
                  </div>
                </div>
                <p className="flex items-center justify-between cursor-pointer text-[1.2rem] text-[#424242]">
                  Only show professionals specialising in palliative care
                </p>
              </div>
            </div>
          </div>
        </div>
      </CustomComponent>
    </div>
  );
}

export default PalliativeCareFilterProvider;
