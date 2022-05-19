import { Card, Col, Row, Typography } from "antd";
import ValueCard from "src/components/ValueCard";

import compStyle from "./OurValues.module.scss";

const { Title, Paragraph } = Typography;

const VALUES = {
  Integrity: {
    title: "Integrity",
    paragraph: " We keep our word, and do the right thing always, whether the client is present or not.",
  },
  Professionalism: {
    title: "Professionalism",
    paragraph:
      "We treat our clients with utmost respect and during our dealings we inform them of all that they need to know about ourselves and the services that would benefit them.",
  },
  Consistency: {
    title: "Consistency",
    paragraph: "Our reliability is anchored on our commitment to maintain high service standards, sustainably.",
  },
  Accountability: {
    title: "Accountability",
    paragraph: "We keep our clients and other stakeholders well informed and updated about our dealings.",
  },
};

const OurValues = (props) => {
  const { class: style } = props;

  const renderTitle = () => {
    return <Title className={style.homeTitle}>Our Values</Title>;
  };

  const renderValues = () => {
    return (
      <Row className={compStyle.valuesContainer} gutter={[30, 0]} justify="center" align="middle">
        <ValueCard value={VALUES.Integrity} />
        <ValueCard value={VALUES.Consistency} />
        <ValueCard value={VALUES.Accountability} />
        <ValueCard value={VALUES.Professionalism} />
      </Row>
    );
  };

  return (
    <Row gutter={[0, 25]} className={compStyle.values} justify="center" align="middle">
      <Col xs={18}>{renderTitle()}</Col>
      <Col xs={20} lg={16}>
        {renderValues()}
      </Col>
    </Row>
  );
};

export default OurValues;
