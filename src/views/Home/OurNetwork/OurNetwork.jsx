import { Row, Col, Typography } from "antd";

import KenyaSvg from "public/svg/KenyaMapSvg";
import UgandaMapSvg from "public/svg/UgandaMapSvg";
import EAMapSvg from "public/svg/EastAfricanMap";

import style from "./OurNetwork.module.scss";

const { Title } = Typography;

const OurNetwork = () => {
  const renderTitle = () => {
    return (
      <Col span={6} style={{ padding: "2em 0 4em 0" }}>
        <Title className={style.container__title}>Our Network</Title>
      </Col>
    );
  };

  const renderRegions = () => {
    return (
      <Row className={style.container__regions} gutter={[36, 0]} align="middle">
        <Col className={style.container__regions__map} span={8}>
          <Title level={2}>Kenya</Title>
          <KenyaSvg />
        </Col>
        <Col className={style.container__regions__map} span={8}>
          <Title level={2}>Uganda</Title>
          <UgandaMapSvg />
        </Col>
        <Col className={style.container__regions__map} span={8}>
          <Title level={2} style={{ position: "absolute", top: "10%" }}>
            Greater East Africa
          </Title>
          <EAMapSvg />
        </Col>
      </Row>
    );
  };

  return (
    <Row justify="center" align="middle" className={style.container}>
      {renderTitle()}
      {renderRegions()}
    </Row>
  );
};

export default OurNetwork;
