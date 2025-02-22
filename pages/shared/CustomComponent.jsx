/* eslint-disable react/prop-types */

import AboutUs from "../../src/components/home/AboutUs";
import BestCare from "../../src/components/home/BestCare";
import Newsletter from "../../src/components/home/Newsletter";
import Reviews from "../../src/components/home/Reviews";
import Services from "../../src/components/home/Services";

function CustomComponent({ children }) {
  return (
    <div className="overflow-x-hidden bg-[#f2f2f2]">
      <div>{children}</div>
      <AboutUs />
      <Services />
      <Reviews />
      <BestCare />
      <Newsletter />
    </div>
  );
}

export default CustomComponent;
