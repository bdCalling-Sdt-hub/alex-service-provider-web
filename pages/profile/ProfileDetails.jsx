import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import ProfileBackButton from "../../src/components/profile/ProfileBackButton";
import CustomComponent from "../shared/CustomComponent";
import { Modal } from "antd";

export default function ProfileDetails() {
  const [name, setName] = useState("Mr. Raju");
  const [email, setEmail] = useState("raju@gmail.com");
  const [phone, setPhone] = useState("+880 1840-560614");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://avatar.iran.liara.run/public/32"
  );

  // Handle Image Upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <CustomComponent>
      <div className="w-[400px] mx-auto p-16">
        {/* Back Button */}
        <ProfileBackButton title="Profile details" />

        {/* Profile Image Section */}
        <div className="relative flex flex-col items-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-md"
          />
          <label className="absolute bottom-0 right-20 bg-[#00C0B5] p-2 rounded-full text-white cursor-pointer">
            <FaCamera className="w-4 h-4" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Form Inputs */}
        <div className="mt-6 space-y-4">
          <input
            type="text"
            className="w-full rounded-lg py-2 px-3 text-gray-800 outline-none shadow-lg bg-[#fff]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="w-full rounded-lg py-2 px-3 text-gray-800 outline-none shadow-lg bg-[#fff]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            className="w-full rounded-lg py-2 px-3 text-gray-800 outline-none shadow-lg bg-[#fff]"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Save Button */}
        <button className="w-full bg-[#00C0B5] text-white text-lg font-semibold py-2 mt-6 rounded-lg">
          Save
        </button>

        {/* Delete Account */}
        <button
        onClick={()=>{setIsDeleteModalOpen(true)}}
        className="block w-full text-center text-[#0D0D0D] mt-4 underline">
          Delete account permanently
        </button>
        <Modal
        open={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        footer={null}
        centered
        width={400}
        className="rounded-xl shadow-lg"
      >
        <h2 className="text-xl font-semibold text-center mt-4">
          Are you sure you want to delete?
        </h2>
        <div className="mt-6 flex flex-col gap-3">
          <button
            type="primary"
            className="w-full bg-[#00C0B5] text-white py-2 rounded-md cursor-pointer"
          >
            YES, DELETE
          </button>
          <button
            className="w-full border border-[#00C0B5] text-[#00C0B5] py-2 rounded-md cursor-pointer"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            NO, DON&apos;T DELETE
          </button>
        </div>
      </Modal>
      </div>
    </CustomComponent>
  );
}
