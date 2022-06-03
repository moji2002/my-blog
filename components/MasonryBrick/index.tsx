import React, { FC } from "react";
import s from "./style.module.scss";
import type { PostCardType } from "../../types/PostCardType";
import { Slide } from "react-awesome-reveal";

const MasonryBrick: FC<PostCardType> = ({ imgSrc, title, excerpt }) => {
  return (
    // @ts-ignore this lib is incompatible with react18
    <Slide triggerOnce direction="up">
      <article className={s.masonryBrick}>
        <img src={imgSrc} alt="" />
        <div className={s.context}>
          <h2>{title}</h2>
          <p>{excerpt}</p>
        </div>
      </article>
    </Slide>
  );
};

export default MasonryBrick;
