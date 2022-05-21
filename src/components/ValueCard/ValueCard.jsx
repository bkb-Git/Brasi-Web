import { Card, Row, Col, Typography } from "antd";

import style from "./ValueCard.module.scss";

const { Title, Paragraph } = Typography;

const ValueCard = (props) => {
  const { value, icon } = props;
  const { title, paragraph } = value;

  const renderHeader = () => {
    return (
      <Col span={24}>
        <Row gutter={[0, 16]} justify="center" align="center" style={{ flexDirection: "column" }}>
          <Col className={style.value__card__icon}>{icon}</Col>
          <Title level={3} className={style.value__card__title}>
            {title}
          </Title>
        </Row>
      </Col>
    );
  };

  const renderParagraph = () => {
    return (
      <Col span={24}>
        <Paragraph className={style.value__card__text}>{paragraph}</Paragraph>
      </Col>
    );
  };

  return (
    <Col className={style.value} span={6}>
      <Card bordered={false} className={style.value__card} bodyStyle={{ height: "100%", padding: "2em 0px" }}>
        <Row justify="center" align="middle" style={{ height: "100%" }}>
          {renderHeader()}
          {renderParagraph()}
        </Row>
      </Card>
    </Col>
  );
};

export default ValueCard;
