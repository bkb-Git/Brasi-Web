import { Row, Col, Typography, Grid } from "antd";

import style from "./CommitmentCard.module.scss";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const CommitmentCard = (props) => {
  const { commitment, right } = props;
  const { svg, title, paragraph } = commitment;

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrLaptop = (xs || sm) && !lg;

  const renderSection1 = () => {
    if (isMobileOrLaptop) return null;
    return (
      <Col className={style.slide__section1} lg={12}>
        {svg.second}
      </Col>
    );
  };

  const renderSection2 = () => {
    return (
      <Col className={style.slide__section2} xs={22} sm={22} lg={12}>
        <Row gutter={[0, 36]} justify="center" align="middle" className={style.slide__section2__slideContainer}>
          <Col span={24}>
            <Row gutter={[0, 16]} justify="center" align="middle" style={{ width: "100%" }}>
              <Col span={24} className={style.slide__section2__slideContainer__icon}>
                {svg.first}
              </Col>
              <Col span={24}>
                <Title level={4}>{title}</Title>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
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
