import { useState } from "react";
import { MessageOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Col, Layout, Row, Tooltip, Typography } from "antd";

import LogoSvg from "public/svg/logoSvg";
import Navbar from "src/components/Navbar";

import style from "./Header.module.scss";
import InquiryForm from "src/components/InquiryForm";

const { Header } = Layout;
const { Title } = Typography;

const HeaderLayout = () => {
  const [visible, setVisible] = useState(false);

  const renderLogo = () => {
    return (
      <Col flex={1} className={style.header__content__column}>
        <LogoSvg color={{ first: "#023059", second: "#0469c2" }} />
        <Title className={style.header__content__column__title} level={4}>
          Loglink Logistics
        </Title>
      </Col>
    );
  };

  const renderNavbar = () => {
    return (
      <Col flex={1} className={style.header__content__navbar}>
        <Navbar />
      </Col>
    );
  };

  const renderContactUs = () => {
    return (
      <Col className={style.header__content__contactUs} flex={1}>
        <Row justify="center" align="middle" className={style.header__content__contactUs__container}>
          <Row justify="space-between" align="middle" className={style.header__content__contactUs__container__number}>
            <Tooltip placement="bottom" title="Chat with us">
              <Button
                icon={<MessageOutlined />}
                type="primary"
                size="large"
                shape="circle"
                style={{ marginRight: "1rem" }}
                onClick={() => setVisible(true)}
              />
            </Tooltip>
            <Tooltip placement="bottom" title="Call us">
              <Button
                icon={<PhoneOutlined />}
                type="primary"
                size="large"
                shape="circle"
                style={{ marginRight: "1rem", cursor: "default" }}
              />
            </Tooltip>
            +2540745789238
          </Row>
        </Row>
      </Col>
    );
  };

  return (
    <Header className={style.header}>
      <Row justify="center" align="middle" className={style.header__content}>
        {renderLogo()}
        {renderNavbar()}
        {renderContactUs()}
      </Row>
      <InquiryForm visible={visible} setVisible={setVisible} />
    </Header>
  );
};

export default HeaderLayout;
