import CustomComponent from "../../shared/CustomComponent";
import ProfileBackButton from "../../../src/components/profile/ProfileBackButton";
import { FaStar } from "react-icons/fa";

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Mr. Balu",
      image: "https://avatar.iran.liara.run/public/19",
      rating: 5,
      text: "Excellent service! Professional, reliable, and exceeded my expectations. Highly recommended!",
    },
    {
      id: 2,
      name: "Mr. John",
      image: "https://avatar.iran.liara.run/public/19",
      rating: 5,
      text: "Excellent service! Professional, reliable, and exceeded my expectations. Highly recommended!",
    },
    {
      id: 3,
      name: "Mr. Smith",
      image: "https://avatar.iran.liara.run/public/19",
      rating: 5,
      text: "Excellent service! Professional, reliable, and exceeded my expectations. Highly recommended!",
    },
  ];
  return (
    <CustomComponent>
      <div className="text-[#0d0d0d] w-full  md:w-[400px] lg:w-[400px] px-5 mx-auto my-5 md:my-16">
        {/* Header */}
        <ProfileBackButton title="Reviews" />

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex-shrink-0">
                  <img
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    className="h-20 w-20 rounded-full object-cover border border-gray-700"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium">{review.name}</h3>
                  <div className="flex items-center gap-1 my-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CustomComponent>
  );
}

export default Reviews;
