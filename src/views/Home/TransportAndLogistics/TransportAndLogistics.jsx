import { ReadOutlined } from "@ant-design/icons";
import { Col, Row, Button, Typography } from "antd";

import Image from "next/image";
import TrailerImg from "../../../../public/images/trailerImg.jpg";

import compStyle from "./TransportAndLogistics.module.scss";

const { Paragraph, Title } = Typography;

const TransportAndLogistics = (props) => {
  const { class: style } = props;

  const serviceTitle = () => {
    return (
      <Col className={compStyle.detailsHeader}>
        <Title level={1} className={compStyle.detailsTitle}>
          Transport & Logistics
        </Title>
      </Col>
    );
  };

  const details = () => {
    return (
      <Row gutter={[0, 8]} justify="center" align="middle" style={{ flexDirection: "column" }}>
        <Col className={compStyle.detailsText}>
          <Paragraph strong style={{ textAlign: "left" }}>
            We guarantee our clients safe handling of their shipments (packages, goods and merchandise) through load
            optimization arrangements to make sure that transporting, lifting, hauling, moving, carrying and delivery is
            done professionally.
          </Paragraph>
        </Col>
        <Col style={{ width: "60%", paddingRight: "10%" }}>
          <Button icon={<ReadOutlined />} type="primary" block size="large">
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
      <Col span={12} style={{ transform: "translate(10%,0)" }}>
        <Image src={TrailerImg} alt="Transport and Logistics" style={{ zIndex: 0 }} />
      </Col>
    );
  };

  return (
    <Row className={style.service} justify="center" align="middle">
      {renderImage()}
      {renderDetails()}
    </Row>
  );
};

export default TransportAndLogistics;
