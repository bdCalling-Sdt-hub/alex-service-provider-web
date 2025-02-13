function BestCare() {
  return (
    <div className="bg-[#fafbfc] py-16">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-10 justify-center items-center">
        <div className="w-1/2 flex flex-col justify-start items-start ml-0 md:ml-20 lg:ml-20">
          <h2 className="w-[450px] text-4xl lg:text-5xl font-bold text-[#0D0D0D]">
            The Best Eldery Care Center For You.
          </h2>
          <p className="text-[#6A6D76] text-lg mt-10">
            Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat
            faucibus nam purus sem. Urna pulvinar porttitor dignissim congue
            pellentesque ac hac.Lorem ipsum dolor sit amet consectetur. Augue
            non malesuada placerat faucibus nam purus sem. Urna pulvinar
            porttitor dignissim congue pellentesque ac hac. Viverra donec nulla
            id enim posuere donec morbi dolor. Eu adipiscing massa ut proin
            mauris orci tincidunt ac in.
          </p>
          <button className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-3 text-lg rounded-lg transition mt-10">
            Booking
          </button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="/about.png"
            alt="Caregiver supporting patient"
            className="w-[500px] h-[550px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default BestCare;
