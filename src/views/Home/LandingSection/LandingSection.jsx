import { Col, Row } from "antd";

import Image from "next/image";

import PortImage from "../../../../public/images/PortImage2.jpg";
// import Port2Image from "../../../../public/images/Port2Img2.jpg";
// import Warehouse1Img1 from "../../../../public/images/Warehouse1Img1.jpg";
// import Ship1Img1 from "../../../../public/images/Shipping1Img1.jpg";

import style from "./LandingSection.module.scss";

const LandingSection = () => {
  return (
    <Row className={style.landingPage}>
      <Col style={{ zIndex: 0 }}>
        <Image src={PortImage} alt="Port Image" style={{ zIndex: 0 }} />
      </Col>
      <Col className={style.title}>
        <h1>Reliable Clearing & Forwarding Services</h1>
      </Col>
    </Row>
  );
};

export default LandingSection;
