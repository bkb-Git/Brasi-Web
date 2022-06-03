import { Row } from "antd";

import style from "./Loader.module.scss";
import SpeedingVan from "./SpeedingVan";

const Loader = () => {
  return (
    <Row justify="center" align="middle" className={style.loader}>
      <SpeedingVan style={style} width="30rem" height="30rem" />
    </Row>
  );
};

export default Loader;
