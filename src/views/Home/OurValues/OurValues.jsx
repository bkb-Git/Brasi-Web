import { Card, Col, Row, Typography } from "antd";

import compStyle from "./OurValues.module.scss";


const { Title, Paragraph } = Typography;

const OurValues = (props) => {
  const { class: style } = props;

  const renderTitle = () => {
    return (
      <Col span={6}>
        <Title className={style.homeTitle}>Our Values</Title>
      </Col>
    );
  };

  const renderValues = () => {
    return (
      <Row className={compStyle.valuesContainer} gutter={[30, 0]} justify="center" align="middle">
        <Col span={6}>
          <Card hoverable className={compStyle.valuesCard} bodyStyle={{ height: "100%", padding: "24px 0px" }}>
            <Title level={2} className={compStyle.cardTitle}>
              Integrity
            </Title>
            <Paragraph strong className={compStyle.cardText}>
              We keep our word, and do the right thing always, whether the client is present or not.
            </Paragraph>
          </Card>
        </Col>
        <Col span={6}>
          <Card hoverable className={compStyle.valuesCard} bodyStyle={{ height: "100%", padding: "24px 0px" }}>
            <Title level={2} className={compStyle.cardTitle}>
              Professionalism
            </Title>
            <Paragraph strong className={compStyle.cardText}>
              We treat our clients with utmost respect and during our dealings we inform them of all that they need to
              know about ourselves and the services that would benefit them.
            </Paragraph>
          </Card>
        </Col>
        <Col span={6}>
          <Card hoverable className={compStyle.valuesCard} bodyStyle={{ height: "100%", padding: "24px 0px" }}>
            <Title level={2} className={compStyle.cardTitle}>
              Consistency
            </Title>
            <Paragraph strong className={compStyle.cardText}>
              Our reliability is anchored on our commitment to maintain high service standards, sustainably.
            </Paragraph>
          </Card>
        </Col>
        <Col span={6}>
          <Card hoverable className={compStyle.valuesCard} bodyStyle={{ height: "100%", padding: "24px 0px" }}>
            <Title level={2} className={compStyle.cardTitle}>
              Accountability
            </Title>
            <Paragraph strong className={compStyle.cardText}>
              We keep our clients and other stakeholders well informed and updated about our dealings.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    );
  };

  return (
    <Row gutter={[0, 25]} className={compStyle.values} justify="center" align="middle">
      {renderTitle()}
      {renderValues()}
    </Row>
  );
};

export default OurValues;
