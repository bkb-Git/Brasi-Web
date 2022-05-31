import { CompassOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Grid, Divider } from "antd";

import InfoItem from "../InfoItem";

import style from "./Location.module.scss";

const { Title } = Typography;
const { useBreakpoint } = Grid;

const Location = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const renderTitle = () => {
    return (
      <Row justify="center" align="middle">
        <CompassOutlined className={style.location__icon} />
        <Title level={4}>Location</Title>
      </Row>
    );
  };

  const renderDetails = () => {
    return (
      <Row justify="center" align="top">
        <Col lg={18} style={{ textAlign: "center" }}>
          <Title level={5}>Main Office</Title>
          <Col offset={6} span={12} className={style.location__divider}>
            <Divider />
          </Col>
        </Col>
        <Col xs={18} sm={18} lg={20} style={{ textAlign: "center" }}>
          <InfoItem
            info="Address : "
            other="Loglink Limited, Rapen plaza, Katani road, Syokimau "
            contactOnMobile={isMobileOrTablet}
          />
        </Col>
      </Row>
    );
  };

  return (
    <Col xs={22} sm={22} lg={8} className={style.location}>
      <Row gutter={[0, 32]} justify="space-around" align="top">
        <Col xs={24} lg={24}>
          {renderTitle()}
        </Col>
        <Col xs={24} lg={24}>
          {renderDetails()}
        </Col>
      </Row>
    </Col>
  );
};

export default Location;
