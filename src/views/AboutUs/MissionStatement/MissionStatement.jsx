import { Row, Col, Divider, Typography } from "antd";

import style from "./MissionStatement.module.scss";

const { Title, Paragraph } = Typography;

const MissionStatement = () => {
  const renderTitle = () => {
    return (
      <Row justify="center" align="middle">
        <Col xs={20} sm={20} lg={8}>
          <Title className={style.missionStatement__header__title}>Mission Statement</Title>
        </Col>
      </Row>
    );
  };

  const renderText = () => {
    return (
      <Paragraph className={style.missionStatement__details__text}>
        To constantly exceed customer expectations by providing flexible, reliable and superior freight, forwarding and
        global transportation solutions which include air, sea, customs brokerage and logistics services.
      </Paragraph>
    );
  };

  return (
    <Row gutter={[0, 32]} justify="center" align="middle" className={style.missionStatement}>
      <Col xs={20} sm={20} lg={24} className={style.missionStatement__header}>
        {renderTitle()}
      </Col>
      <Col xs={20} sm={20} lg={16} className={style.missionStatement__details}>
        {renderText()}
      </Col>
    </Row>
  );
};

export default MissionStatement;
