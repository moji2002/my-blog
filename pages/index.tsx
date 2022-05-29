import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/MainHeader";
import Hero from "../components/Hero";
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
        <Hero />
      </PageHeader>
    </>
  );
};

export default Home;
