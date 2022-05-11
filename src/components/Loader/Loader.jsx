import { Spin } from "antd";

const Loader = () => {
  return (
    <Spin
      size="large"
      style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}
    />
  );
};

export default Loader;
