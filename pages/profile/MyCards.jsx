import { Input, Modal } from "antd";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProfileBackButton from "../../src/components/profile/ProfileBackButton";
import CustomComponent from "../shared/CustomComponent";

export default function MyCards() {
  const [name, setName] = useState();
  const [cards, setCards] = useState([
    {
      id: 1,
      type: "PayPal",
      number: "**** **** **** 9878",
      logo: "/card/p3.png",
    },
    {
      id: 2,
      type: "Visa",
      number: "**** **** **** 1259",
      logo: "/card/p1.png",
    },
    {
      id: 3,
      type: "Master card",
      number: "**** **** **** 9558",
      logo: "/card/p2.png",
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

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  return (
    <CustomComponent>
      <div className="w-[400px] mx-auto my-16">
        <ProfileBackButton title="My Cards" />

        {/* Section Title */}
        <h2 className="text-lg font-medium text-[#0D0D0D] mb-4">Your Card</h2>

        {/* Card List */}
        {cards.map((card) => (
          <div
            key={card.id}
            className="border-[3px] border-[#0D0D0D] rounded-xl  px-4 py-2 flex justify-between items-center mb-4 relative"
          >
            <div className="flex items-center space-x-3">
              <img
                src={card.logo}
                alt={card.type}
                className="w-[46px] h-[32px]"
              />
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
              <BsThreeDotsVertical className="w-5 h-5 text-[#0D0D0D]" />
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
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full rounded-lg py-3 px-3 text-gray-800 outline-none border border-[#0D0D0D] bg-[#fff]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className="block text-lg font-medium text-gray-800">
              Card Number
            </label>
            <input
              type="number"
              placeholder="1234 1234 1234 1234"
              className="w-full rounded-lg py-3 px-3 text-gray-800 outline-none border border-[#0D0D0D] bg-[#fff]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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
            <label className="flex items-center gap-[10px] cursor-pointer">
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
                      className="fill-[#3B9DF8]"
                      stroke="#3B9DF8"
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
                Save
              </span>
            </label>

            <button className="w-full bg-[#00C0B5] text-white py-2 rounded-lg">
              Add
            </button>
          </div>
        </Modal>
      </div>
    </CustomComponent>
  );
}
