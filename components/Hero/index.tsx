import React, { FC } from "react";
import HeroCard from "../HeroCard";
import s from "./style.module.scss";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import classNames from "classnames";
import type { PostCardType } from "../../types/PostCardType";

type Tuple<
  T,
  N extends number,
  R extends readonly T[] = []
> = R["length"] extends N ? R : Tuple<T, N, readonly [T, ...R]>;

type Props = {
  featurePosts: Tuple<PostCardType, 3>;
};

const Hero: FC<Props> = () => {
  const loaded = useSelector((state: RootState) => state.ui.loaded);

  return (
    <div className={classNames([s.container], { [s.containerLoaded]: loaded })}>
      <div className={s.line}>
        <div className={s.lineInner}></div>
      </div>
      <div className={s.inner}>
        <div className={s.leftColumn}>
          <HeroCard
            title="What Your Music Preference Says About You and Your Personality."
            imageSrc="/assets/images/xfeatured-guitarman.webp"
            href=""
            primary
          />
        </div>

        <div className={s.rightColumn}>
          <HeroCard
            title="The Pomodoro Technique Really Works."
            imageSrc="/assets/images/xfeatured-watch.webp"
            href=""
          />
          <HeroCard
            title="Throwback To The Good Old Days."
            imageSrc="/assets/images/xfeatured-beetle.webp"
            href=""
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
