import { Col, Divider, Row, Typography } from "antd";

import Image from "next/image";

import Handshake from "../../../../public/images/handshake.jpg";

import style from "./WhoWeAre.module.scss";

const { Title, Paragraph, Text } = Typography;

const WhoWeAre = () => {
  const renderTitle = () => {
    return (
      <>
        <Image src={Handshake} />
        <Title level={1} className={style.whoWeAre__header__title}>
          Who we are
        </Title>
      </>
    );
  };

  const renderText = () => {
    return (
      <Paragraph>
        <Text strong className={style.whoWeAre__text1}>
          Loglink Logistics Limited{" "}
        </Text>
        is a clearing and logistics company, and since then we have specialized in helping our clients to handle their
        exports and imports in the ever dynamic logistics and transportation industry. Our goal is to continuously
        improve our service delivery methods and policies and adapt to emerging technology with the objective of
        exceeding our client expectations always. We ensure a smooth and seamless process in ensuring that we anticipate
        and eliminate problems that could occur when shipping goods; such as shipment loss or damage, port detention and
        clearing down-time. In this, we ensure that our clients receive their packages, goods and merchandise on time,
        at the best rates and with the assurance of the best customer experience at all times.
      </Paragraph>
    );
  };

  return (
    <Row gutter={[0, 32]} justify="center" align="middle" className={style.whoWeAre}>
      <Col xs={24} sm={24} lg={24} className={style.whoWeAre__header}>
        {renderTitle()}
      </Col>
      <Col xs={20} sm={20} lg={16} className={style.whoWeAre__text}>
        {renderText()}
      </Col>
    </Row>
  );
};

export default WhoWeAre;
