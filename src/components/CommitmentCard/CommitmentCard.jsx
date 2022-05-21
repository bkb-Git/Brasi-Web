import { Row, Col, Typography } from "antd";

import style from "./CommitmentCard.module.scss";

const { Title, Paragraph } = Typography;

const CommitmentCard = (props) => {
  const { commitment, right } = props;
  const { svg, title, paragraph } = commitment;

  const renderSection1 = () => {
    return (
      <Col className={style.slide__section1} span={12}>
        {svg.second}
      </Col>
    );
  };

  const renderSection2 = () => {
    return (
      <Col className={style.slide__section2} span={12}>
        <Row gutter={[0, 48]} justify="center" align="middle">
          <Col span={24}>
            <Row gutter={[0, 32]} justify="center" align="middle" style={{ width: "100%" }}>
              <Col span={24} className={style.slide__section2__icon}>
                {svg.first}
              </Col>
              <Col span={24} className={style.slide__section2__title}>
                <Title level={4}>{title}</Title>
              </Col>
            </Row>
          </Col>
          <Col span={14}>
            <Paragraph>{paragraph}</Paragraph>
          </Col>
        </Row>
      </Col>
    );
  };

  return (
    <Row className={style.slide} justify="space-between" align="middle">
      {right ? (
        <>
          {renderSection2()}
          {renderSection1()}
        </>
      ) : (
        <>
          {renderSection1()}
          {renderSection2()}
        </>
      )}
    </Row>
  );
};

export default CommitmentCard;
