import * as React from "react";
import CustomComponent from "../../../pages/shared/CustomComponent";

const slides = [
  {
    title: "Find your at-home service",
    description:
      "We offer almost everything: cleaning, private classes, beauty...",
    image: "/slide/slide1.png",
  },
  {
    title: "Find your at-home service",
    description:
      "We offer almost everything: cleaning, private classes, beauty...",
    image: "/slide/slide2.png",
  },
  {
    title: "Find your at-home service",
    description:
      "We offer almost everything: cleaning, private classes, beauty...",
    image: "/slide/slide3.png",
  },
];

export function HomeSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <CustomComponent>
      <div className="relative w-[360px] h-[680px] mx-auto text-white flex flex-col items-center justify-center px-5 py-10">
        {/* Skip button */}
        <button className="absolute right-4 top-4 text-teal-400">Skip</button>

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
                  currentSlide === index ? "bg-teal-400 w-6" : "bg-gray-600 w-2"
                }`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={nextSlide}
            className="w-full bg-teal-400 py-4 text-black hover:bg-teal-500"
          >
            Next
          </button>
        </div>
      </div>
    </CustomComponent>
  );
}
