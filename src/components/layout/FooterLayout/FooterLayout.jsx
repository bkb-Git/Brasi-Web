import { BankOutlined, CompassOutlined, PhoneOutlined } from "@ant-design/icons";
import { Col, Divider, Layout, Row, Typography } from "antd";

import style from "./FooterLayout.module.scss";

const { Footer } = Layout;
const { Title, Paragraph } = Typography;

const FooterLayout = () => {
  const renderContacts = () => {
    return (
      <Col span={7} className={style.footerSection}>
        <Row gutter={[10, 0]} justify="center" align="middle" style={{ flex: 1 }}>
          <PhoneOutlined className={style.footerItemIcon} />
          <Title level={4}>Contact Us</Title>
        </Row>
        <Row justify="start" align="middle" style={{ flexDirection: "column", flex: 2, padding: "0 60px" }}>
          <Col className={style.contactDetails}>
            <Paragraph strong style={{ textAlign: "center" }}>
              Telephone : +254 727 618480
            </Paragraph>
          </Col>
          <Col className={style.contactDetails}>
            <Paragraph strong style={{ textAlign: "center" }}>
              Email : brasigenerallimited@gmail.com
            </Paragraph>
          </Col>
          <Col className={style.contactDetails}>
            <Paragraph strong style={{ textAlign: "center" }}>
              P.O Box 2555, G.P.O Nairobi, Kenya
            </Paragraph>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderLocation = () => {
    return (
      <Col span={7} className={style.footerSection}>
        <Row gutter={[10, 0]} justify="center" align="middle" style={{ flex: 1 }}>
          <CompassOutlined className={style.footerItemIcon} />
          <Title level={4}>Location</Title>
        </Row>
        <Row justify="start" align="middle" style={{ flexDirection: "column", flex: 2, padding: "0 60px" }}>
          <Col className={style.contactDetails}>
            <Paragraph strong style={{ textAlign: "center" }}>
              Monrovia Street
            </Paragraph>
          </Col>
          <Col className={style.contactDetails}>
            <Paragraph strong style={{ textAlign: "center" }}>
              Maendeleo House
            </Paragraph>
          </Col>
          <Col className={style.contactDetails}>
            <Paragraph strong style={{ textAlign: "center" }}>
              Nairobi CBD
            </Paragraph>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderOtherDetails = () => {
    return (
      <Col span={7} className={style.footerSection}>
        <Row gutter={[10, 0]} justify="center" align="middle" style={{ flex: 1 }}>
          <BankOutlined className={style.footerItemIcon} />
          <Title level={4}>Branch Office</Title>
        </Row>
        <Row justify="start" align="middle" style={{ flexDirection: "column", flex: 2, padding: "0 60px" }}>
          <Col className={style.contactDetails}>
            <Paragraph strong style={{ textAlign: "center" }}>
              Emormor Plaza
            </Paragraph>
          </Col>
          <Col className={style.contactDetails}>
            <Paragraph strong style={{ textAlign: "center" }}>
              Malaba branch
            </Paragraph>
          </Col>
          <Col className={style.contactDetails}>
            <Paragraph strong style={{ textAlign: "center" }}>
              P.O Box 458 Malaba
            </Paragraph>
          </Col>
          <Col className={style.contactDetails}>
            <Paragraph strong style={{ textAlign: "center" }}>
              Kenya
            </Paragraph>
          </Col>
        </Row>
      </Col>
    );
  };

  return (
    <Footer style={{ height: "50vh" }}>
      <Row gutter={[16, 0]} className={style.footer} justify="center" align="middle">
        {renderContacts()}
        <Divider className={style.divider} type="vertical" />
        {renderOtherDetails()}
        <Divider className={style.divider} type="vertical" />
        {renderLocation()}
      </Row>
    </Footer>
  );
};

export default FooterLayout;
