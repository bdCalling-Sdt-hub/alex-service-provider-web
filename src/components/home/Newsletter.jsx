import clockIcon from "../../assets/clock.png";
import paperPlane from "../../assets/plane.png";

export default function Newsletter() {
  return (
    <div className="max-w-[1700px] mx-auto py-16 relative bg-[#fafbfc]">
      <div className="bg-[#00BFB3] px-5 md:px-28 py-5 md:py-16 flex flex-col md:flex-row items-center justify-between relative">
        {/* Left Side Content */}
        <div className="text-white">
          <h2 className="text-6xl font-bold mb-5">
            Looking for a Better Care?
          </h2>
          <p className="text-lg mb-5 w-2/3">
            Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat
            faucibus nam purus sem. Urna pulvinar porttitor dignissim congue
            pellentesque ac hac.
          </p>
          <button className="bg-white text-black font-medium py-3 px-6 rounded-lg">
            Booking
          </button>
        </div>

        {/* Clock Icon */}
        <img
          src={clockIcon}
          alt="24/7 Support"
          className="hidden md:block absolute top-10 right-[300px] w-[200px] h-[200px]"
        />

        {/* Paper Plane */}
        <img
          src={paperPlane}
          alt="Paper Plane"
          className="hidden md:block absolute bottom-0 right-20 w-[170px] h-[130px]"
        />
        {/* </div> */}
      </div>
    </div>
  );
}
