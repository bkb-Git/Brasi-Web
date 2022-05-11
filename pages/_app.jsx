import { useState, useEffect } from "react";

import Loader from "../src/components/Loader";
import MainLayout from "../src/components/layout/MainLayout";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  if (loading) return <Loader />;

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default MyApp;
