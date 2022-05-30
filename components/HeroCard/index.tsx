import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import Tag from "../Tag";
import s from "./style.module.scss";

type Props = {
  imageSrc: string;
  title: string;
  href: string;
  primary?: boolean;
};

const HeroCard: FC<Props> = ({ imageSrc, title, href, primary = false }) => {
  return (
    <div className={s.box}>
      <Image
        className={s.img}
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className={s.outer}>
        <div className={s.inner}>
          <Tag label="music" href="/music" accent="blue" />
          <h1 className={classNames(s.title, { [s.titlePrimary]: primary })}>
            <Link href={href}>
              <a>{title}</a>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
