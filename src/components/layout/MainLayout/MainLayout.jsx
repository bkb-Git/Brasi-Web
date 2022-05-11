import { Layout } from "antd";

import FooterLayout from "../FooterLayout";
import HeaderLayout from "../HeaderLayout";

import style from "./MainLayout.module.scss";

const { Content } = Layout;

const MainLayout = (props) => {
  const { children } = props;
  return (
    <Layout className={style.layout}>
      <HeaderLayout />
      <Content style={{ background: "white" }}>{children}</Content>
      <FooterLayout />
    </Layout>
  );
};

export default MainLayout;
