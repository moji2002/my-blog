import classNames from "classnames";
import Link from "next/link";
import React, { FC } from "react";
import s from "./style.module.scss";

type Props = {
  label: string;
  href: string;
  accent: "green" | "blue";
};

const HeroTag: FC<Props> = ({ label, href, accent }) => (
  <Link href={href}>
    <a
      className={classNames(s.tag, {
        [s.green]: accent === "green",
        [s.blue]: accent === "blue",
      })}
    >
      {label}
    </a>
  </Link>
);

export default HeroTag;
