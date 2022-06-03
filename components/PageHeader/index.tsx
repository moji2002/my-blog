import React, { FC, ReactNode } from "react";
import Image from "next/image";
import s from "./style.module.scss";

type Props = {
  children: ReactNode;
};

const PageHeader: FC<Props> = ({ children }) => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>{children}</div>
      <Image
        className={s.img}
        src="/assets/images/hero-bg.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={20}
      />
    </section>
  );
};

export default PageHeader;
