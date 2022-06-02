import { Col, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

import style from "./OurVision.module.scss";

const OurVision = () => {
  const renderTitle = () => {
    return (
      <Row justify="center" align="middle">
        <Col xs={18} sm={18} lg={6}>
          <Title level={1} className={style.ourVision__header__title}>
            Our Vision
          </Title>
        </Col>
      </Row>
    );
  };

  const renderText = () => {
    return (
      <Title level={3} className={style.ourVision__details__text}>
        To be the most efficient and trusted clearing and forwarding company in the East African Region and beyond.
      </Title>
    );
  };

  return (
    <Row gutter={[0, 32]} justify="center" align="middle" className={style.ourVision}>
      <Col xs={20} sm={20} lg={24} className={style.ourVision__header}>
        {renderTitle()}
      </Col>
      <Col xs={22} sm={22} lg={18} className={style.ourVision__details}>
        {renderText()}
      </Col>
    </Row>
  );
};

export default OurVision;
