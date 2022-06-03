import { Drawer, Row, Col } from "antd";

import CompanyLogo from "../CompanyLogo";
import Navbar from "../Navbar";

import style from "./DrawerMenu.module.scss";

const DrawerMenu = (props) => {
  const { contact, menuVisible, setMenuVisible } = props;

  const renderLogo = () => {
    return <CompanyLogo responsiveWidths={{ span: 24 }} />;
  };

  const renderContact = () => {
    return (
      <Row gutter={[8, 0]} justify="center" align="middle">
        <Col className={style.drawer__contactUs__text}>Call us :</Col>
        {contact()}
      </Row>
    );
  };

  return (
    <Drawer
      placement="right"
      closable
      visible={menuVisible}
      onClose={() => setMenuVisible(false)}
      className={style.drawer}
    >
      <Row gutter={[0, 32]} justify="center" align="stretch" style={{ height: "100%" }}>
        <Col span={16} className={style.drawer__companyLogo}>
          {renderLogo()}
        </Col>
        <Col span={24} className={style.drawer__nav}>
          <Navbar closeDrawer={setMenuVisible} />
        </Col>
        <Col span={18} className={style.drawer__contactUs}>
          {renderContact()}
        </Col>
      </Row>
    </Drawer>
  );
};

export default DrawerMenu;
