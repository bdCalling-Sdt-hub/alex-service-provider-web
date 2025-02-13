import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";

export default function Services() {
  const services = [
    {
      icon: LuBuilding2,
      title: "Resident Care",
      description:
        "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac.",
    },
    {
      icon: FaArrowRightArrowLeft,
      title: "Elderly Nutrition",
      description:
        "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac.",
    },
    {
      icon: LuBuilding2,
      title: "Resident Care",
      description:
        "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac.",
    },
    {
      icon: FaArrowRightArrowLeft,
      title: "Elderly Nutrition",
      description:
        "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac.",
    },
  ];

  return (
    <div className="bg-[#fafbfc] py-16">
      <div className="max-w-[1700px] mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#00BFB3] mb-10">
          Our Services
        </h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-xl hover:bg-[#E6FAF9] p-5 hover:shadow-md transition duration-300 flex flex-col justify-start items-start"
            >
              <div className="mb-5 inline-flex rounded-lg bg-[#00BFB3] p-3 text-white">
                <service.icon className="h-5 w-5 group-hover:scale-110 transition duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-start">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
