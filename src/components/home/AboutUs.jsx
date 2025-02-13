import { LuSquareCheckBig } from "react-icons/lu";

function AboutUs() {
  return (
    <div className="bg-[#fafbfc]">
      <div className="max-w-[1700px] mx-auto px-4 py-12 lg:py-20">
        <div className=" grid lg:grid-cols-2 gap-10 items-center">
          <div className=" w-full rounded-lg overflow-hidden">
            <div className="w-[700px] h-[700px]">
              <img
                src="/about.png"
                alt="Caregiver supporting patient"
                className="w-[500px] h-[550px] object-cover rounded-lg relative  z-50"
              />
              {/* Teal border accents */}
              <div className="absolute w-[500px] h-[550px] border-4 top-44 left-44 border-teal-400 -mb-10 -mr-10 hidden lg:block z-10" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 flex flex-col justify-start items-start">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D0D0D]">
              About Us
            </h2>
            <p className="text-[#6A6D76] text-lg">
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
                  <span className="text-gray-400">{text}</span>
                </li>
              ))}
            </ul>
            <button className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-3 text-lg rounded-lg transition">
              Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
