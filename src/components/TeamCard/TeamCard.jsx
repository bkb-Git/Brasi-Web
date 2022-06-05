import { MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";

import Image from "next/image";

import style from "./TeamCard.module.scss";

const { Title, Paragraph } = Typography;

const TeamCard = (props) => {
  const {
    member: { title, name, contact, email, img },
  } = props;

  const renderImage = () => {
    return (
      <Col className={style.container__card__image}>
        <Image id={title} src={img} layout="fill" />
      </Col>
    );
  };

  const renderTitle = () => {
    return (
      <Col span={18}>
        <Title className={style.container__card__footer__header} level={4}>
          {title}
        </Title>
      </Col>
    );
  };

  const renderName = () => {
    return (
      <Col span={18} className={style.container__card__footer__paragraph}>
        <UserOutlined className={style.container__card__footer__paragraph__icon} />
        <Title className={style.container__card__footer__paragraph__name}>{name}</Title>
      </Col>
    );
  };

  const renderNumber = () => {
    return (
      <Col span={18} className={style.container__card__footer__paragraph}>
        <PhoneOutlined className={style.container__card__footer__paragraph__icon} />
        <Paragraph className={style.container__card__footer__paragraph__text} level={5}>
          {contact}
        </Paragraph>
      </Col>
    );
  };

  const renderEmail = () => {
    return (
      <Col span={18} className={style.container__card__footer__paragraph}>
        <MailOutlined className={style.container__card__footer__paragraph__icon} />
        <Paragraph className={style.container__card__footer__paragraph__text} level={5}>
          {email}
        </Paragraph>
      </Col>
    );
  };

  return (
    <Col xs={24} sm={24} lg={8} className={style.container}>
      <Card className={style.container__card} bordered bodyStyle={{ height: "100%", padding: "0" }}>
        <Row justify="space-between" align="middle" style={{ height: "100%" }}>
          {renderImage()}
          <Row justify="center" align="middle" className={style.container__card__footer}>
            {renderTitle()}
            {renderName()}
            {renderNumber()}
            {renderEmail()}
          </Row>
        </Row>
      </Card>
    </Col>
  );
};

export default TeamCard;
