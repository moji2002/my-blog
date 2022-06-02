export type MetaLinks = {
  label: string;
  href: string;
};

export type PostCardType = {
  imgSrc: string;
  excerpt: string;
  title: string;
  date: string;
  metaLinks?: MetaLinks[];
  index: number;
};
