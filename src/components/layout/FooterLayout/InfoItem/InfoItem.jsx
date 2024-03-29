import { Col, Row, Typography } from "antd";

const { Paragraph, Text } = Typography;

const InfoItem = (props) => {
  const { info, other, contactOnMobile, contact } = props;

  const renderTitle = () => {
    if (info)
      return (
        <Col xs={12} lg={8} style={{ display: "flex", justifyContent: !contactOnMobile ? "flex-end" : "center" }}>
          <Paragraph strong style={{ marginBottom: other && 0, marginRight: other && "0.5em" }}>
            {info}
          </Paragraph>
        </Col>
      );

    return null;
  };

  const renderOtherDetails = () => {
    if (other)
      return (
        <Col
          xs={24}
          sm={24}
          lg={16}
          style={{ display: "flex", justifyContent: contactOnMobile ? "center" : "flex-start" }}
        >
          <Text>{other}</Text>
        </Col>
      );
    return null;
  };

  return (
    <Col span={24} style={{ marginBottom: other && "1em" }}>
      <Row justify={contact ? "start" : "center"} align="middle" gutter={[8, 0]}>
        {renderTitle()}
        {renderOtherDetails()}
      </Row>
    </Col>
  );
};

export default InfoItem;
