import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Row, Typography } from "antd";

import style from "./TeamCard.module.scss";

const { Title } = Typography;

const TeamCard = (props) => {
  const { title } = props;
  return (
    <Col className={style.container} span={8}>
      <Card className={style.container__card} bordered bodyStyle={{ height: "100%", padding: "0" }}>
        <Row justify="space-between" align="middle" style={{ height: "100%" }}>
          <Col className={style.container__card__avatar} span={24}>
            <Avatar
              shape="square"
              size="large"
              icon={<UserOutlined style={{ width: "100%", height: "100%" }} />}
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col className={style.container__card__footer} span={24}>
            <Title className={style.container__card__footer__header} level={4}>
              {title}
            </Title>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default TeamCard;
