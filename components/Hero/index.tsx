import React, { FC } from "react";
import HeroCard from "../HeroCard";
import s from "./style.module.scss";

type Props = {
  // children: ReactNode;
};

const Hero: FC<Props> = () => {
  return (
    <div className={s.container}>
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
