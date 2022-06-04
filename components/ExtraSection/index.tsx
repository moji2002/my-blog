import React, { FC } from "react";
import FooterTag from "../FooterTag";
import PopularPostBlock from "../PopularPostBlock";
import s from "./style.module.scss";

type Props = {
  // children: ReactNode;
};

const ExtraSection: FC<Props> = () => {
  return (
    <section className={s.extra}>
      <div className={s.upperRow}>
        <div className={s.popular}>
          <h3 className={s.h3}>Popular Posts</h3>
          <div className={s.popularPosts}>
            <PopularPostBlock />
            <PopularPostBlock />
            <PopularPostBlock />
            <PopularPostBlock />
            <PopularPostBlock />
            <PopularPostBlock />
          </div>
        </div>
        <div className={s.about}>
          <h3 className={s.h3}>About Philosophy</h3>
          <p className={s.text}>
            Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero
            malesuada feugiat. Pellentesque in ipsum id orci porta dapibus.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut
            lacinia in, elementum id enim. Donec sollicitudin molestie
            malesuada.
          </p>
        </div>
      </div>

      <div className={s.tags}>
        <h3 className={s.h3}>Tags</h3>
        <div className={s.tagsBox}>
          <FooterTag label="salad" href="" />
          <FooterTag label="recipe" href="" />
          <FooterTag label="places" href="" />
          <FooterTag label="tips" href="" />
          <FooterTag label="friends" href="" />
          <FooterTag label="travel" href="" />
          <FooterTag label="exercise" href="" />
          <FooterTag label="reading" href="" />
          <FooterTag label="running" href="" />
          <FooterTag label="self-help" href="" />
          <FooterTag label="vacation" href="" />
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;
