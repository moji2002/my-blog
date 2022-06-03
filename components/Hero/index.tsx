import React, { FC } from "react";
import HeroCard from "../HeroCard";
import s from "./style.module.scss";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import classNames from "classnames";
import type { PostCardType } from "../../types/PostCardType";

type Props = {
  featurePosts: PostCardType[];
};

const Hero: FC<Props> = ({ featurePosts }) => {
  const loaded = useSelector((state: RootState) => state.ui.loaded);

  return (
    <div className={classNames([s.container], { [s.containerLoaded]: loaded })}>
      <div className={s.line}>
        <div className={s.lineInner}></div>
      </div>
      <div className={s.inner}>
        <div className={s.leftColumn}>
          <HeroCard
            title={featurePosts[0].title}
            imgSrc={featurePosts[0].imgSrc}
            thumbnailSrc={featurePosts[0].thumbnailSrc}
            excerpt={featurePosts[0].excerpt}
            href={featurePosts[0].href}
            timestamp={featurePosts[0].timestamp}
            metaLinks={featurePosts[0].metaLinks}
            id={featurePosts[1].id}
            primary
          />
        </div>

        <div className={s.rightColumn}>
          <HeroCard
            title={featurePosts[1].title}
            imgSrc={featurePosts[1].imgSrc}
            thumbnailSrc={featurePosts[0].thumbnailSrc}
            excerpt={featurePosts[1].excerpt}
            href={featurePosts[1].href}
            timestamp={featurePosts[1].timestamp}
            metaLinks={featurePosts[1].metaLinks}
            id={featurePosts[1].id}
          />
          <HeroCard
            title={featurePosts[2].title}
            imgSrc={featurePosts[2].imgSrc}
            thumbnailSrc={featurePosts[0].thumbnailSrc}
            excerpt={featurePosts[2].excerpt}
            href={featurePosts[2].href}
            timestamp={featurePosts[2].timestamp}
            metaLinks={featurePosts[2].metaLinks}
            id={featurePosts[1].id}
          />
        </div>
      </div>
      <div className={s.line}>
        <div className={s.lineInner}></div>
      </div>
    </div>
  );
};

export default Hero;
