import Image from "next/image";
import React, { FC } from "react";
import Tag from "../Tag";
import s from "./style.module.scss";

type Props = {
  // children: ReactNode;
  imageSrc: string;
};

const HeroCard: FC<Props> = ({ imageSrc }) => {
  return (
    <div className={s.box}>
      <Image
        className={s.img}
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Tag label="music" href="/music" accent="blue" />
    </div>
  );
};

export default HeroCard;
