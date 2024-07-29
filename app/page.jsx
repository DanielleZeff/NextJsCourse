import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes.jsx";
/* import connectDB from "@/config/database"; */

const Home = /* async */ () => {
//Testing if the database is connected
    /* await connectDB(); */
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default Home;
