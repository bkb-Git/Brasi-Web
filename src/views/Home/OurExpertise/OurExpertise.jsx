import { Col, Row } from "antd";

import style from "./OurExpertise.module.scss";

const OurExpertise = (props) => {
  const { class: style } = props;

  return (
    <Row className={style.service} justify="center" align="middle">
      <Col flex={1} />
      <Col flex={1} />
    </Row>
  );
};

export default OurExpertise;
