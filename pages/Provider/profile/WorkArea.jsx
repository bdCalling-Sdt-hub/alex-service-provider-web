import ProfileBackButton from "../../../src/components/profile/ProfileBackButton";
import CustomComponent from "../../shared/CustomComponent";

function WorkArea() {
  return (
    <CustomComponent>
      <div className="w-full  md:w-[400px] lg:w-[400px] px-5 mx-auto my-5 md:my-16">
        <div className="relative">
          <img
            src="/map.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-5 left-5">
            <ProfileBackButton title="Work Areas" />
          </div>
          <div className="absolute left-14  bottom-5  w-2/3 flex flex-1 flex-col items-center justify-center">
            <button
              className="w-full h-12 text-lg bg-[#0088cc]  text-white rounded-xl mt-10"
              // onClick={() => setShowModal2(false)}
            >
              Start Service
            </button>
          </div>
        </div>
      </div>
    </CustomComponent>
  );
}

export default WorkArea;
