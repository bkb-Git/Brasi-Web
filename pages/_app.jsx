import { useState, useEffect, useMemo } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Loader from "src/components/Loader";
import MainLayout from "src/components/layout/MainLayout";
import AppContext, { appDefaultState, initAppActions } from "src/context/app";
import INFO_OBJECT from "src/info";

import "styles/index.scss";

const ROUTES = {
  "/": "Home | Loglink Logistics",
  "/about": "About us | Loglink Logistics",
  "/services/clearingandforwarding": "Clearing and Forwarding",
  "/services/transportandlogistics": "Transport and Logistics",
  "/services/warehousingsolutions": "Warehousing Solutions ",
};

const MyApp = (props) => {
  const { Component, pageProps } = props;
  const [loading, setLoading] = useState(true);
  const [appState, setAppState] = useState(appDefaultState);
  const router = useRouter();

  const appActions = initAppActions([appState, setAppState]);

  const contextValue = useMemo(() => ({ ...appState, ...appActions }), [appActions, appState]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  const Header = () => {
    return (
      <Head>
        <title>{ROUTES[router.pathname]}</title>
        <meta name="msapplication-TileColor" content="#9f00a7" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta
          name="description"
          content="Import,Export,Transport,Warehousing, Logisitics, Loglink Logistics Limited, Kenya"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
      </Head>
    );
  };

  if (loading) return <Loader />;

  return (
    <AppContext.Provider value={contextValue}>
      <Header />
      <MainLayout>
        <Component services={INFO_OBJECT.SERVICES} {...pageProps} />
      </MainLayout>
    </AppContext.Provider>
  );
};

export default MyApp;
