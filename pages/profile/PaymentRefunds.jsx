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
      icon: <BsList className="text-[#00C0B5] w-6 h-6" />,
      path: "/profile/payments/my-booking",
    },
    {
      id: 2,
      name: "Payments methods",
      icon: <BsCreditCard2Front className="text-[#00C0B5] w-6 h-6" />,
      path: "/profile/payments/payment-methods",
    },
  ];

  return (
    <CustomComponent>
      <div className="w-full md:w-[400px] lg:w-[400px] px-5 mx-auto my-5 md:my-16">
        <ProfileBackButton title="Payments & Refunds" />

        {/* Menu List */}
        <div className="">
          {menuItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="flex justify-between items-center px-4 py-3 border-b-[3px] border-[#6A6D76] last:border-none cursor-pointer"
            >
              <div className="flex items-center space-x-3 text-gray-700">
                <span className="text-[#00C0B5] font-bold text-xl bg-[#E6FAF9] p-2">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </div>
              <FaChevronRight className="text-[#0D0D0D]" />
            </Link>
          ))}
        </div>
      </div>
    </CustomComponent>
  );
}
