import LandingSection from "./LandingSection";
import OurExpertise from "./OurExpertise/OurExpertise";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <LandingSection />
      <OurExpertise class={style} />
    </>
  );
};

export default Home;
