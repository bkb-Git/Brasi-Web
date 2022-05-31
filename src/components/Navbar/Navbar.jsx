import { useEffect } from "react";
import { Grid, Menu } from "antd";
import { useRouter } from "next/router";

import styles from "./Navbar.module.scss";

const items = [
  { label: "Home", key: "/" },
  {
    label: "Services",
    key: "/services",
    children: [
      { label: "Clearing and Forwarding", key: "/services/clearingandforwarding" },
      { label: "Transport and Logistics", key: "/services/transportandlogistics" },
      { label: "Warehousing Solutions", key: "/services/warehousingsolutions" },
    ],
  },
  { label: "About Us", key: "/about" },
];

const { useBreakpoint } = Grid;

const Navbar = (props) => {
  const { closeDrawer } = props;
  const router = useRouter();

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) & !lg;

  useEffect(() => {
    const handleStop = () => closeDrawer(false);

    router.events.on("routeChangeComplete", handleStop);

    return () => {
      router.events.off("routeChangeComplete", handleStop);
    };
  }, [router]);

  const handleRoute = (key) => router.push(`${key}`);

  return (
    <Menu
      mode={isMobileOrTablet ? "vertical" : "horizontal"}
      items={items}
      onSelect={({ key }) => handleRoute(key)}
      selectedKeys={router.asPath}
      className={styles.navbar}
    />
  );
};

export default Navbar;
