import { Col, Row, Button, Typography } from "antd";

import Image from "next/image";
import WarehouseImg from "../../../../public/images/forklift.jpg";

import compStyle from "./WarehouseSolutions.module.scss";

const { Paragraph, Title } = Typography;

const WarehouseSolutions = (props) => {
  const { class: style } = props;

  const serviceTitle = () => {
    return (
      <Col className={compStyle.detailsHeader}>
        <Title level={1} className={compStyle.detailsTitle}>
          Warehousing Solutions
        </Title>
      </Col>
    );
  };

  const details = () => {
    return (
      <Row gutter={[0, 8]} justify="center" align="middle" style={{ flexDirection: "column" }}>
        <Col className={compStyle.detailsText}>
          <Paragraph strong style={{ textAlign: "left" }}>
            We offer tailored and spacious warehousing services and arrangements for our clients which are accessible to
            both the local and international air and sea ports, to ensure that their cargo is not only safe and secure,
            but also ready for hitch-free collection and delivery at the specified times.
          </Paragraph>
        </Col>
        <Col style={{ width: "60%", paddingRight: "10%" }}>
          <Button type="primary" block size="large">
            Read more
          </Button>
        </Col>
      </Row>
    );
  };

  const renderDetails = () => {
    return (
      <Col span={12} style={{ zIndex: 2, height: "100%" }}>
        <Row className={compStyle.details} gutter={[0, 48]} justify="center" align="middle">
          {serviceTitle()}
          {details()}
        </Row>
      </Col>
    );
  };

  const renderImage = () => {
    return (
      <Col span={12}>
        <Image src={WarehouseImg} alt="Warehousing Solutions" style={{ zIndex: 0 }} />
      </Col>
    );
  };

  return (
    <Row className={style.service} justify="center" align="middle">
      {renderDetails()}
      {renderImage()}
    </Row>
  );
};

export default WarehouseSolutions;
