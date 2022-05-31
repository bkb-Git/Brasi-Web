import { Col, Row, Typography, Grid } from "antd";
import CompanyLogo from "src/components/CompanyLogo";

import style from "./CompanyInfo.module.scss";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const CompanyInfo = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const title = () => {
    return (
      <Title level={5} style={{ textAlign: isMobileOrTablet ? "center" : "left" }}>
        Our commitment to clients
      </Title>
    );
  };

  const details = () => {
    return (
      <Paragraph>
        We are very committed to providing our clients with the highest level of customer service, and make their export
        or import experiences smooth and hassle-free.
      </Paragraph>
    );
  };

  const renderLogo = () => <CompanyLogo responsiveWidths={{ xs: { offset: 4, span: 18 }, sm: 24, lg: 16 }} />;

  const renderCommitment = () => {
    return (
      <Row justify="center" align="middle">
        <Col xs={20} sm={20} lg={16}>
          {title()}
        </Col>
        <Col xs={20} sm={20} lg={20}>
          {details()}
        </Col>
      </Row>
    );
  };

  const renderCopyright = () => {
    return (
      <>
        <Text strong>Copyright</Text> &copy; 2022
      </>
    );
  };

  return (
    <Col xs={22} sm={20} lg={7} className={style.companyLogo}>
      <Row gutter={[0, 32]} justify="space-around" align="middle">
        <Col xs={22} sm={22} lg={24}>
          {renderLogo()}
        </Col>
        <Col xs={24} sm={24} lg={24}>
          {renderCommitment()}
        </Col>
        <Col xs={12} sm={12} lg={10}>
          {renderCopyright()}
        </Col>
      </Row>
    </Col>
  );
};

export default CompanyInfo;
