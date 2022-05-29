import { BankOutlined, CompassOutlined, PhoneOutlined } from "@ant-design/icons";
import { Col, Divider, Layout, Row, Typography, Grid } from "antd";
import CompanyLogo from "src/components/CompanyLogo";

import style from "./FooterLayout.module.scss";

const { Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const FooterLayout = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const InfoItem = (props) => {
    const { info, other, contact } = props;
    return (
      <Col span={24} style={{ marginBottom: other && "1em" }}>
        <Row justify="center" align="middle" style={{ flexDirection: contact && "column" }}>
          <Paragraph strong style={{ textAlign: "center", marginBottom: other && 0, marginRight: other && "0.5em" }}>
            {info}
          </Paragraph>
          {other && <Text>{other}</Text>}
        </Row>
      </Col>
    );
  };

  const DividerMod = () => {
    if (isMobileOrTablet) {
      return (
        <Col span={12}>
          <Divider className={style.footer__divider} type="horizontal" />
        </Col>
      );
    }

    return <Divider className={style.footer__divider} type="vertical" />;
  };

  const branchOffice = () => {
    return (
      <Row justify="start" align="middle" style={{ padding: isMobileOrTablet ? "0" : "0 2em" }}>
        <InfoItem info="Emormor Plaza" />
        <InfoItem info="Malaba branch" />
        <InfoItem info="P.O Box 458 Malaba" />
        <InfoItem info="Kenya" />
      </Row>
    );
  };

  const mainOffice = () => {
    return (
      <Row justify="start" align="middle" style={{ padding: isMobileOrTablet ? "0" : "0 2em" }}>
        <InfoItem info="Monrovia Street" />
        <InfoItem info="Maendeleo House" />
        <InfoItem info="Nairobi CBD" />
      </Row>
    );
  };

  const location = () => {
    const renderTitle = () => {
      return (
        <Col span={24} className={style.footer__container__location__container__title}>
          <Row justify="center" align="middle">
            <CompassOutlined className={style.footerItemIcon} />
            <Title level={4}>Location</Title>
          </Row>
        </Col>
      );
    };

    const renderSubTitles = () => {
      return (
        <Col span={24} style={{ marginBottom: ".5em" }}>
          <Row justify="space-between" align="top">
            <Col
              span={12}
              style={{ textAlign: "center" }}
              className={style.footer__container__location__container__subtitle}
            >
              <Title level={5}>Main Office</Title>
              <Col offset={6} span={12} className={style.footer__container__location__container__subtitle__divider}>
                <Divider />
              </Col>
            </Col>
            <Col
              span={12}
              style={{ textAlign: "center" }}
              className={style.footer__container__location__container__subtitle}
            >
              <Title level={5}>Branch Office</Title>
              <Col offset={6} span={12} className={style.footer__container__location__container__subtitle__divider}>
                <Divider />
              </Col>
            </Col>
          </Row>
        </Col>
      );
    };

    const renderDetails = () => {
      return (
        <Col span={24} className={style.footer__container__location__container__details}>
          <Row justify="space-between" align="top">
            {renderSubTitles()}
            <Col span={12}>{mainOffice()}</Col>
            <Col span={12}>{branchOffice()}</Col>
          </Row>
        </Col>
      );
    };

    return (
      <Col xs={24} sm={24} lg={24} className={style.footer__container__location__container}>
        <Row style={{ height: "100%" }} gutter={isMobileOrTablet && [0, 32]}>
          {renderTitle()}
          {renderDetails()}
        </Row>
      </Col>
    );
  };

  const contacts = () => {
    return (
      <Col xs={24} sm={24} lg={24} className={style.footer__container__contactUs__container}>
        <Row style={{ height: "100%" }} gutter={isMobileOrTablet && [0, 32]}>
          <Col span={24} className={style.footer__container__contactUs__container__title}>
            <Row gutter={[10, 0]} justify="center" align="middle">
              <PhoneOutlined className={style.footer__container__contactUs__container__title__icon} />
              <Title level={4}>Contact Us</Title>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify="center" align="middle" style={{ padding: isMobileOrTablet ? "0" : "0 0.5em" }}>
              <InfoItem info="Telephone : " other="+254 727 618480" contact={isMobileOrTablet} />
              <InfoItem info="Email : " other="brasigenerallimited@gmail.com" contact={isMobileOrTablet} />
              <InfoItem info="Address :" other="P.O Box 2555, G.P.O Nairobi, Kenya" contact={isMobileOrTablet} />
            </Row>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderLocation = () => {
    return (
      <Col xs={22} sm={22} lg={8} className={style.footer__container__location}>
        <Row justify="center" align="top" style={{ height: "100%" }}>
          {location()}
        </Row>
      </Col>
    );
  };

  const renderContacts = () => {
    return (
      <Col xs={22} sm={22} lg={7} className={style.footer__container__contactUs}>
        <Row justify="center" align="top" style={{ height: "100%" }}>
          {contacts()}
        </Row>
      </Col>
    );
  };

  const renderCompanyLogo = () => {
    return (
      <Col xs={22} sm={20} lg={7} className={style.footer__container__companyLogo}>
        <Row gutter={isMobileOrTablet && [0, 16]} justify="center" align="middle" style={{ height: "100%" }}>
          <Col xs={24} sm={24} lg={24}>
            <CompanyLogo responsiveWidths={{ xs: { offset: 4, span: 18 }, sm: 24, lg: 16 }} />
          </Col>
          <Col xs={24} sm={24} lg={22}>
            <Row justify="center" align="middle">
              <Col xs={20} sm={20} lg={24}>
                <Title level={5} style={{ textAlign: isMobileOrTablet ? "center" : "left" }}>
                  Our commitment to clients
                </Title>
              </Col>
              <Col span={24}>
                <Paragraph>
                  We are very committed to providing our clients with the highest level of customer service, and make
                  their export or import experiences smooth and hassle-free.
                </Paragraph>
              </Col>
            </Row>
          </Col>
          <Col lg={22}>
            <Text strong>Copyright</Text> &copy; 2022
          </Col>
        </Row>
      </Col>
    );
  };

  return (
    <Footer className={style.footer}>
      <Row gutter={isMobileOrTablet && [0, 64]} className={style.footer__container} justify="center" align="middle">
        {renderCompanyLogo()}
        <DividerMod />
        {renderLocation()}
        <DividerMod />
        {renderContacts()}
      </Row>
    </Footer>
  );
};

export default FooterLayout;
