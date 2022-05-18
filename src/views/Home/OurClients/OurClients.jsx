import { Col, Row, Typography } from "antd";

import compStyle from "./OurClients.module.scss";

const { Title } = Typography;

const OurClients = (props) => {
  const { class: style } = props;

  const renderClientList = () => {
    return (
      <Row gutter={[32, 16]} justify="center" align="middle">
        <Col className={compStyle.listItem} span={8}>
          <Title className={compStyle.listTitle} level={5}>
            Kenafric Industry Limited
          </Title>
        </Col>
        <Col className={compStyle.listItem} span={8}>
          <Title className={compStyle.listTitle} level={5}>
            Kenafric Matches Limited
          </Title>
        </Col>
        <Col className={compStyle.listItem} span={8}>
          <Title className={compStyle.listTitle} level={5}>
            Glory Industry
          </Title>
        </Col>
        <Col className={compStyle.listItem} span={8}>
          <Title className={compStyle.listTitle} level={5}>
            Somsa Manufacturer East Africa Limited
          </Title>
        </Col>
        <Col className={compStyle.listItem} span={8}>
          <Title className={compStyle.listTitle} level={5}>
            Siara Limited
          </Title>
        </Col>
      </Row>
    );
  };

  const renderTitle = () => {
    return (
      <Col span={8}>
        <Title className={style.homeTitle} style={{ margin: "15px 0 30px 0" }}>
          Our Clients
        </Title>
      </Col>
    );
  };

  const renderListSection = () => {
    return (
      <Row className={compStyle.clientList} justify="center" gutter={[48, 48]}>
        <Col span={16}>
          <Title level={4} style={{ fontWeight: "normal", textAlign: 'center' }}>
            Due to our commitment to smooth operations and quality services to our clients, we boast of a large
            clientele spread across Kenya, Uganda and the wide East African Region.
          </Title>
        </Col>
        <Col span={20}>{renderClientList()}</Col>
      </Row>
    );
  };

  return (
    <Row gutter={[0, 48]} justify="center" align="middle" style={{ flexDirection: "column" }}>
      {renderTitle()}
      {renderListSection()}
    </Row>
  );
};

export default OurClients;
