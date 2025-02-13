"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    name: "James Smith",
    company: "ABC Softwares",
    image: "https://avatar.iran.liara.run/public/47",
    review:
      "Lorem ipsum dolor sit amet consectetur. Amet sed tellus elementum mauris. Libero maecenas eget tellus morbi diam enim euismod egestas. Adipiscing fringilla quis justo adipiscing eget aenean sollicitudin. Nibh ut sed sodales magna risus tellus. Nulla ut arcu ac justo blandit tincidunt ante. Tincidunt libero urna ut aliquet vitae nunc quisque sapien cursus.",
  },
  {
    name: "Sophia Johnson",
    company: "XYZ Tech",
    image: "https://avatar.iran.liara.run/public/46",
    review:
      "Libero maecenas eget tellus morbi diam enim euismod egestas. Adipiscing fringilla quis justo adipiscing eget aenean sollicitudin. Nibh ut sed sodales magna risus tellus. Nulla ut arcu ac justo blandit tincidunt ante.",
  },
  {
    name: "David Williams",
    company: "Web Solutions",
    image: "https://avatar.iran.liara.run/public/45",
    review:
      "Adipiscing fringilla quis justo adipiscing eget aenean sollicitudin. Nibh ut sed sodales magna risus tellus. Nulla ut arcu ac justo blandit tincidunt ante. Tincidunt libero urna ut aliquet vitae nunc quisque sapien cursus.",
  },
];

export default function Reviews() {
  return (
    <div className="bg-[#ECF9F9] py-16 ">
      <div className="max-w-[1600px] mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#00BFB3] mb-12">
          Client Reviews
        </h2>

        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          className="pb-10"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-transparent text-center px-6">
                <div className="flex items-center justify-start text-[#00BFB3] text-xl">
                  <FaQuoteLeft />
                </div>
                <p className="text-gray-700 text-lg mt-4 leading-relaxed">
                  {review.review}
                </p>
                <div className="flex items-center justify-end text-[#00BFB3] text-xl mt-2">
                  <FaQuoteRight />
                </div>
                <div className="mt-2 mb-10 flex justify-center items-center gap-2">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[#00BFB3] mt-2">
                      {review.name}
                    </h3>
                    <p className="text-gray-500">{review.company}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
