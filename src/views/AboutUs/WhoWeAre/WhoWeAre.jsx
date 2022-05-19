import { Col, Divider, Row, Typography } from "antd";

import Image from "next/image";

import Handshake from "../../../../public/images/handshake.jpg";

import style from "./WhoWeAre.module.scss";

const { Title, Paragraph, Text } = Typography;

const WhoWeAre = () => {
  const renderTitle = () => {
    return (
      <Col className={style.header} span={24}>
        <Image src={Handshake} />
        <Title className={style.title} level={1}>
          Who we are
        </Title>
      </Col>
    );
  };

  const renderText = () => {
    return (
      <Col className={style.text} span={16}>
        <Paragraph>
          <Text strong className={style.text1}>
            Brasi General Merchants ltd{" "}
          </Text>
          is a clearing and logistics company, and since then we have specialized in helping our clients to handle their
          exports and imports in the ever dynamic logistics and transportation industry. Our goal is to continuously
          improve our service delivery methods and policies and adapt to emerging technology with the objective of
          exceeding our client expectations always. We ensure a smooth and seamless process in ensuring that we
          anticipate and eliminate problems that could occur when shipping goods; such as shipment loss or damage, port
          detention and clearing down-time. In this, we ensure that our clients receive their packages, goods and
          merchandise on time, at the best rates and with the assurance of the best customer experience at all times.
        </Paragraph>
      </Col>
    );
  };

  return (
    <Row justify="center" align="center" style={{ marginBottom: "5rem" }}>
      {renderTitle()}
      {renderText()}
    </Row>
  );
};

export default WhoWeAre;
