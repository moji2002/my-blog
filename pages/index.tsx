import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/MainHeader";
import Hero from "../components/Hero";
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import PageHeader from "../components/PageHeader";
import Search from "../components/Search";
import PageLoader from "../components/common/PageLoader";
import MasonryGrid from "../components/MasonryGrid";
import MasonryBrick from "../components/MasonryGrid/MasonryBrick";
import getRandomInt from "../utils/getRandomInt";
import lorem from "../utils/lorem";
import type { PostCardType } from "../types/PostCardType";
import type { FooterLink } from "../types/FooterTypes";
import ExtraSection from "../components/ExtraSection";
import Footer from "../components/Footer";

type Props = {
  posts: PostCardType[];
  featurePosts: PostCardType[];
  footerLinks: {
    quickLinks: FooterLink[];
    archives: FooterLink[];
    social: FooterLink[];
  };
};

const Home: NextPage<Props> = ({ posts, featurePosts, footerLinks }) => {
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
      <Footer links={footerLinks} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const posts: PostCardType[] = [...Array(20).keys()].map((index) => {
    const imgSeed = getRandomInt(10000, 20000);
    const imgHeight = getRandomInt(200, 500);
    const title = lorem.generateWords(5);
    const excerpt = lorem.generateParagraphs(1);
    return {
      imgSrc: `https://picsum.photos/seed/i${imgSeed}/400/${imgHeight}`,
      thumbnailSrc: `https://picsum.photos/seed/i${imgSeed}/100/100`,
      excerpt,
      title,
      timestamp: Date.now(),
      id: String(index),
      href: "",
    };
  });

  const featurePosts: PostCardType[] = [...Array(3).keys()].map((index) => {
    const imgSeed = getRandomInt(10000, 20000);
    const title = lorem.generateSentences(1);
    const excerpt = lorem.generateParagraphs(1);
    return {
      imgSrc: `https://picsum.photos/seed/i${imgSeed}/800/500`,
      thumbnailSrc: `https://picsum.photos/seed/i${imgSeed}/100/100`,
      excerpt,
      title,
      timestamp: Date.now(),
      id: String(index),
      href: "",
    };
  });

  const quickLinks = [
    { label: "home", href: "" },
    { label: "blog", href: "" },
    { label: "style", href: "" },
    { label: "about", href: "" },
    { label: "contact", href: "" },
    { label: "privacy policy", href: "" },
  ];

  const archives = [
    { label: "january 2018", href: "" },
    { label: "december 2017", href: "" },
    { label: "november 2017", href: "" },
    { label: "october 2017", href: "" },
    { label: "september 2017", href: "" },
    { label: "august 2017", href: "" },
  ];

  const social = [
    { label: "facebook", href: "" },
    { label: "instagram", href: "" },
    { label: "twitter", href: "" },
    { label: "telegram", href: "" },
    { label: "linkedIn", href: "" },
    { label: "github", href: "" },
  ];

  const footerLinks = { quickLinks, archives, social };

  return {
    props: { posts, featurePosts, footerLinks },
  };
}
