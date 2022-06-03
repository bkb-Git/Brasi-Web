import { Col, Typography } from "antd";
import { useRouter } from "next/router";

import LogoSvg from "public/svg/logoSvg";

import style from "./CompanyLogo.module.scss";

const { Title } = Typography;

const CompanyLogo = (props) => {
  const { responsiveWidths } = props;

  const router = useRouter();

  const handleClick = () => router.push("/");

  return (
    <Col {...responsiveWidths} className={style.logo} onClick={handleClick}>
      <LogoSvg width="100%" height="40%" color={{ first: "#023059", second: "#0469c2" }} />
      <Title className={style.logo__title} level={4}>
        Loglink Logistics
      </Title>
    </Col>
  );
};

export default CompanyLogo;
