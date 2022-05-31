import { Col, Row, Typography } from "antd";

import Image from "next/image";

import PortImage from "public/images/PortImage2.jpg";

import style from "./LandingSection.module.scss";

const { Title } = Typography;

const LandingSection = () => {
  return (
    <Row className={style.landingPage}>
      <Col style={{ zIndex: 0 }} className={style.landingPage__imageContainer}>
        <Image src={PortImage} alt="Port Image" style={{ zIndex: 0 }} />
      </Col>
      <Col className={style.landingPage__title}>
        <Title level={1}>Reliable Clearing & Forwarding Services</Title>
      </Col>
    </Row>
  );
};

export default LandingSection;
