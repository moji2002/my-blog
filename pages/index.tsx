import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import PageHeader from "../components/PageHeader";
import Search from "../components/Search";

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
        <Search />
        <div style={{ height: 500 }}></div>
      </PageHeader>
    </>
  );
};

export default Home;
