import { Col, Row, Typography, Grid, Divider } from "antd";
import ClientCard from "src/components/ClientCard";

import style from "./OurClients.module.scss";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const OurClients = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const ClientDescription = (props) => {
    const { children } = props;

    if (isMobileOrTablet)
      return (
        <Paragraph level={4} style={{ textAlign: "center" }}>
          {children}
        </Paragraph>
      );

    return (
      <Title level={5} style={{ textAlign: "center" }}>
        {children}
      </Title>
    );
  };

  const renderClientList = () => {
    return (
      <Row gutter={[32, 16]} justify="center" align="middle">
        <ClientCard company="Kenafric Industry Limited" />
        <ClientCard company="Kenafric Matches Limited" />
        <ClientCard company="Glory Industry" />
        <ClientCard company="Somsa Manufacturer East Africa Limited" />
        <ClientCard company="Siara Limited" />
      </Row>
    );
  };

  const renderTitle = () => {
    return (
      <Col xs={24} sm={24} lg={8}>
        <Row justify="center" align="middle">
          <Col xs={20} sm={20} lg={24}>
            <Title className={style.container__title}>Our Clients</Title>
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

  const renderListSection = () => {
    return (
      <Col xs={24} sm={24} lg={24} className={style.container__list}>
        <Row justify="center" gutter={isMobileOrTablet ? [0, 32] : [0, 84]}>
          <Col xs={20} sm={20} lg={16}>
            <ClientDescription>
              Due to our commitment to smooth operations and quality services to our clients, we boast of a large
              clientele spread across Kenya, Uganda and the wide East African Region.
            </ClientDescription>
          </Col>
          <Col xs={22} sm={22} lg={20}>
            {renderClientList()}
          </Col>
        </Row>
      </Col>
    );
  };

  return (
    <Row gutter={isMobileOrTablet ? [0, 8] : [0, 32]} justify="center" align="middle" className={style.container}>
      {renderTitle()}
      {renderListSection()}
    </Row>
  );
};

export default OurClients;
