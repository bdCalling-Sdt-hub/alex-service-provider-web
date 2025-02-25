import { FaPlus, FaCheck, FaTimes } from "react-icons/fa";
import CustomComponent from "../../shared/CustomComponent";
import ProfileBackButton from "../../../src/components/profile/ProfileBackButton";
import { Input, Modal } from "antd";
import { useState } from "react";

export default function ProfilePictureChange() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [phone, setPhone] = useState("01886606000");

  const onChange = (text) => {
    console.log("onChange:", text);
  };
  const onInput = (value) => {
    console.log("onInput:", value);
  };
  const sharedProps = {
    onChange,
    onInput,
  };
  return (
    <CustomComponent>
      <div className="w-full md:w-[400px] lg:w-[400px] mx-auto my-5 md:my-16 text-[#0d0d0d] px-5">
        <div className="">
          <ProfileBackButton />

          <h1 className="text-[#1C3E64] text-3xl font-bold mb-2">
            Profile Picture
          </h1>
          <p className="text-gray-400 mb-8">
            This will be the picture that clients will see of you. Try to make
            it as trustworthy as possible.
          </p>

          <div className="flex justify-center mb-8">
            <button className="relative w-32 h-32 rounded-full bg-white flex items-center justify-center ">
              <FaPlus className="w-8 h-8 text-[#1C3E64]" />
            </button>
          </div>

          <div className="bg-white text-black rounded-lg p-4 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              What makes a good profile picture?
            </h2>

            <div className="flex justify-center gap-4 mb-6">
              <div className="relative">
                <img
                  src="https://avatar.iran.liara.run/public/20"
                  alt="Good example"
                  className="w-20 h-20 rounded-full"
                />
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <FaCheck className="text-white" />
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://avatar.iran.liara.run/public/21"
                  alt="Bad example"
                  className="w-20 h-20 rounded-full"
                />
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <FaTimes className="text-white" />
                </div>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "Good lighting",
                "Good resolution",
                "Visible face",
                "Smile",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#E6FAF9] flex items-center justify-center">
                    <FaCheck className="text-[#00C0B5] text-sm" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="w-full mt-8 bg-[#0084BF] text-white py-4 rounded-lg text-lg font-semibold"
          >
            Confirm
          </button>

          <Modal
            open={showModal}
            centered
            footer={null}
            onCancel={() => setShowModal(false)}
          >
            <div className="w-full max-w-md mx-auto bg-white  rounded-lg p-5 overflow-y-auto">
              <div className="my-5 space-y-2 ">
                <h1 className="text-3xl text-[#0084BF] font-bold">
                  Phone number
                </h1>
                <p className="text-[#6A6D76]">
                  Let’s verify your phone number. We will send you an SMS with
                  the verification code
                </p>
                <input
                  type="tel"
                  className="w-full rounded-lg py-3 px-4 text-gray-800 outline-none shadow-lg bg-[#fff]"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button
                className="w-full h-12 text-lg bg-[#0088cc]  text-white rounded-xl mt-10"
                onClick={() => {
                  setShowModal2(true);
                  setShowModal(false);
                }}
              >
                Verify
              </button>
            </div>
            <div className="flex justify-between">
              <p className="flex flex-1 justify-center text-center text-[#6A6D76]">
                Phone number
              </p>
              <p className="text-3xl font-bold text-end text-[#0084BF]">ok</p>
            </div>
          </Modal>
          <Modal
            open={showModal2}
            centered
            footer={null}
            onCancel={() => setShowModal2(false)}
          >
            <div className="w-full max-w-md mx-auto bg-white  rounded-lg p-5 overflow-y-auto">
              <div className="my-5 space-y-2 ">
                <h1 className="text-3xl text-[#0084BF] font-bold">
                  Enter 4 digits code
                </h1>
                <p className="text-[#6A6D76]">
                  Enter the 4 digits code that you received on you phone number
                </p>
                <div className="flex justify-center items-center my-5">
                  <Input.OTP
                    formatter={(str) => str.toUpperCase()}
                    length={4}
                    {...sharedProps}
                  />
                </div>
              </div>
              <button
                className="w-full h-12 text-lg bg-[#0088cc]  text-white rounded-xl mt-10"
                onClick={() => setShowModal2(false)}
              >
                Done
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </CustomComponent>
  );
}
