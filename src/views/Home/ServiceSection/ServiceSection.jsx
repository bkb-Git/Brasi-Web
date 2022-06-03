import { ReadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Typography, Grid, Divider } from "antd";

import { useRouter } from "next/dist/client/router";
import Image from "next/image";

import style from "./ServiceSection.module.scss";

const { Paragraph, Title } = Typography;
const { useBreakpoint } = Grid;

const SECTION_DIRECTION = {
  RIGHT: "right",
  LEFT: "left",
};

const ServiceSection = (props) => {
  const { details, direction = SECTION_DIRECTION.LEFT } = props;

  const router = useRouter();

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const title = () => {
    return (
      <div className={style.serviceSection__header}>
        <Title level={1} className={style.serviceSection__title}>
          {details.title}
        </Title>
        {isMobileOrTablet && (
          <Col className={style.serviceSection__header__divider}>
            <Divider className={style.serviceSection__header__divider__line} />
          </Col>
        )}
      </div>
    );
  };

  const paragraph = () => {
    return (
      <Space direction="vertical" size="large">
        <Col className={style.serviceSection__text}>
          <Paragraph>{details.paragraph}</Paragraph>
        </Col>
        <Button icon={<ReadOutlined />} type="primary" size="large" onClick={() => router.push(details.link)}>
          Read more
        </Button>
      </Space>
    );
  };

  const renderDetails = () => {
    return (
      <Col xs={20} sm={20} lg={11} className={style.serviceSection__details}>
        <Row gutter={[0, 48]} justify="center" align="middle" className={style.serviceSection__details__info}>
          {!isMobileOrTablet && title()}
          {paragraph()}
        </Row>
      </Col>
    );
  };

  const renderImage = () => {
    return (
      <Col xs={20} sm={20} lg={13} className={style.serviceSection__imgContainer}>
        <div className={style.serviceSection__imgContainer__image}>
          <Image priority src={details.image} alt={details.title} style={{ zIndex: 0 }} layout="fill" />
        </div>
      </Col>
    );
  };

  const renderContent = () => {
    if (isMobileOrTablet || direction === SECTION_DIRECTION.RIGHT) {
      return (
        <>
          {isMobileOrTablet && title()}
          {renderImage()}
          {renderDetails()}
        </>
      );
    }

    return (
      <>
        {renderDetails()}
        {renderImage()}
      </>
    );
  };

  const renderClassName = () => {
    if (isMobileOrTablet) return style.serviceSection;
    return direction === SECTION_DIRECTION.RIGHT ? style.serviceSectionRight : style.serviceSection;
  };

  return (
    <Row justify={isMobileOrTablet ? "space-between" : "center"} align="middle" className={renderClassName()}>
      <Col xs={24} sm={24} lg={20} xxl={16}>
        <Row gutter={isMobileOrTablet && [0, 16]} justify="center" align="middle">
          {renderContent()}
        </Row>
      </Col>
    </Row>
  );
};

export default ServiceSection;
