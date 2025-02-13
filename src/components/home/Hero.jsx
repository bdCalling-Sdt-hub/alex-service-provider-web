export default function Hero() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px]">
        {/* Center Item */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-lg">
          <img src="/icon/phone.png" alt="Support" className="w-12 h-12" />
          <p className="text-blue-500 font-semibold">Support</p>
        </div>

        {/* Circular Items */}
        {[
          { name: "Home", icon: "/icon/home.png", top: "10%", left: "50%" },
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
          { name: "Pets", icon: "/icons/pets.png", top: "25%", left: "20%" },
        ].map((item, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-white rounded-full shadow-lg"
            style={{
              top: item.top,
              bottom: item.bottom,
              left: item.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <img src={item.icon} alt={item.name} className="w-10 h-10" />
            <p className="text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
