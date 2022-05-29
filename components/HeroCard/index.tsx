import Image from "next/image";
import React, { FC } from "react";
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
    </div>
  );
};

export default HeroCard;
