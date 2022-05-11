import { Col, Layout, Menu, Row } from "antd";
import Navbar from "../../Navbar";

import style from "./Header.module.scss";

const { Header } = Layout;

const HeaderLayout = () => {
  const renderLogo = () => {
    return <Col flex={1}></Col>;
  };

  const renderNavbar = () => {
    return (
      <Col flex={1} className={style.navbar}>
        <Navbar />
      </Col>
    );
  };

  return (
    <Header className={style.header}>
      <Row justify="center" align="center" style={{ width: "100%", height: "100%" }}>
        {renderLogo()}
        {renderNavbar()}
        <Col flex={1} />
      </Row>
    </Header>
  );
};

export default HeaderLayout;
