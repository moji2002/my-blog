import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import NavDesktop from "../components/nav-desktop";
import NavMobile from "../components/nav-mobile";
import PageHeader from "../components/page-header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>my blog</title>
        <meta name="description" content="my fantastic blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader>
        <Header />
        <NavDesktop />
        <NavMobile />
        <div style={{ height: 500 }}></div>
      </PageHeader>
    </>
  );
};

export default Home;
