import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import ProfileBackButton from "../../src/components/profile/ProfileBackButton";
import CustomComponent from "../shared/CustomComponent";

export default function ProfileDetails() {
  const [name, setName] = useState("Mr. Raju");
  const [email, setEmail] = useState("raju@gmail.com");
  const [phone, setPhone] = useState("+880 1840-560614");
  const [profileImage, setProfileImage] = useState(
    "https://randomuser.me/api/portraits/men/1.jpg"
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
            className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:ring-2 focus:ring-[#00C0B5] outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:ring-2 focus:ring-[#00C0B5] outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:ring-2 focus:ring-[#00C0B5] outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Save Button */}
        <button className="w-full bg-[#00C0B5] text-white text-lg font-semibold py-2 mt-6 rounded-lg hover:bg-[#009a95] transition">
          Save
        </button>

        {/* Delete Account */}
        <button className="block w-full text-center text-red-600 mt-4 underline hover:text-red-800">
          Delete account permanently
        </button>
      </div>
    </CustomComponent>
  );
}
