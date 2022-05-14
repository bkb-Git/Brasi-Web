import { Row, Col, Typography } from "antd";

import KenyaSvg from "../../../../public/svg/KenyaMapSvg";
import UgandaMapSvg from "../../../../public/svg/UgandaMapSvg";
import EAMapSvg from "../../../../public/svg/EastAfricanMap";

import compStyle from "./OurNetwork.module.scss";

const { Title } = Typography;

const OurNetwork = (props) => {
  const { class: style } = props;

  const renderTitle = () => {
    return (
      <Col span={6}>
        <Title className={style.homeTitle}>Our Network</Title>
      </Col>
    );
  };

  const renderRegions = () => {
    return (
      <Row gutter={[32, 0]} align="middle" style={{ height: "100vh", width: "100%" }}>
        <Col className={compStyle.map} span={8}>
          <Title level={2}>Kenya</Title>
          <KenyaSvg />
        </Col>
        <Col className={compStyle.map} span={8}>
          <Title level={2}>Uganda</Title>
          <UgandaMapSvg />
        </Col>
        <Col className={compStyle.map} span={8}>
          <Title level={2} style={{ position: "absolute", top: "10%" }}>
            Greater East Africa
          </Title>
          <EAMapSvg />
        </Col>
      </Row>
    );
  };

  return (
    <Row justify="center" align="middle" style={{ flexDirection: "column", marginTop: "50px" }}>
      {renderTitle()}
      {renderRegions()}
    </Row>
  );
};

export default OurNetwork;
