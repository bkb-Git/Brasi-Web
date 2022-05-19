import { Menu } from "antd";
import { useRouter } from "next/dist/client/router";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();

  const handleRoute = (e) => router.push(`${e.key}`);

  console.log(router.asPath);

  return (
    <Menu theme="dark" mode="horizontal" selectedKeys={router.asPath} className={styles.navbar}>
      <Menu.Item key="/" onClick={handleRoute}>
        Home
      </Menu.Item>
      <Menu.Item key="/services" onClick={handleRoute}>
        Services
      </Menu.Item>
      <Menu.Item key="/about" onClick={handleRoute}>
        About us
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
