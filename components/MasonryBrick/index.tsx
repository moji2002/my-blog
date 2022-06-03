import React, { FC } from "react";
import s from "./style.module.scss";
import type { PostCardType } from "../../types/PostCardType";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";

const MasonryBrick: FC<PostCardType> = ({ imgSrc, title, excerpt }) => {
  return (
    // @ts-ignore this lib is incompatible with react18
    <Slide triggerOnce direction="up">
      <article className={s.masonryBrick}>
        <Image
          src={imgSrc}
          layout="responsive"
          width={400}
          height={300}
          loading="lazy"
          objectFit="cover"
          objectPosition="center"
        />
        {/* <img src={} alt="" /> */}
        <div className={s.context}>
          <h2>{title}</h2>
          <p>{excerpt}</p>
        </div>
      </article>
    </Slide>
  );
};

export default MasonryBrick;
