import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Head from "next/head";

import Loader from "src/components/Loader";
import MainLayout from "src/components/layout/MainLayout";

import ClearingAndForwardingImg from "public/images/ClearingAndForwarding.jpg";
import TrailerImg from "public/images/trailerImg.jpg";
import WarehouseImg from "public/images/forklift.jpg";

import "styles/index.scss";

const SERVICES = {
  CLEARING_AND_LOGISTICS: {
    title: "Clearing and Forwarding",
    link: "/services/Clearing-&-Forwarding",
    paragraph: `
      We offer our clients a one-stop shop solution for all their clearing and forwarding needs. Our staff teams
      are well trained and competent to handle even the most sophisticated projects in a reliable, safety oriented
      and professional way.
    `,
    image: ClearingAndForwardingImg,
    get fullParagraph() {
      return `${this.paragraph} These
    include, but are not limited to:`;
    },
    services: [
      "Clearance of Cargo of all kinds – both local and transit Cargo.",
      "Customs Brokerage Services",
      "Air and Sea Freight",
      "Customs Clearance and payment of applicable fees on clients’ behalf.",
      "Clearance and Delivery/Forwarding to Customers.",
      "Import and Export Documentation Facilitation",
      "Consolidation of Cargo according to Client Specifications",
      "Booking and Shipping Clients’ Cargo To and From The Local Port",
      "Transferring All Types of Cargo From the Local Port – Both Local & Transit Cargo",
      "Handling different unique queries, assignments and projects on behalf of our clients which may arise from time to time.",
    ],
  },
  TRANSPORT_AND_LOGISTICS: {
    title: "Transport & Logistics",
    link: "/services/Transport-&-Logistics",
    paragraph: `
      We guarantee our clients safe handling of their shipments (packages, goods and merchandise) through load
      optimization arrangements to make sure that transporting, lifting, hauling, moving, carrying and delivery is
      done professionally.
    `,
    image: TrailerImg,
    get fullParagraph() {
      return `${this.paragraph} We
      have a fleet of trucks and delivery vans driven by staff who are careful and
      knowledgeable enough to make sure the pick-up and delivery are done in the best
      way, through the best route and in the most affordable way for their benefit. Through
      our cargo tracking system, we are able to locate the location and process level of
      every cargo therefore advise our clients effectively on delivery times. Our transport
      and logistics services include, but are not limited to:`;
    },
    services: [
      "Transportation",
      "Client Advisory Services on Transportation and Logistics.",
      "Moving of Cargo and Shipments",
      "Processing Cargo Permits and other related Permits",
      "Clearance and Delivery/Forwarding to Customers.",
      "Tracking their Cargo and Organizing for Escort where Necessary",
    ],
  },
  WAREHOUSE_SOLUTIONS: {
    title: "Warehousing Solutions",
    link: "/services/Warehousing-Solutions",
    paragraph: `
      We offer tailored and spacious warehousing services and arrangements for our clients which are accessible to
      both the local and international air and sea ports, to ensure that their cargo is not only safe and secure,
      but also ready for hitch-free collection and delivery at the specified times.
    `,
    image: WarehouseImg,
    get fullParagraph() {
      return `${this.paragraph} These
    include:`;
    },
    services: [
      "Insured and spacious warehousing space",
      "Warehousing space at ICDs for goods carted direct at these particular centers",
      "Safe Goods and Merchandise storage.",
      "Control checks on the entry and exit of goods and merchandise for our clients.",
    ],
  },
};

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  const isDesktop = useMediaQuery({ minWidth: 1200 });

  if (loading) return <Loader />;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>
      </Head>
      <MainLayout breakpoint={isDesktop}>
        <Component breakpoint={isDesktop} services={SERVICES} {...pageProps} />
      </MainLayout>
    </>
  );
};

export default MyApp;
