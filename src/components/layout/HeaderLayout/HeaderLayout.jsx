import { Col, Layout, Row } from "antd";
import Image from "next/image";

import MainLogo from "public/images/logos/logoNormal.png";
import Navbar from "src/components/Navbar";

import style from "./Header.module.scss";

const { Header } = Layout;

const HeaderLayout = () => {
  const renderLogo = () => {
    return (
      <Col flex={1} className={style.header__column}>
        <div className={style.header__logo}>
          <Image layout="fill" src={MainLogo} />
        </div>
      </Col>
    );
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
      <Row className={style.header__content}>
        {renderLogo()}
        {renderNavbar()}
        <Col flex={1} />
      </Row>
    </Header>
  );
};

export default HeaderLayout;
