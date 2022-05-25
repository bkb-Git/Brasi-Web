import LandingSection from "./LandingSection";
import ServiceSection from "./ServiceSection";
import OurValues from "./OurValues/OurValues";
import OurNetwork from "./OurNetwork/OurNetwork";
import OurClients from "./OurClients/OurClients";
import WhyChooseUs from "./WhyChooseUs";

const Home = (props) => {
  const { services } = props;
  return (
    <>
      <LandingSection />
      <ServiceSection details={services.CLEARING_AND_LOGISTICS} />
      <ServiceSection details={services.TRANSPORT_AND_LOGISTICS} direction="right" />
      <ServiceSection details={services.WAREHOUSE_SOLUTIONS} />
      <WhyChooseUs />
      <OurValues />
      <OurNetwork />
      <OurClients />
    </>
  );
};

export default Home;
