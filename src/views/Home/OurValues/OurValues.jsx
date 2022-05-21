import { Col, Row, Typography } from "antd";
import BuisnessTimeSvg from "public/svg/BuisnessTimeSvg";

import ConsistencySvg from "public/svg/ConsistencySvg";
import MagnifyingGlassSvg from "public/svg/MagnifyingGlassSvg";
import ScalesSvg from "public/svg/ScalesSvg";

import ValueCard from "src/components/ValueCard";

import style from "./OurValues.module.scss";

const { Title } = Typography;

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
  const renderTitle = () => {
    return <Title className={style.container__title}>Our Values</Title>;
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

  return (
    <Row gutter={[0, 25]} className={style.container} justify="center" align="middle">
      <Col xs={18}>{renderTitle()}</Col>
      <Col xs={20} lg={16} xl={22}>
        {renderValues()}
      </Col>
    </Row>
  );
};

export default OurValues;
