import FavouritesCard from "../../src/components/favourites/FavouritesCard";
import CustomComponent from "../shared/CustomComponent";

function Favourites() {
  return (
    <CustomComponent>
      <div className="w-[400px] mx-auto my-16">
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
