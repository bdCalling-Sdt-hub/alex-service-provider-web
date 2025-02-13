import AboutUs from "../../src/components/home/AboutUs";
import BestCare from "../../src/components/home/BestCare";
import Hero from "../../src/components/home/Hero";
import Newsletter from "../../src/components/home/Newsletter";
import Reviews from "../../src/components/home/Reviews";
import Services from "../../src/components/home/Services";

function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Reviews />
      <BestCare />
      <Newsletter />
    </>
  );
}

export default Home;
