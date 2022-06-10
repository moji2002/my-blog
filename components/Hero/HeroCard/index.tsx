import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import HeroTag from "../HeroTag";
import s from "./style.module.scss";

import { PostCardType } from "../../../types/PostCardType";

interface Props extends PostCardType {
  primary?: boolean;
}

const HeroCard: FC<Props> = ({
  imgSrc,
  thumbnailSrc,
  title,
  href,
  primary = false,
}) => {
  return (
    <div className={s.box}>
      <Image
        className={s.img}
        src={imgSrc}
        placeholder="blur"
        layout="fill"
        blurDataURL={thumbnailSrc}
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <div className={s.outer}>
        <div className={s.inner}>
          <HeroTag label="music" href="/music" accent="blue" />
          <h1 className={classNames(s.title, { [s.titlePrimary]: primary })}>
            <Link href={href}>
              <a>{title}</a>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
