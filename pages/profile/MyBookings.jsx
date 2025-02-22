import ProfileBackButton from "../../src/components/profile/ProfileBackButton";
import CustomComponent from "../shared/CustomComponent";

export default function MyBooking() {
  const booking = {
    service: "Elderly Care",
    price: "$10.00 hrs",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    paidDate: "12/01/2025",
    serviceDate: "13/01/2025",
    cancelledBy: "NM Sujon",
  };

  return (
    <CustomComponent>
      <div className="w-[400px] mx-auto my-16">
        <ProfileBackButton title="My Bookings" />

        {/* Booking Card */}
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
          <img
            src={booking.image}
            alt={booking.service}
            className="w-24 h-24 rounded-md object-cover"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-[#0D0D0D]">
                {booking.service}
              </h3>
              <span className="text-[#0084BF] font-semibold text-xs">
                {booking.price}
              </span>
            </div>
            <p className="text-[#6A6D76] text-sm">Paid on {booking.paidDate}</p>
            <p className="text-[#6A6D76] text-sm">
              Service date: {booking.serviceDate}
            </p>
            <p className="text-red-400 text-sm">
              Cancelled by {booking.cancelledBy}
            </p>
          </div>
        </div>
      </div>
    </CustomComponent>
  );
}
