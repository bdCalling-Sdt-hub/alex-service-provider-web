import React from "react";
import CustomComponent from "../../../pages/shared/CustomComponent";
import { useNavigate } from "react-router-dom";

const reviews = [
  {
    id: 1,
    name: "User 1",
    avatar: "https://i.pravatar.cc/60?img=1",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: 2,
    name: "User 2",
    avatar: "https://i.pravatar.cc/60?img=2",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: 3,
    name: "User 3",
    avatar: "https://i.pravatar.cc/60?img=3",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
];

export default function FindingProfessionals() {
  return (
    <CustomComponent>
      <div className="flex flex-col items-center p-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
        <h2 className="text-gray-600 text-xl mt-4">
          Finding <span className="font-bold text-3xl text-blue-900">Elderly care</span>{" "}
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
        <span key={index} className="text-yellow-400 text-2xl">
          {index < rating ? "★" : "☆"}
        </span>
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
        className="w-16 h-16 rounded-full border-2 border-teal-400 mr-4"
      />
      <div>
        <StarRating rating={review.rating} />
        <p className="text-gray-600 mt-2 text-sm">{review.review}</p>
      </div>
    </div>
  );
};
