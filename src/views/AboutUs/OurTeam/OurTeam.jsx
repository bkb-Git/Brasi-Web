import { Row, Col, Typography, Grid } from "antd";

import Wycliffe from "public/images/Wycliffe.jpeg";
import Mercy from "public/images/Mercy.jpeg";
import Roy from "public/images/Roy.jpeg";

import TeamCard from "../../../components/TeamCard/TeamCard";

import style from "./OurTeam.module.scss";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const TEAM = {
  CEO: {
    title: "Chief Executive Officer",
    name: "Wycliffe Simiyu",
    contact: "0727618480",
    email: "loglinkltd@gmail.com",
    img: Wycliffe,
  },
  COO: {
    title: "Chief Operating Officer",
    name: "Mercy Bett Chepngeno",
    contact: "0726013708",
    email: "loglinkltd@gmail.com",
    img: Mercy,
  },
  PRO: {
    title: "Public Relations Officer",
    name: "Roy Nashombe",
    contact: "0725738663",
    email: "loglinkltd@gmail.com",
    img: Roy,
  },
};

const OurTeam = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrLaptop = (xs || sm) && !lg;

  const renderTitle = () => {
    return (
      <Row justify="center" align="middle">
        <Col xs={18} sm={18} lg={8}>
          <Title className={style.ourTeam__header__title}>Our Team</Title>
        </Col>
      </Row>
    );
  };

  const renderText = () => {
    return (
      <Paragraph className={style.ourTeam__details__text}>
        Loglink Logistics Limited has a team of adaptive staff and a company structure that is dynamic and continues to
        evolve to meet the changing corporate needs and client expectations. Our staffing goal is to have a qualified
        team and consistently train them to meet our overall customer service goal of knowing our customers personally,
        providing each customer with a personalized seamless service experience and respond to client queries in a
        timely and prompt manner.
      </Paragraph>
    );
  };

  const renderTeamList = () => {
    return (
      <Row gutter={isMobileOrLaptop ? [0, 32] : [32, 0]} justify="center" align="middle" style={{ height: "100%" }}>
        <TeamCard member={TEAM.CEO} />
        <TeamCard member={TEAM.COO} />
        <TeamCard member={TEAM.PRO} />
      </Row>
    );
  };

  return (
    <Row gutter={[0, 32]} justify="center" align="middle" className={style.ourTeam}>
      <Col xs={20} sm={20} lg={24} className={style.ourTeam__header}>
        {renderTitle()}
      </Col>
      <Col xs={20} sm={20} lg={16} className={style.ourTeam__details}>
        {renderText()}
      </Col>
      <Col xs={20} sm={20} lg={20} style={{ marginTop: "5rem", height: "auto" }}>
        {renderTeamList()}
      </Col>
    </Row>
  );
};

export default OurTeam;
