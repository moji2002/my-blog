import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/MainHeader";
import Hero from "../components/Hero";
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import PageHeader from "../components/PageHeader";
import Search from "../components/Search";
import PageLoader from "../components/PageLoader";
import MasonryGrid from "../components/MasonryGrid";
import MasonryBrick from "../components/MasonryBrick";
import getRandomInt from "../utils/getRandomInt";
import lorem from "../utils/lorem";
import type { PostCardType } from "../types/PostCardType";

type Props = {
  posts: PostCardType[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>my blog</title>
        <meta name="description" content="my fantastic blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader>
        <NavDesktop />
        <NavMobile />
        <Search />
        {/* <Hero /> */}
        <PageLoader />
        <MasonryGrid>
          {posts.map(({ imgSrc, excerpt, title, date, index }) => {
            return (
              <MasonryBrick
                key={title}
                title={title}
                excerpt={excerpt}
                date={date}
                imgSrc={imgSrc}
                metaLinks={[{ href: "", label: "" }]}
                index={index}
              />
            );
          })}
        </MasonryGrid>
      </PageHeader>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = [...Array(20).keys()].map((index) => {
    const imgSeed = getRandomInt(1, 1000);
    const imgHeight = getRandomInt(200, 500);
    const title = lorem.generateSentences(1);
    const excerpt = lorem.generateParagraphs(1);
    return {
      imgSrc: `https://picsum.photos/seed/${imgSeed}/400/${imgHeight}`,
      excerpt,
      title,
      date: Date.now(),
      index,
    };
  });
  return {
    props: { posts },
  };
}
