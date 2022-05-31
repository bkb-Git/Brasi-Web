import { Col, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

import style from "./OurVision.module.scss";

const OurVision = () => {
  const renderTitle = () => {
    return (
      <Col xs={20} sm={20} lg={24} className={style.ourVision__header}>
        <Row justify="center" align="middle">
          <Col xs={18} sm={18} lg={6}>
            <Title level={1} className={style.ourVision__header__title}>
              Our Vision
            </Title>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderText = () => {
    return (
      <Col xs={20} sm={20} lg={16} className={style.ourVision__details}>
        <Paragraph className={style.ourVision__details__text}>
          To be the most efficient and trusted clearing and forwarding company in the East African Region and beyond.
        </Paragraph>
      </Col>
    );
  };

  return (
    <Row justify="center" align="middle" className={style.ourVision} style={{ marginBottom: "5rem" }}>
      {renderTitle()}
      {renderText()}
    </Row>
  );
};

export default OurVision;
