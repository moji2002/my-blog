export type MetaLinks = {
  label: string;
  href: string;
};

export type PostCardType = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  timestamp: number;
  imgSrc: string;
  thumbnailSrc?: string;
  metaLinks?: MetaLinks[];
};
