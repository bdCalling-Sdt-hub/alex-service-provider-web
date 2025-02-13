function BestCare() {
  return (
    <section className="bg-[#fafbfc] px-5 py-10 lg:py-16">
      <div className="max-w-[1600px] mx-auto flex flex-col-reverse md:flex-row gap-5 md:gap-10 items-center">
        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
          <h2 className="text-3xl sm:text-3xl lg:text-5xl font-bold text-[#0D0D0D] leading-tight">
            The Best Elderly Care Center For You.
          </h2>
          <p className="text-[#6A6D76] text-base sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat
            faucibus nam purus sem. Urna pulvinar porttitor dignissim congue
            pellentesque ac hac. Lorem ipsum dolor sit amet consectetur. Augue
            non malesuada placerat faucibus nam purus sem. Urna pulvinar
            porttitor dignissim congue pellentesque ac hac.
          </p>
          <button className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-3 text-lg rounded-lg transition mt-2 md:mt-10">
            Booking
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/about.png"
            alt="Caregiver supporting patient"
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[550px] h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default BestCare;
