import { Row, Col, Divider, Typography } from "antd";

import style from "./MissionStatement.module.scss";

const { Title, Paragraph } = Typography;

const MissionStatement = () => {
  const renderTitle = () => {
    return (
      <Col xs={20} sm={20} lg={24} className={style.missionStatement__header}>
        <Row justify="center" align="middle">
          <Col xs={20} sm={20} lg={8}>
            <Title className={style.missionStatement__header__title}>Mission Statement</Title>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderText = () => {
    return (
      <Col xs={20} sm={20} lg={16} className={style.missionStatement__details} span={16}>
        <Paragraph className={style.missionStatement__details__text}>
          To constantly exceed customer expectations by providing flexible, reliable and superior freight, forwarding
          and global transportation solutions which include air, sea, customs brokerage and logistics services.
        </Paragraph>
      </Col>
    );
  };

  return (
    <Row justify="center" align="middle" className={style.missionStatement}>
      {renderTitle()}
      {renderText()}
    </Row>
  );
};

export default MissionStatement;
