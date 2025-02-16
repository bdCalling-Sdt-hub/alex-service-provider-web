// import { LuSquareCheckBig } from "react-icons/lu";

// function AboutUs() {
//   return (
//     <div className="bg-[#fafbfc]">
//       <div className="max-w-[1700px] mx-auto px-4 py-12 lg:py-20">
//         <div className=" grid lg:grid-cols-2 gap-10 items-center">
//           <div className=" w-full rounded-lg overflow-hidden">
//             <div className="w-[700px] h-[700px] relative">
//               <img
//                 src="/about.png"
//                 alt="Caregiver supporting patient"
//                 className="w-[400px] md:w-[500px] h-[350px] md:h-[550px] object-cover rounded-lg z-50"
//               />
//               {/* Teal border accents */}
//               <div className="absolute w-[500px] h-[550px] border-4 top-10 left-10 border-teal-400 -mb-10 -mr-10 hidden lg:block z-10" />
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="space-y-6 flex flex-col justify-start items-start">
//             <h2 className="text-4xl lg:text-5xl font-bold text-[#0D0D0D]">
//               About Us
//             </h2>
//             <p className="text-[#6A6D76] text-lg">
//               Lorem ipsum dolor sit amet consectetur. Augue non malesuada
//               placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim
//               congue pellentesque ac hac.
//             </p>
//             <ul className="space-y-4">
//               {[
//                 "Lorem ipsum dolor sit amet consectetur.",
//                 "Augue non malesuada placerat faucibus nam purus sem.",
//                 "Urna pulvinar porttitor dignissim congue pellentesque ac hac.",
//                 "Eu adipiscing massa ut proin mauris orci tincidunt ac in.",
//               ].map((text, index) => (
//                 <li key={index} className="flex items-start gap-3">
//                   <LuSquareCheckBig className="h-5 w-5 text-teal-400 mt-1" />
//                   <span className="text-gray-400">{text}</span>
//                 </li>
//               ))}
//             </ul>
//             <button className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-3 text-lg rounded-lg transition">
//               Booking
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutUs;

import { LuSquareCheckBig } from "react-icons/lu";

function AboutUs() {
  return (
    <section>
      <div className="max-w-[1700px] mx-auto px-5 md:px-16 lg:px-20 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="relative w-full flex justify-center">
            <div className="relative w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
              <img
                src="/about.png"
                alt="Caregiver supporting patient"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              {/* Teal border accents (hidden on smaller screens) */}
              <div className="absolute top-5 left-5 w-full h-full border-4 border-teal-400 hidden lg:block -z-10" />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-start space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0D0D]">
              About Us
            </h2>
            <p className="text-[#6A6D76] text-base sm:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada
              placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim
              congue pellentesque ac hac.
            </p>
            <ul className="space-y-4">
              {[
                "Lorem ipsum dolor sit amet consectetur.",
                "Augue non malesuada placerat faucibus nam purus sem.",
                "Urna pulvinar porttitor dignissim congue pellentesque ac hac.",
                "Eu adipiscing massa ut proin mauris orci tincidunt ac in.",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <LuSquareCheckBig className="h-5 w-5 text-teal-400 mt-1" />
                  <span className="text-gray-500 text-sm sm:text-base">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
            <button className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-3 text-lg rounded-lg transition">
              Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
