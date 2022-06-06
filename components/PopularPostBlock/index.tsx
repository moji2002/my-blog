import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import s from "./style.module.scss";

const PopularPostBlock: FC = () => {
  return (
    <div className={s.box}>
      <Image
        src="/assets/images/xfeatured-beetle.webp"
        width={70}
        height={70}
      />
      <div className={s.content}>
        <h5>
          <Link href="">
            <a>Visiting Theme Parks Improves Your Health. </a>
          </Link>
        </h5>
        <div className={s.meta}>
          <span>
            <Link href="">
              <a>by John Doe</a>
            </Link>
          </span>
          <span> on Dec 16 ,2017</span>
        </div>
      </div>
    </div>
  );
};

export default PopularPostBlock;
