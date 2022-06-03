import React, { FC } from "react";
import s from "./style.module.scss";
import type { PostCardType } from "../../types/PostCardType";

const MasonryBrick: FC<PostCardType> = ({ imgSrc, title, excerpt }) => {
  return (
    <article className={s.masonryBrick}>
      <img src={imgSrc} alt="" />
      <h2>{title}</h2>
      <p>{excerpt}</p>
    </article>
  );
};

export default MasonryBrick;
