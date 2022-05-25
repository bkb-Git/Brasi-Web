import { Row, Col, Typography } from "antd";

import Wycliffe from "public/images/Wycliffe.jpeg";
import Mercy from "public/images/Mercy.jpeg";
import Roy from "public/images/Roy.jpeg";

import TeamCard from "../../../components/TeamCard/TeamCard";

import style from "./OurTeam.module.scss";

const { Title, Paragraph } = Typography;

const TEAM = {
  CEO: {
    title: "Chief Executive Officer",
    contact: "0727618480",
    email: "loglinkltd@gmail.com",
    img: Wycliffe,
  },
  COO: {
    title: "Chief Operating Officer",
    contact: "0726013708",
    email: "loglinkltd@gmail.com",
    img: Mercy,
  },
  PRO: {
    title: "Public Relations Officer",
    contact: "0725738663",
    email: "loglinkltd@gmail.com",
    img: Roy,
  },
};

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
      <Col span={20} style={{ marginTop: "5rem", height: "auto" }}>
        <Row gutter={[32, 0]} justify="center" align="middle" style={{ height: "100%" }}>
          <TeamCard member={TEAM.CEO} />
          <TeamCard member={TEAM.COO} />
          <TeamCard member={TEAM.PRO} />
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
