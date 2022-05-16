import LandingSection from "./LandingSection";
import ClearingAndForwarding from "./ClearingAndForwarding";
import TransportAndLogistics from "./TransportAndLogistics/TransportAndLogistics";
import WarehouseSolutions from "./WarehouseSolutions/WarehouseSolutions";

import homeStyle from "./Home.module.scss";
import OurValues from "./OurValues/OurValues";
import OurNetwork from "./OurNetwork/OurNetwork";
import OurClients from "./OurClients/OurClients";

const Home = () => {
  return (
    <>
      <LandingSection />
      <ClearingAndForwarding class={homeStyle} />
      <TransportAndLogistics class={homeStyle} />
      <WarehouseSolutions class={homeStyle} />
      <OurValues class={homeStyle} />
      <OurNetwork class={homeStyle} />
      <OurClients class={homeStyle} />
    </>
  );
};

export default Home;
