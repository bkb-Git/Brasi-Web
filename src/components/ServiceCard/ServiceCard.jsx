import { Col, Row, Typography } from "antd";
import Image from "next/image";

import style from "./Service.module.scss";

const { Title, Paragraph } = Typography;

const ServiceCard = (props) => {
  const { services: serviceObj } = props;
  const { title, image, fullParagraph, services } = serviceObj;

  console.log(services);

  const renderTitle = () => {
    return (
      <Col className={style.header} span={24}>
        <Image id={title} src={image} />
        <Title className={style.header__title} level={1}>
          {title}
        </Title>
      </Col>
    );
  };

  const renderText = () => {
    return (
      <Col className={style.text} span={16}>
        <Paragraph>{fullParagraph}</Paragraph>
      </Col>
    );
  };

  const renderList = () => {
    return (
      <Col className={style.list} span={16}>
        <Row gutter={[0, 16]} className={style.list__container} justify="center" align="middle">
          {services.map((item, index) => {
            return (
              <li key={index + 1} className={style.list__container__item}>
                {item}
              </li>
            );
          })}
        </Row>
      </Col>
    );
  };

  return (
    <Row justify="center" align="middle">
      {renderTitle()}
      {renderText()}
      {renderList()}
    </Row>
  );
};

export default ServiceCard;
