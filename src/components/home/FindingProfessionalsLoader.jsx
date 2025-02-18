/* eslint-disable react/prop-types */
import CustomComponent from "../../../pages/shared/CustomComponent";

const reviews = [
  {
    id: 1,
    name: "User 1",
    avatar: "https://avatar.iran.liara.run/public/42",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: 2,
    name: "User 2",
    avatar: "https://avatar.iran.liara.run/public/1",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: 3,
    name: "User 3",
    avatar: "https://avatar.iran.liara.run/public/2",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
];

export default function FindingProfessionalsLoader() {
  return (
    <CustomComponent>
      <div className="flex flex-col items-center p-6">
        {reviews.map((review) => (
          <ReviewCard  key={review.id} review={review} />
        ))}
        <h2 className="text-[#0D0D0D] text-xl mt-4">
          Finding
          <span className="font-bold text-3xl text-blue-900">Elderly care</span>
          professionals
        </h2>
      </div>
    </CustomComponent>
  );
}


const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={index < rating ? "#facc15" : "none"}
          stroke="#facc15"
          strokeWidth="2"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77 5.82 21l1.18-6.86-5-4.87 6.91-1L12 2z"
          />
        </svg>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div className="flex items-center p-5 bg-white shadow-lg rounded-lg mb-4 w-full max-w-lg">
      <img
        src={review.avatar}
        alt={review.name}
        className="w-20 h-20 rounded-full border-2 border-teal-400 mr-4"
      />
      <div>
        <StarRating rating={review.rating} />
        <p className="text-gray-600 mt-2 text-sm">{review.review}</p>
      </div>
    </div>
  );
};
