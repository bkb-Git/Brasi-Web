import { Menu } from "antd";
import { useRouter } from "next/dist/client/router";

import styles from "./Navbar.module.scss";

const { SubMenu } = Menu;

const items = [
  { label: "Home", key: "/" },
  {
    label: "Services",
    key: "/services",
    children: [
      { label: "Clearing and Forwarding", key: "/services/Clearing-&-Forwarding" },
      { label: "Transport and Logistics", key: "/services/Transport-&-Logistics" },
      { label: "Warehousing Solutions", key: "/services/Warehousing-Solutions" },
    ],
  },
  { label: "About Us", key: "/about" },
];

const Navbar = () => {
  const router = useRouter();

  const handleRoute = (key) => router.push(`${key}`);

  return (
    <Menu
      mode="horizontal"
      items={items}
      onSelect={({ key }) => handleRoute(key)}
      selectedKeys={router.asPath}
      className={styles.navbar}
    />
  );
};

export default Navbar;
