import { Card, Col, Typography } from "antd";

import style from "./ValueCard.module.scss";

const { Title, Paragraph } = Typography;

const ValueCard = (props) => {
  const { title, paragraph } = props.value;

  return (
    <Col className={style.value} span={6}>
      <Card hoverable className={style.value__card} bodyStyle={{ height: "100%", padding: "2em 0px" }}>
        <Title level={3} className={style.value__card__title}>
          {title}
        </Title>
        <Paragraph className={style.value__card__text}>{paragraph}</Paragraph>
      </Card>
    </Col>
  );
};

export default ValueCard;
