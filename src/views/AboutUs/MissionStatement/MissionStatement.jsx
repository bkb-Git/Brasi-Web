import { Row, Col, Divider, Typography } from "antd";

import style from "./MissionStatement.module.scss";

const { Title, Paragraph } = Typography;

const MissionStatement = () => {
  const renderTitle = () => {
    return (
      <Row justify="center" align="middle" style={{ width: "100%", flexDirection: "column" }}>
        <Col span={8} style={{ width: "30%" }}>
          <Title className={style.title}>Mission Statement</Title>
        </Col>
      </Row>
    );
  };

  const renderText = () => {
    return (
      <Col className={style.text} span={16}>
        <Paragraph>
          To constantly exceed customer expectations by providing flexible, reliable and superior freight, forwarding
          and global transportation solutions which include air, sea, customs brokerage and logistics services.
        </Paragraph>
      </Col>
    );
  };

  return (
    <Row justify="center" align="middle" style={{ marginBottom: "5rem" }}>
      {renderTitle()}
      {renderText()}
    </Row>
  );
};

export default MissionStatement;
