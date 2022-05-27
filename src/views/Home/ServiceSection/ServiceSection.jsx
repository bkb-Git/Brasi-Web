import { ReadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Typography } from "antd";

import { useRouter } from "next/dist/client/router";
import Image from "next/image";

import style from "./ServiceSection.module.scss";

const { Paragraph, Title } = Typography;

const SECTION_DIRECTION = {
  RIGHT: "right",
  LEFT: "left",
};

const ServiceSection = (props) => {
  const { details, direction = SECTION_DIRECTION.LEFT } = props;

  const router = useRouter();

  const title = () => {
    return (
      <div className={style.serviceSection__header}>
        <Title level={1} className={style.serviceSection__title}>
          {details.title}
        </Title>
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
      <Col xs={20} lg={11} style={{ zIndex: 2, height: "100%" }}>
        <Row gutter={[0, 48]} justify="center" align="middle" className={style.serviceSection__info}>
          {title()}
          {paragraph()}
        </Row>
      </Col>
    );
  };

  const renderImage = () => {
    return (
      <Col xs={20} lg={13}>
        <div className={style.serviceSection__image}>
          <Image src={details.image} alt={details.title} style={{ zIndex: 0 }} layout="fill" />
        </div>
      </Col>
    );
  };

  const renderContent = () => {
    if (direction === SECTION_DIRECTION.RIGHT) {
      return (
        <>
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

  return (
    <Row
      justify="center"
      align="middle"
      className={direction === SECTION_DIRECTION.RIGHT ? style.serviceSectionRight : style.serviceSection}
    >
      <Col xs={22} lg={20} xxl={16}>
        <Row justify="center" align="middle">
          {renderContent()}
        </Row>
      </Col>
    </Row>
  );
};

export default ServiceSection;
