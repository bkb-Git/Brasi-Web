import { Col, Divider, Layout, Row, Grid } from "antd";

import Contacts from "./Contacts";
import Location from "./Location";

import style from "./FooterLayout.module.scss";
import CompanyInfo from "./CompanyInfo";

const { Footer } = Layout;
const { useBreakpoint } = Grid;

const FooterLayout = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

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

  const renderContent = () => {
    if (isMobileOrTablet) {
      return (
        <>
          <Contacts />
          <DividerMod />
          <Location />
          <DividerMod />
          <CompanyInfo />
        </>
      );
    }
    return (
      <>
        <CompanyInfo />
        <DividerMod />
        <Location />
        <DividerMod />
        <Contacts />
      </>
    );
  };

  return (
    <Footer className={style.footer}>
      <Row gutter={isMobileOrTablet && [0, 64]} className={style.footer__container} justify="center" align="middle">
        {renderContent()}
      </Row>
    </Footer>
  );
};

export default FooterLayout;
