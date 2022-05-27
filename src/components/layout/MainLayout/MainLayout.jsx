import { Layout } from "antd";

import FooterLayout from "src/components/layout/FooterLayout";
import HeaderLayout from "src/components/layout/HeaderLayout";

import style from "./MainLayout.module.scss";

const { Content } = Layout;

const MainLayout = (props) => {
  const { children, breakpoint } = props;
  return (
    <Layout className={style.layout}>
      <HeaderLayout isDesktop={breakpoint} />
      <Content style={{ background: "white" }}>{children}</Content>
      <FooterLayout isDesktop={breakpoint} />
    </Layout>
  );
};

export default MainLayout;
