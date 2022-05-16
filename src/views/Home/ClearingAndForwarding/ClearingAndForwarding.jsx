import { ReadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";

import Image from "next/image";
import ClearingAndForwardingImg from "../../../../public/images/ClearingAndForwarding.jpg";

import compStyle from "./ClearingAndForwarding.module.scss";

const { Paragraph, Title } = Typography;

const ClearingAndForwarding = (props) => {
  const { class: style } = props;

  const serviceTitle = () => {
    return (
      <Col className={compStyle.detailsHeader}>
        <Title level={1} className={compStyle.detailsTitle}>
          Clearing and Forwarding
        </Title>
      </Col>
    );
  };

  const details = () => {
    return (
      <Row gutter={[0, 8]} justify="center" align="middle" style={{ flexDirection: "column" }}>
        <Col className={compStyle.detailsText}>
          <Paragraph strong style={{ textAlign: "left" }}>
            We offer our clients a one-stop shop solution for all their clearing and forwarding needs. Our staff teams
            are well trained and competent to handle even the most sophisticated projects in a reliable, safety oriented
            and professional way.
          </Paragraph>
        </Col>
        <Col style={{ width: "60%", paddingRight: "10%" }}>
          <Button icon={<ReadOutlined />} type="primary" block size="large" style={{ fontWeight: "bold" }}>
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
        <Image src={ClearingAndForwardingImg} alt="Port Clearing and Forwarding" style={{ zIndex: 0 }} />
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

export default ClearingAndForwarding;
