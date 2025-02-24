import { FiCheckCircle, FiShield, FiXCircle } from "react-icons/fi";

const notifications = [
  {
    id: 1,
    title: "Order Accepted",
    description: "We have accepted your order. Click to view details.",
    time: "2 hrs ago",
    type: "accepted",
  },
  {
    id: 2,
    title: "Order Complete",
    description: "Your order has been successfully completed.",
    time: "3 hrs ago",
    type: "complete",
  },
  {
    id: 3,
    title: "Order Cancelled",
    description: "Your order has been cancelled. Click to view details.",
    time: "4 hrs ago",
    type: "cancelled",
  },
];

const getNotificationStyles = (type) => {
  switch (type) {
    case "accepted":
      return { icon: FiCheckCircle, bgColor: "bg-orange-100", iconColor: "text-orange-500" };
    case "complete":
      return { icon: FiShield, bgColor: "bg-purple-100", iconColor: "text-purple-500" };
    case "cancelled":
      return { icon: FiXCircle, bgColor: "bg-red-100", iconColor: "text-red-500" };
    default:
      return { icon: FiCheckCircle, bgColor: "bg-gray-100", iconColor: "text-gray-500" };
  }
};

export default function AlertFeed() {
  return (
    <div className="mx-auto w-full md:w-[400px] lg:w-[400px] space-y-4">
      {notifications.map((notification) => {
        const { icon: Icon, bgColor, iconColor } = getNotificationStyles(notification.type);

        return (
          <div
            key={notification.id}
            className="flex items-start gap-4 p-4 bg-white rounded-lg shadow hover:bg-gray-100 transition cursor-pointer"
          >
            <div className={`p-2 rounded-lg ${bgColor}`}>
              <Icon className={`w-6 h-6 ${iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center gap-2">
                <p className="font-medium text-gray-900">{notification.title}</p>
                <span className="text-sm text-gray-500 whitespace-nowrap">{notification.time}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{notification.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
