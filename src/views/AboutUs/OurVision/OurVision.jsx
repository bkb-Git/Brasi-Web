import { Col, Divider, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

import style from "./OurVision.module.scss";

const OurVision = () => {
  const renderTitle = () => {
    return (
      <Row justify="center" align="middle" style={{ width: "100%", flexDirection: "column" }}>
        <Col span={8} style={{ width: "30%" }}>
          <Title className={style.title}>Our Vision</Title>
        </Col>
      </Row>
    );
  };

  const renderText = () => {
    return (
      <Col className={style.text} span={16}>
        <Paragraph>
          To be the most efficient and trusted clearing and forwarding company in the East African Region and beyond.
        </Paragraph>
      </Col>
    );
  };

  return (
    <Row justify="center" align="middle" style={{ marginBottom: "5rem" }}>
      {renderTitle()}
      {renderText()}
    </Row>
  );
};

export default OurVision;
