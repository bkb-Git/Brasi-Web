import { Col, Row } from "antd";

import Image from "next/image";

import PortImage from "public/images/PortImage2.jpg";

import style from "./LandingSection.module.scss";

const LandingSection = () => {
  return (
    <Row className={style.landingPage}>
      <Col style={{ zIndex: 0 }}>
        <Image src={PortImage} alt="Port Image" style={{ zIndex: 0 }} />
      </Col>
      <Col className={style.landingPage__title}>
        <h1>Reliable Clearing & Forwarding Services</h1>
      </Col>
    </Row>
  );
};

export default LandingSection;
