export default function Hero() {
  return (
    <div className="flex items-center justify-center bg-[#F2F2F2] py-10 md:py-16">
      <div className="relative w-[300px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[500px] lg:h-[600px]">
        {/* Center Item */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-20 h-20 md:w-40 md:h-40 bg-white rounded-full shadow-lg">
          <img src="/icon/phone.png" alt="Support" className="w-8 md:w-12 h-8 md:h-12" />
          <p className="text-blue-500 font-semibold">Support</p>
        </div>

        {/* Circular Items */}
        {[
          { name: "Home", icon: "/icon/house.png", top: "10%", left: "50%" },
          {
            name: "Cleaning",
            icon: "/icon/spray.png",
            top: "25%",
            left: "85%",
          },
          { name: "Care", icon: "/icon/Group.png", bottom: "15%", left: "85%" },
          {
            name: "Handyman",
            icon: "/icon/toy.png",
            bottom: "-10%",
            left: "50%",
          },
          {
            name: "Others",
            icon: "/icon/prize.png",
            bottom: "15%",
            left: "15%",
          },
          { name: "Pets", icon: "/icon/icon.png", top: "25%", left: "20%" },
        ].map((item, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center justify-center w-20 h-20 md:w-32 md:h-32 bg-white rounded-full shadow-lg"
            style={{
              top: item.top,
              bottom: item.bottom,
              left: item.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <img src={item.icon} alt={item.name} className="w-8 md:w-10 h-8 md:h-10" />
            <p className="text-xs md:text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

