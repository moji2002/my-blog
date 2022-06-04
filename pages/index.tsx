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
import ExtraSection from "../components/ExtraSection";

type Props = {
  posts: PostCardType[];
  featurePosts: PostCardType[];
};

const Home: NextPage<Props> = ({ posts, featurePosts }) => {
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
        <Hero featurePosts={featurePosts} />
        <PageLoader />
      </PageHeader>
      <MasonryGrid>
        {posts.map((props) => (
          <MasonryBrick key={props.id} {...props} />
        ))}
      </MasonryGrid>
      <ExtraSection />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const posts: PostCardType[] = [...Array(20).keys()].map((index) => {
    const imgSeed = getRandomInt(1, 1000);
    const imgHeight = getRandomInt(200, 500);
    const title = lorem.generateSentences(1);
    const excerpt = lorem.generateParagraphs(1);
    return {
      imgSrc: `https://picsum.photos/seed/${imgSeed}/400/${imgHeight}`,
      thumbnailSrc: `https://picsum.photos/seed/${imgSeed}/100/100`,
      excerpt,
      title,
      timestamp: Date.now(),
      id: String(index),
      href: "",
    };
  });

  const featurePosts: PostCardType[] = [...Array(3).keys()].map((index) => {
    const imgSeed = getRandomInt(1, 1000);
    const title = lorem.generateSentences(1);
    const excerpt = lorem.generateParagraphs(1);
    return {
      imgSrc: `https://picsum.photos/seed/${imgSeed}/800/500`,
      thumbnailSrc: `https://picsum.photos/seed/${imgSeed}/100/100`,
      excerpt,
      title,
      timestamp: Date.now(),
      id: String(index),
      href: "",
    };
  });
  return {
    props: { posts, featurePosts },
    revalidate: 10,
  };
}
