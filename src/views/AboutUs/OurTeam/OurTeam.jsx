import { Row, Col, Typography } from "antd";
import TeamCard from "../../../components/TeamCard/TeamCard";

import style from "./OurTeam.module.scss";

const { Title, Paragraph } = Typography;

const OurTeam = () => {
  const renderTitle = () => {
    return (
      <Row justify="center" align="middle" style={{ width: "100%", flexDirection: "column" }}>
        <Col span={8} style={{ width: "30%" }}>
          <Title className={style.title}>Our Team</Title>
        </Col>
      </Row>
    );
  };

  const renderText = () => {
    return (
      <Col className={style.text} span={16}>
        <Paragraph>
          Brasi General Merchants Ltd has a team of adaptive staff and a company structure that is dynamic and continues
          to evolve to meet the changing corporate needs and client expectations. Our staffing goal is to have a
          qualified team and consistently train them to meet our overall customer service goal of knowing our customers
          personally, providing each customer with a personalized seamless service experience and respond to client
          queries in a timely and prompt manner.
        </Paragraph>
      </Col>
    );
  };

  const renderTeamList = () => {
    return (
      <Col span={20} style={{ marginTop: "5rem", height: "60vh" }}>
        <Row gutter={[32, 0]} justify="center" align="middle" style={{ height: "100%" }}>
          <TeamCard title="General Manager" />
          <TeamCard title="Customer Service Manager" />
          <TeamCard title="Front Office Team" />
        </Row>
      </Col>
    );
  };

  return (
    <Row justify="center" align="middle" style={{ marginBottom: "5rem" }}>
      {renderTitle()}
      {renderText()}
      {renderTeamList()}
    </Row>
  );
};

export default OurTeam;
