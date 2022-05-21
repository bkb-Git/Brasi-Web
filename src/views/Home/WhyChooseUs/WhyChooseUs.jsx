import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Row, Typography, Col, Carousel } from "antd";

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
    paragraph: "Something about competetive pricing",
  },
  fastDelivery: {
    svg: { first: <FastTruckSvg />, second: <DeliverySvg /> },
    title: "Fast Delivery",
    paragraph: "Something about speed delivery",
  },
  warehousing: {
    svg: { first: <WarehouseSvg />, second: <WarehouseLogsSvg /> },
    title: "Local Warehousing Solutions",
    paragraph: "Something about local warehousing",
  },
  timelyUpdate: {
    svg: { first: <GaugeSvg />, second: <UpdateSvg /> },
    title: "Timely Updates",
    paragraph: "Timely information on client status code",
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
        <Carousel
          arrows
          autoplay
          fade
          prevArrow={<LeftOutlined className="arrow" id="prevArrow" />}
          nextArrow={<RightOutlined className="arrow" id="nextArrow" />}
          className={style.container__carousel}
        >
          <CommitmentCard commitment={COMMITMENTS.customerCare} />
          <CommitmentCard right commitment={COMMITMENTS.competetivePricing} />
          <CommitmentCard commitment={COMMITMENTS.fastDelivery} />
          <CommitmentCard right commitment={COMMITMENTS.warehousing} />
          <CommitmentCard commitment={COMMITMENTS.timelyUpdate} />
        </Carousel>
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
