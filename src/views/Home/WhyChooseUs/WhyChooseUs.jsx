import { Row, Typography, Col, Grid, Divider } from "antd";

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

const { useBreakpoint } = Grid;

const WhyChooseUs = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const renderTitle = () => {
    return (
      <Col xs={20} sm={20} lg={20}>
        <Row justify="center" align="middle">
          <Col xs={20} sm={20} lg={8} className={style.container__header}>
            <Title level={1} className={style.container__header__title}>Why Choose Us</Title>
          </Col>
          {isMobileOrTablet && (
            <Col xs={12} sm={12} className={style.container__divider}>
              <Divider className={style.container__divider__line} />
            </Col>
          )}
        </Row>
      </Col>
    );
  };

  const renderCarousel = () => {
    return (
      <Col xs={20} sm={20} lg={16}>
        <CarouselMod autoplay arrows>
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
