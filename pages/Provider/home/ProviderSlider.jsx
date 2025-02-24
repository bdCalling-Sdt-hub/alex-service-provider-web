import * as React from "react";
import CustomComponent from "../../../pages/shared/CustomComponent";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Offer your at-home services",
    description:
      "Let us know where you can travel to, when you’re available, and what service you want to offer.",
    image: "/provider/ps3.png",
  },
  {
    title: "Perform the services",
    description: "Complete the service for which you have been booked.",
    image: "/provider/ps2.png",
  },
  {
    title: "Earn money",
    description:
      "Receive the payment for the services you’ve provided in your account!",
    image: "/provider/ps1.png",
  },
];

export function ProviderSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <CustomComponent>
      <div className="relative w-[400px] h-[680px] mx-auto text-white flex flex-col items-center justify-center px-5 py-10">
        {/* Skip button */}
        <button
          onClick={() => {
            navigate("/workSchedule");
          }}
          className="absolute right-4 top-4 text-[#0084BF]"
        >
          Skip
        </button>

        {/* Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt="Onboarding illustration"
            className="max-w-md w-full h-auto"
          />
        </div>

        {/* Text content */}
        <div className="w-full text-center space-y-4">
          <h1 className="text-2xl font-semibold text-white">
            {slides[currentSlide].title}
          </h1>
          <p className="text-gray-400">{slides[currentSlide].description}</p>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 py-6">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-[#0084BF] w-6"
                    : "bg-gray-600 w-2"
                }`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={nextSlide}
            className="w-full bg-[#0084BF] py-4 text-black "
          >
            Next
          </button>
        </div>
      </div>
    </CustomComponent>
  );
}
