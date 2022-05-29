import { Col, Row, Typography } from "antd";
import Image from "next/image";

import style from "./Service.module.scss";

const { Title, Paragraph } = Typography;

const ServiceCard = (props) => {
  const { services: serviceObj } = props;
  const { title, image, fullParagraph, services } = serviceObj;

  const renderTitle = () => {
    return (
      <Col xs={24} sm={24} lg={24} className={style.service__header}>
        <Image id={title} src={image} />
        <Title className={style.service__header__title} level={1}>
          {title}
        </Title>
      </Col>
    );
  };

  const renderText = () => {
    return (
      <Col xs={20} sm={20} lg={16} className={style.service__text}>
        <Paragraph>{fullParagraph}</Paragraph>
      </Col>
    );
  };

  const renderList = () => {
    return (
      <Col xs={19} sm={19} lg={16} className={style.service__list}>
        <Row gutter={[0, 16]} className={style.service__list__container} justify="center" align="middle">
          {services.map((item, index) => {
            return (
              <li key={index + 1} className={style.service__list__container__item}>
                {item}
              </li>
            );
          })}
        </Row>
      </Col>
    );
  };

  return (
    <Row justify="center" align="middle" className={style.service}>
      {renderTitle()}
      {renderText()}
      {renderList()}
    </Row>
  );
};

export default ServiceCard;
