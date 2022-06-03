import { PhoneOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Grid } from "antd";

import InfoItem from "../InfoItem";

import style from "./Contacts.module.scss";

const { Title } = Typography;
const { useBreakpoint } = Grid;

const Contacts = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const renderTitle = () => {
    return (
      <Row gutter={[10, 0]} justify="center" align="middle">
        <PhoneOutlined className={style.contactUs__icon} />
        <Title level={4}>Contact Us</Title>
      </Row>
    );
  };

  const renderInfo = () => {
    return (
      <Row justify="center" align="middle" style={{ padding: isMobileOrTablet ? "0" : "0 0.5em" }}>
        <InfoItem
          info="Telephone : "
          other="+254 727 618480"
          contact={!isMobileOrTablet}
          contactOnMobile={isMobileOrTablet}
        />
        <InfoItem
          info="Email : "
          other="team@loglinklogistics.com"
          contact={!isMobileOrTablet}
          contactOnMobile={isMobileOrTablet}
        />
        <InfoItem
          info="Address :"
          other="P.O Box 678 - 00100, G.P.O Nairobi, Kenya"
          contact={!isMobileOrTablet}
          contactOnMobile={isMobileOrTablet}
        />
      </Row>
    );
  };

  return (
    <Col xs={22} sm={22} lg={7} className={style.contactUs}>
      <Row gutter={[0, 32]} justify="space-around" align="middle">
        <Col lg={24}>{renderTitle()}</Col>
        <Col lg={24}>{renderInfo()}</Col>
      </Row>
    </Col>
  );
};

export default Contacts;
