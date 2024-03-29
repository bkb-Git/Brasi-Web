import { useState } from "react";
import { MenuOutlined, MessageOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Col, Layout, Row, Tooltip, Grid, Typography, Affix } from "antd";

import Navbar from "src/components/Navbar";
import InquiryForm from "src/components/InquiryForm";
import CompanyLogo from "src/components/CompanyLogo/CompanyLogo";
import DrawerMenu from "src/components/DrawerMenu";

import style from "./Header.module.scss";

const { Header } = Layout;
const { useBreakpoint } = Grid;
const { Paragraph } = Typography;

const HeaderLayout = () => {
  const [visible, setVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const messageUs = () => {
    return (
      <Tooltip placement="bottom" title="Chat with us">
        <Button icon={<MessageOutlined />} type="link" onClick={() => setVisible(true)} />
      </Tooltip>
    );
  };

  const renderBars = () => {
    if (isMobileOrTablet)
      return (
        <Col xs={8} sm={12} className={style.header__content__bars}>
          {messageUs()}
          <Button type="link" icon={<MenuOutlined color="white" />} size="large" onClick={() => setMenuVisible(true)} />
        </Col>
      );

    return null;
  };

  const renderNavbar = () => {
    if (isMobileOrTablet) return null;
    return (
      <Col flex={1} className={style.header__content__navbar}>
        <Navbar closeDrawer={setMenuVisible} />
      </Col>
    );
  };

  const renderContactUs = () => {
    return (
      <Col className={style.header__content__contactUs} flex={1}>
        <Row justify="center" align="middle" className={style.header__content__contactUs__container}>
          <Row justify="space-between" align="middle" className={style.header__content__contactUs__container__number}>
            <Paragraph copyable={{ icon: <PhoneOutlined /> }} style={{ marginBottom: 0 }}>
              +254 745789238
            </Paragraph>
            {!isMobileOrTablet && messageUs()}
          </Row>
        </Row>
      </Col>
    );
  };

  return (
    <Affix>
      <Header className={style.header}>
        <Row justify={isMobileOrTablet ? "space-between" : "center"} align="middle" className={style.header__content}>
          <CompanyLogo responsiveWidths={{ xs: 16, sm: 12, lg: 8 }} />
          {renderNavbar()}
          {!isMobileOrTablet && renderContactUs()}
          {renderBars()}
        </Row>
        <InquiryForm visible={visible} setVisible={setVisible} />
        <DrawerMenu contact={renderContactUs} menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      </Header>
    </Affix>
  );
};

export default HeaderLayout;
