import { BsCreditCard2Front, BsList } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfileBackButton from "../../src/components/profile/ProfileBackButton";
import CustomComponent from "../shared/CustomComponent";

export default function PaymentRefunds() {
  const menuItems = [
    {
      id: 1,
      name: "My booking",
      icon: <BsList className="text-[#00C0B5] w-5 h-5" />,
      path: "/profile/payments/my-booking",
    },
    {
      id: 2,
      name: "Payments methods",
      icon: <BsCreditCard2Front className="text-[#00C0B5] w-5 h-5" />,
      path: "/profile/payments/payment-methods",
    },
  ];

  return (
    <CustomComponent>
      <div className="w-[400px] mx-auto my-16">
        <ProfileBackButton title="Payments & Refunds" />

        {/* Menu List */}
        <div className="">
          {menuItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="flex justify-between items-center px-4 py-3 border-b last:border-none hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex items-center space-x-3 text-gray-700">
                <span className="text-[#00C0B5] text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </div>
              <FaChevronRight className="text-gray-400" />
            </Link>
          ))}
        </div>
      </div>
    </CustomComponent>
  );
}
