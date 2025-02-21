import { Input, Modal } from "antd";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProfileBackButton from "../../src/components/profile/ProfileBackButton";
import CustomComponent from "../shared/CustomComponent";

export default function MyAddresses() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Mr. Raju Home",
      address: "3891 Parker Rd. Allentown, New Mexico 31134",
      phone: "(907) 555-0101",
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);

  const handleDelete = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
    setIsDeleteModalOpen(false);
  };

  const handleEdit = (address) => {
    setSelectedAddress(address);
    setIsEditModalOpen(true);
  };

  const handleAddNew = () => {
    setSelectedAddress(null);
    setIsAddModalOpen(true);
  };

  return (
    <CustomComponent>
      <div className="w-[400px] mx-auto my-16">
        <ProfileBackButton title="My Addresses" />
        <h2 className="font-medium text-gray-500 mb-4">Your Addresses</h2>

        {/* Address Cards */}
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="bg-white rounded-xl shadow-md p-4 flex justify-between items-center mb-4 relative"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {addr.name}
              </h3>
              <p className="text-gray-600 text-sm">{addr.address}</p>
              <p className="text-gray-600 text-sm">{addr.phone}</p>
            </div>
            <button
              className="text-gray-500 hover:text-gray-700 relative"
              onClick={() => setMenuOpen(menuOpen === addr.id ? null : addr.id)}
            >
              <BsThreeDotsVertical className="w-5 h-5" />
            </button>

            {/* Dropdown Menu */}
            {menuOpen === addr.id && (
              <div className="absolute right-0 top-10 bg-white shadow-md rounded-md p-2">
                <button
                  className="block w-full rounded-md text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                  onClick={() => handleEdit(addr)}
                >
                  Edit
                </button>
                <button
                  className="block w-full rounded-md text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  onClick={() => {
                    setSelectedAddress(addr);
                    setIsDeleteModalOpen(true);
                    setMenuOpen(null);
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Add New Address Button */}
        <button
          className="w-full bg-[#00C0B5] text-white text-lg font-semibold py-3 rounded-lg hover:bg-[#009a95] transition"
          onClick={handleAddNew}
        >
          Add New Address
        </button>
      </div>

      {/* Delete Confirmation Modal */}
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
            onClick={() => handleDelete(selectedAddress.id)}
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

      {/* Edit Address & Add New Address Modal */}
      <Modal
        open={isEditModalOpen || isAddModalOpen}
        onCancel={() => {
          setIsEditModalOpen(false);
          setIsAddModalOpen(false);
          setSelectedAddress(null);
        }}
        footer={null}
        centered
        width={400}
        className="rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold mt-2 text-center">
          {isEditModalOpen ? "Edit Address" : "Add New Address"}
        </h2>
        <div className="mt-6 space-y-4">
          <label className="block text-lg font-medium text-gray-800">
            Name
          </label>
          <Input
            placeholder="Enter Your Name"
            defaultValue={selectedAddress?.name || ""}
          />

          <label className="block text-lg font-medium text-gray-800">
            Address
          </label>
          <Input.TextArea
            placeholder="Enter Your Address"
            defaultValue={selectedAddress?.address || ""}
            rows={2}
          />

          <label className="block text-lg font-medium text-gray-800">
            City
          </label>
          <Input placeholder="Enter Your City" />

          <label className="block text-lg font-medium text-gray-800">
            Country
          </label>
          <Input placeholder="Enter Your Country" />

          <label className="block text-lg font-medium text-gray-800">
            Phone Number
          </label>
          <Input
            placeholder="Enter Your Phone Number"
            defaultValue={selectedAddress?.phone || ""}
          />

          <button
            type="primary"
            className="w-full bg-[#00C0B5] text-white py-2 mt-4 rounded-lg"
          >
            Save
          </button>
        </div>
      </Modal>
    </CustomComponent>
  );
}
