import React, { FC } from "react";
import HeroCard from "./HeroCard";
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
          <HeroCard {...featurePosts[0]} primary />
        </div>

        <div className={s.rightColumn}>
          <HeroCard {...featurePosts[1]} />
          <HeroCard {...featurePosts[2]} />
        </div>
      </div>
      <div className={s.line}>
        <div className={s.lineInner}></div>
      </div>
    </div>
  );
};

export default Hero;
