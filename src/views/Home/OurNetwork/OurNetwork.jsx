import { Row, Col, Typography, Grid, Divider } from "antd";

import KenyaSvg from "public/svg/KenyaMapSvg";
import UgandaMapSvg from "public/svg/UgandaMapSvg";
import EAMapSvg from "public/svg/EastAfricanMap";

import style from "./OurNetwork.module.scss";

const { Title } = Typography;
const { useBreakpoint } = Grid;

const NETWORK = {
  Kenya: {
    name: "Kenya",
    svg: <KenyaSvg />,
  },
  Uganda: {
    name: "Uganda",
    svg: <UgandaMapSvg />,
  },
  GreaterEastAfrica: {
    name: "Greater East Africa",
    svg: <EAMapSvg />,
  },
};

const OurNetwork = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const Map = (props) => {
    const { region, titleStyle } = props;
    const { name, svg } = region;

    return (
      <Col lg={8} className={style.container__regions__map}>
        <Title level={2} style={{ ...titleStyle }}>
          {name}
        </Title>
        {svg}
      </Col>
    );
  };

  const renderTitle = () => {
    return (
      <Col xs={20} sm={20} md={18} lg={24} className={style.container__header}>
        <Row justify="center" align="middle">
          <Col xs={24} sm={24} lg={6}>
            <Title className={style.container__header__title}>Our Network</Title>
          </Col>
          {isMobileOrTablet && (
            <Col xs={12} sm={12} className={style.container__divider}>
              <Divider className={style.container__divider__line} />
            </Col>
          )}
        </Row>
      </Col>
    );
  };

  const renderRegions = () => {
    return (
      <Col className={style.container__regions} xs={20} sm={20} lg={23}>
        <Row gutter={[36, 0]} align="middle">
          <Map region={NETWORK.Kenya} />
          <Map region={NETWORK.Uganda} />
          <Map region={NETWORK.GreaterEastAfrica} titleStyle={{ position: "absolute", top: "8%" }} />
        </Row>
      </Col>
    );
  };

  return (
    <Row justify="center" align="middle" className={style.container}>
      {renderTitle()}
      {renderRegions()}
    </Row>
  );
};

export default OurNetwork;
