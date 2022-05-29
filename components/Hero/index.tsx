import React, { FC } from "react";
import HeroCard from "../HeroCard";
import s from "./style.module.scss";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import classNames from "classnames";

type Props = {
  // children: ReactNode;
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
          <HeroCard imageSrc="/assets/images/xfeatured-guitarman.webp" />
        </div>

        <div className={s.rightColumn}>
          <HeroCard imageSrc="/assets/images/xfeatured-watch.webp" />
          <HeroCard imageSrc="/assets/images/xfeatured-beetle.webp" />
        </div>
      </div>
      <div className={s.line}>
        <div className={s.lineInner}></div>
      </div>
    </div>
  );
};

export default Hero;
