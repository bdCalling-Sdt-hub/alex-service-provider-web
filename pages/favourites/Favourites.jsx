import FavouritesCard from "../../src/components/favourites/FavouritesCard";
import CustomComponent from "../shared/CustomComponent";

function Favourites() {
  return (
    <CustomComponent>
      <div className="w-full md:w-[400px] lg:w-[400px] px-5  mx-auto my-5 md:my-16">
        {/* Title */}
        <h1 className="text-2xl font-bold text-black">Service</h1>

        {/* Filter Services Based on Active Tab */}
        <div className="mt-4">
          <FavouritesCard />
        </div>
      </div>
    </CustomComponent>
  );
}

export default Favourites;
