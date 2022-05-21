import { Col, Typography } from "antd";
import style from "./ClientCard.module.scss";

const { Title } = Typography;

const ClientCard = (props) => {
  const { company } = props;
  return (
    <Col className={style.card} span={8}>
      <Title className={style.card__title} level={5}>
        {company}
      </Title>
    </Col>
  );
};

export default ClientCard;
