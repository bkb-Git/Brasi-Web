import { Drawer, Divider, Row, Col } from "antd";

import CompanyLogo from "../CompanyLogo";
import Navbar from "../Navbar";

import style from "./DrawerMenu.module.scss";

const DrawerMenu = (props) => {
  const { menuVisible, setMenuVisible } = props;

  return (
    <Drawer
      placement="right"
      closable
      visible={menuVisible}
      onClose={() => setMenuVisible(false)}
      className={style.drawer}
    >
      <Row justify="center" align="middle">
        <Col span={24} className={style.drawer__companyLogo}>
          <CompanyLogo responsiveWidths={{ span: 24 }} />
        </Col>
      </Row>
      <Divider className={style.drawer__divider} />
      <Col span={24} className={style.drawer__nav}>
        <Navbar closeDrawer={setMenuVisible} />
      </Col>
    </Drawer>
  );
};

export default DrawerMenu;
