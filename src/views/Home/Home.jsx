import { Col, Row } from "antd";
import LandingSection from "./LandingSection";
import ServiceSection from "./ServiceSection";

import homeStyle from "./Home.module.scss";
import OurValues from "./OurValues/OurValues";
import OurNetwork from "./OurNetwork/OurNetwork";
import OurClients from "./OurClients/OurClients";

import ClearingAndForwardingImg from "public/images/ClearingAndForwarding.jpg";
import TrailerImg from "public/images/trailerImg.jpg";
import WarehouseImg from "public/images/forklift.jpg";

const SERVICES = {
  CLEARING_AND_LOGISTICS: {
    title: 'Clearing and Forwarding',
    paragraph: `
      We offer our clients a one-stop shop solution for all their clearing and forwarding needs. Our staff teams
      are well trained and competent to handle even the most sophisticated projects in a reliable, safety oriented
      and professional way.
    `,
    image: ClearingAndForwardingImg
  },
  TRANSPORT_AND_LOGISTICS: {
    title: 'Transport & Logistics',
    paragraph: `
      We guarantee our clients safe handling of their shipments (packages, goods and merchandise) through load
      optimization arrangements to make sure that transporting, lifting, hauling, moving, carrying and delivery is
      done professionally.
    `,
    image: TrailerImg
  },
  WAREHOUSE_SOLUTIONS: {
    title: 'Warehousing Solutions',
    paragraph: `
      We offer tailored and spacious warehousing services and arrangements for our clients which are accessible to
      both the local and international air and sea ports, to ensure that their cargo is not only safe and secure,
      but also ready for hitch-free collection and delivery at the specified times.
    `,
    image: WarehouseImg
  }
};

const Home = () => {
  return (
    <>
      <LandingSection />
      <ServiceSection details={SERVICES.CLEARING_AND_LOGISTICS} />
      <ServiceSection details={SERVICES.TRANSPORT_AND_LOGISTICS} direction="right"/>
      <ServiceSection details={SERVICES.WAREHOUSE_SOLUTIONS} />
      <OurValues class={homeStyle} />
      <OurNetwork class={homeStyle} />
      <OurClients class={homeStyle} />
    </>
  );
};

export default Home;
