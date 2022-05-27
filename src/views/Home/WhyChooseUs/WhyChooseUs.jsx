import { Row, Typography, Col } from "antd";

import ClockSvg from "public/svg/ClockSvg";
import CustomerCareSvg from "public/svg/CustomerCareSvg";
import DeliverySvg from "public/svg/DeliverySvg";
import FastTruckSvg from "public/svg/FastTruckSvg";
import GaugeSvg from "public/svg/GaugeSvg";
import MarketingSvg from "public/svg/MarketingSvg";
import MoneyBillsSvg from "public/svg/MoneyBillsSvg";
import UpdateSvg from "public/svg/UpdateSvg";
import WarehouseLogsSvg from "public/svg/WarehouseLogsSvg";
import WarehouseSvg from "public/svg/WarehouseSvg";
import CarouselMod from "src/components/CarouselMod";

import CommitmentCard from "src/components/CommitmentCard/CommitmentCard";

import style from "./WhyChooseUs.module.scss";

const COMMITMENTS = {
  customerCare: {
    svg: { first: <ClockSvg />, second: <CustomerCareSvg /> },
    title: "24-hour Customer Care",
    paragraph: "We offer 24 hour customer care , whether day or night we are here to answer any inquires you may have.",
  },
  competetivePricing: {
    svg: { first: <MoneyBillsSvg />, second: <MarketingSvg /> },
    title: "Competetive Pricing",
    paragraph: "Ready to negotiate to achieve a win-win situation",
  },
  fastDelivery: {
    svg: { first: <FastTruckSvg />, second: <DeliverySvg /> },
    title: "Fast Delivery",
    paragraph: "Efficient transport network and prompt processing",
  },
  warehousing: {
    svg: { first: <WarehouseSvg />, second: <WarehouseLogsSvg /> },
    title: "Local Warehousing Solutions",
    paragraph:
      "We offer suggestions according to our client's needs from a range of our strategically located warehouse partners.",
  },
  timelyUpdate: {
    svg: { first: <GaugeSvg />, second: <UpdateSvg /> },
    title: "Timely Updates",
    paragraph: "Dedicated to keeping our clients informed through out the transaction process.",
  },
};

const { Title } = Typography;

const WhyChooseUs = () => {
  const renderTitle = () => {
    return (
      <Row justify="center" align="middle" style={{ width: "100%" }}>
        <Col span={8} style={{ marginBottom: "4em" }}>
          <Title className={style.container__title}>Why Choose Us</Title>
        </Col>
      </Row>
    );
  };

  const renderCarousel = () => {
    return (
      <Col span={16}>
        <CarouselMod autoplay>
          <CommitmentCard commitment={COMMITMENTS.customerCare} />
          <CommitmentCard right commitment={COMMITMENTS.competetivePricing} />
          <CommitmentCard commitment={COMMITMENTS.fastDelivery} />
          <CommitmentCard right commitment={COMMITMENTS.warehousing} />
          <CommitmentCard commitment={COMMITMENTS.timelyUpdate} />
        </CarouselMod>
      </Col>
    );
  };

  return (
    <Row className={style.container} justify="center" align="middle">
      {renderTitle()}
      {renderCarousel()}
    </Row>
  );
};

export default WhyChooseUs;
