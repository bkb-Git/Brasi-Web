import { Col, Typography } from "antd";

import LogoSvg from "public/svg/logoSvg";

import style from "./CompanyLogo.module.scss";

const { Title } = Typography;

const CompanyLogo = (props) => {
  const { flex, responsiveWidths } = props;
  return (
    <Col {...responsiveWidths} className={style.logo}>
      <LogoSvg width="100%" height="40%" color={{ first: "#023059", second: "#0469c2" }} />
      <Title className={style.logo__title} level={4}>
        Loglink Logistics
      </Title>
    </Col>
  );
};

export default CompanyLogo;
