import { Col, Row, Typography } from "antd";
import Image from "next/image";

import style from "./Service.module.scss";

const { Title, Paragraph } = Typography;

const ServiceCard = (props) => {
  const { services: serviceObj } = props;
  const { title, image, fullParagraph, services } = serviceObj;

  const renderTitle = () => {
    return (
      <>
        <Image id={title} src={image} alt={`${title} loglink logistics service `} />
        <Title className={style.service__header__title} level={1}>
          {title}
        </Title>
      </>
    );
  };

  const renderText = () => <Paragraph>{fullParagraph}</Paragraph>;

  const renderList = () => {
    return (
      <Row gutter={[0, 16]} className={style.service__list__container} justify="center" align="middle">
        {services.map((item, index) => {
          return (
            <li key={index + 1} className={style.service__list__container__item}>
              {item}
            </li>
          );
        })}
      </Row>
    );
  };

  return (
    <Row justify="center" align="middle" className={style.service}>
      <Col xs={24} sm={24} lg={24} className={style.service__header}>
        {renderTitle()}
      </Col>
      <Col xs={20} sm={20} lg={16} className={style.service__text}>
        {renderText()}
      </Col>
      <Col xs={22} sm={22} lg={16} className={style.service__list}>
        {renderList()}
      </Col>
    </Row>
  );
};

export default ServiceCard;
