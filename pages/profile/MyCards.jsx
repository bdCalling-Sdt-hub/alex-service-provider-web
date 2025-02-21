import { Input, Modal } from "antd";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProfileBackButton from "../../src/components/profile/ProfileBackButton";
import CustomComponent from "../shared/CustomComponent";

export default function MyCards() {
  const [cards, setCards] = useState([
    {
      id: 1,
      type: "PayPal",
      number: "**** **** **** 9878",
      logo: "/paypal.png",
    },
    { id: 2, type: "Visa", number: "**** **** **** 1259", logo: "/visa.png" },
    {
      id: 3,
      type: "Master card",
      number: "**** **** **** 9558",
      logo: "/mastercard.png",
    },
  ]);

  const [selectedCard, setSelectedCard] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleDelete = () => {
    setCards(cards.filter((card) => card.id !== selectedCard.id));
    setIsDeleteModalOpen(false);
  };

  const handleBlock = () => {
    alert(`Card ${selectedCard.type} is blocked`);
    setIsBlockModalOpen(false);
  };

  return (
    <CustomComponent>
      <div className="w-[400px] mx-auto my-16">
        <ProfileBackButton title="My Cards" />

        {/* Section Title */}
        <h2 className="text-lg font-medium text-gray-500 mb-4">Your Card</h2>

        {/* Card List */}
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md p-4 flex justify-between items-center mb-4 relative"
          >
            <div className="flex items-center space-x-3">
              <img src={card.logo} alt={card.type} className="w-8 h-8" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.type}
                </h3>
                <p className="text-gray-600 text-sm">{card.number}</p>
              </div>
            </div>
            <button
              className="text-gray-500 hover:text-gray-700 relative"
              onClick={() => setMenuOpen(menuOpen === card.id ? null : card.id)}
            >
              <BsThreeDotsVertical className="w-5 h-5" />
            </button>

            {/* Dropdown Menu */}
            {menuOpen === card.id && (
              <div className="absolute right-0 top-10 z-20 bg-white shadow-md rounded-md p-2">
                <button
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700"
                  onClick={() => {
                    setSelectedCard(card);
                    setIsBlockModalOpen(true);
                    setMenuOpen(null);
                  }}
                >
                  Block
                </button>
                <button
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 text-red-600"
                  onClick={() => {
                    setSelectedCard(card);
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

        {/* Add New Card Button */}
        <button
          className="w-full bg-[#00C0B5] text-white text-lg font-semibold py-3 rounded-lg hover:bg-[#009a95] transition"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add New
        </button>

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
              className="w-full bg-[#00C0B5] text-white py-2 rounded-md cursor-pointer"
              onClick={handleDelete}
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

        {/* Block Confirmation Modal */}
        <Modal
          open={isBlockModalOpen}
          onCancel={() => setIsBlockModalOpen(false)}
          footer={null}
          centered
          width={400}
          className="rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-semibold text-center mt-4">
            Are you sure you want to block this card?
          </h2>
          <div className="mt-6 flex flex-col gap-3">
            <button
              className="w-full bg-[#00C0B5] text-white py-2 rounded-md cursor-pointer"
              onClick={handleBlock}
            >
              Yes
            </button>
            <button
              className="w-full border border-[#00C0B5] text-[#00C0B5] py-2 rounded-md cursor-pointer"
              onClick={() => setIsBlockModalOpen(false)}
            >
              No
            </button>
          </div>
        </Modal>

        {/* Add New Card Modal */}
        <Modal
          open={isAddModalOpen}
          onCancel={() => setIsAddModalOpen(false)}
          footer={null}
          centered
          width={400}
          className="rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold text-center">Add Card</h2>
          <div className="mt-6 space-y-4">
            <label className="block text-lg font-medium text-gray-800">
              Card Holder Name
            </label>
            <Input placeholder="Enter Name" />

            <label className="block text-lg font-medium text-gray-800">
              Card Number
            </label>
            <Input placeholder="1234 1234 1234 1234" />

            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-lg font-medium text-gray-800">
                  Expiration Date
                </label>
                <Input placeholder="MM/YY" />
              </div>
              <div className="flex-1">
                <label className="block text-lg font-medium text-gray-800">
                  Security Code
                </label>
                <Input placeholder="CVV" />
              </div>
            </div>

            <button className="w-full bg-[#00C0B5] text-white py-2 rounded-lg">
              Add
            </button>
          </div>
        </Modal>
      </div>
    </CustomComponent>
  );
}
