import { Card, Col, Row, Typography } from "antd";

import compStyle from "./OurValues.module.scss";


const { Title, Paragraph } = Typography;

const OurValues = (props) => {
  const { class: style } = props;

  const renderTitle = () => {
    return (
      <Title className={style.homeTitle}>Our Values</Title>
    );
  };

  const renderValues = () => {
    return (
      <Row className={compStyle.valuesContainer} gutter={[30, 0]} justify="center" align="middle">
        <Col span={6}>
          <Card hoverable className={compStyle.valuesCard} bodyStyle={{ height: "100%", padding: "24px 0px" }}>
            <Title level={3} className={compStyle.cardTitle}>
              Integrity
            </Title>
            <Paragraph className={compStyle.cardText}>
              We keep our word, and do the right thing always, whether the client is present or not.
            </Paragraph>
          </Card>
        </Col>
        <Col span={6}>
          <Card hoverable className={compStyle.valuesCard} bodyStyle={{ height: "100%", padding: "24px 0px" }}>
            <Title level={3} className={compStyle.cardTitle}>
              Professionalism
            </Title>
            <Paragraph className={compStyle.cardText}>
              We treat our clients with utmost respect and during our dealings we inform them of all that they need to
              know about ourselves and the services that would benefit them.
            </Paragraph>
          </Card>
        </Col>
        <Col span={6}>
          <Card hoverable className={compStyle.valuesCard} bodyStyle={{ height: "100%", padding: "24px 0px" }}>
            <Title level={3} className={compStyle.cardTitle}>
              Consistency
            </Title>
            <Paragraph className={compStyle.cardText}>
              Our reliability is anchored on our commitment to maintain high service standards, sustainably.
            </Paragraph>
          </Card>
        </Col>
        <Col span={6}>
          <Card hoverable className={compStyle.valuesCard} bodyStyle={{ height: "100%", padding: "24px 0px" }}>
            <Title level={3} className={compStyle.cardTitle}>
              Accountability
            </Title>
            <Paragraph className={compStyle.cardText}>
              We keep our clients and other stakeholders well informed and updated about our dealings.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    );
  };

  return (
    <Row gutter={[0, 25]} className={compStyle.values} justify="center" align="middle">
      <Col xs={18}>
        {renderTitle()}
      </Col>
      <Col xs={20} lg={16}>
        {renderValues()}
      </Col>
    </Row>
  );
};

export default OurValues;
