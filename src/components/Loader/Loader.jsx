import { Spin } from "antd";

import style from "./Loader.module.scss";

const Loader = () => {
  return <Spin className={style.loader} size="large" />;
};

export default Loader;
