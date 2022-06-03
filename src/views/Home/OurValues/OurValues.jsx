import { Col, Row, Typography, Grid, Divider } from "antd";
import BuisnessTimeSvg from "public/svg/BuisnessTimeSvg";

import ConsistencySvg from "public/svg/ConsistencySvg";
import MagnifyingGlassSvg from "public/svg/MagnifyingGlassSvg";
import ScalesSvg from "public/svg/ScalesSvg";
import CarouselMod from "src/components/CarouselMod";

import ValueCard from "src/components/ValueCard";

import style from "./OurValues.module.scss";

const { Title } = Typography;
const { useBreakpoint } = Grid;

const VALUES = {
  Integrity: {
    title: "Integrity",
    paragraph: " We keep our word, and do the right thing always, whether the client is present or not.",
  },
  Professionalism: {
    title: "Professionalism",
    paragraph: "We treat our clients with respect and inform them of services we provide that would benefit them.",
  },
  Consistency: {
    title: "Consistency",
    paragraph: "Our reliability is anchored on our commitment to maintain high service standards, sustainably.",
  },
  Accountability: {
    title: "Accountability",
    paragraph: "We keep our clients and other stakeholders well informed and updated about our dealings.",
  },
};

const OurValues = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const renderTitle = () => {
    return (
      <Row justify="center" align="center">
        <Col xs={24} sm={24} lg={8} className={style.container__header}>
          <Title level={1} className={style.container__header__title}>
            Our Values
          </Title>
        </Col>
        {isMobileOrTablet && (
          <Col xs={12} sm={12} className={style.container__divider}>
            <Divider className={style.container__divider__line} />
          </Col>
        )}
      </Row>
    );
  };

  const renderValues = () => {
    return (
      <Row className={style.container__values} gutter={[30, 0]} justify="center" align="middle">
        <ValueCard value={VALUES.Integrity} icon={<ScalesSvg />} />
        <ValueCard value={VALUES.Consistency} icon={<ConsistencySvg />} />
        <ValueCard value={VALUES.Accountability} icon={<MagnifyingGlassSvg />} />
        <ValueCard value={VALUES.Professionalism} icon={<BuisnessTimeSvg />} />
      </Row>
    );
  };

  const renderCarousel = () => {
    return (
      <CarouselMod arrows autoplay>
        <ValueCard value={VALUES.Integrity} icon={<ScalesSvg />} />
        <ValueCard value={VALUES.Consistency} icon={<ConsistencySvg />} />
        <ValueCard value={VALUES.Accountability} icon={<MagnifyingGlassSvg />} />
        <ValueCard value={VALUES.Professionalism} icon={<BuisnessTimeSvg />} />
      </CarouselMod>
    );
  };

  return (
    <Row gutter={[0, 48]} className={style.container} justify="center" align="middle">
      <Col xs={20} sm={20} lg={20}>
        {renderTitle()}
      </Col>
      <Col xs={20} lg={16} xl={22}>
        {isMobileOrTablet ? renderCarousel() : renderValues()}
      </Col>
    </Row>
  );
};

export default OurValues;
