import { Col, Row, Typography } from "antd";
import ClientCard from "src/components/ClientCard";

import style from "./OurClients.module.scss";

const { Title } = Typography;

const OurClients = () => {
  const renderClientList = () => {
    return (
      <Row gutter={[32, 16]} justify="center" align="middle">
        <ClientCard company="Kenafric Industry Limited" />
        <ClientCard company="Kenafric Matches Limited" />
        <ClientCard company="Glory Industry" />
        <ClientCard company="Somsa Manufacturer East Africa Limited" />
        <ClientCard company="Siara Limited" />
      </Row>
    );
  };

  const renderTitle = () => {
    return (
      <Col span={8}>
        <Title className={style.container__title}>Our Clients</Title>
      </Col>
    );
  };

  const renderListSection = () => {
    return (
      <Row className={style.container__list} justify="center" gutter={[48, 48]}>
        <Col span={16}>
          <Title level={4} style={{ fontWeight: "normal", textAlign: "center" }}>
            Due to our commitment to smooth operations and quality services to our clients, we boast of a large
            clientele spread across Kenya, Uganda and the wide East African Region.
          </Title>
        </Col>
        <Col span={20}>{renderClientList()}</Col>
      </Row>
    );
  };

  return (
    <Row gutter={[0, 48]} justify="center" align="middle" className={style.container}>
      {renderTitle()}
      {renderListSection()}
    </Row>
  );
};

export default OurClients;
