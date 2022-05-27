import { useState } from "react";
import { BarsOutlined, MessageOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Col, Layout, Row, Space, Tooltip } from "antd";

import Navbar from "src/components/Navbar";
import InquiryForm from "src/components/InquiryForm";
import CompanyLogo from "src/components/CompanyLogo/CompanyLogo";

import style from "./Header.module.scss";
import DrawerMenu from "src/components/DrawerMenu";

const { Header } = Layout;

const HeaderLayout = (props) => {
  const { isDesktop } = props;
  const [visible, setVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const messageUs = () => {
    return (
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
    );
  };

  const callUs = () => {
    return (
      <Tooltip placement="bottom" title="Call us">
        <Button
          icon={<PhoneOutlined />}
          type="primary"
          size="large"
          shape="circle"
          style={{ marginRight: "1rem", cursor: "default" }}
        />
      </Tooltip>
    );
  };

  const renderBars = () => {
    if (isDesktop) return null;
    return (
      <Col flex={1} className={style.header__content__bars}>
        <Space>
          {messageUs()}
          <Button icon={<BarsOutlined color="white" />} size="large" onClick={() => setMenuVisible(true)} />
        </Space>
      </Col>
    );
  };

  const renderNavbar = () => {
    if (isDesktop)
      return (
        <Col flex={1} className={style.header__content__navbar}>
          <Navbar />
        </Col>
      );
    return null;
  };

  const renderContactUs = () => {
    if (isDesktop)
      return (
        <Col className={style.header__content__contactUs} flex={1}>
          <Row justify="center" align="middle" className={style.header__content__contactUs__container}>
            <Row justify="space-between" align="middle" className={style.header__content__contactUs__container__number}>
              {messageUs()}
              {callUs()}
              +2540745789238
            </Row>
          </Row>
        </Col>
      );

    return null;
  };

  return (
    <Header className={style.header}>
      <Row justify={isDesktop ? "center" : "space-between"} align="middle" className={style.header__content}>
        <CompanyLogo flex={1} responsiveWidths={{ xs: 20 }} />
        {renderNavbar()}
        {renderContactUs()}
        {renderBars()}
      </Row>
      <InquiryForm visible={visible} setVisible={setVisible} />
      <DrawerMenu isDesktop={isDesktop} menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
    </Header>
  );
};

export default HeaderLayout;
