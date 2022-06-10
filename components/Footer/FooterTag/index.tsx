import Link from "next/link";
import React, { FC } from "react";
import s from "./style.module.scss";

type Props = {
  label: string;
  href: string;
};

const FooterTag: FC<Props> = ({ label, href }) => (
  <Link href={href}>
    <a className={s.tag}>{label}</a>
  </Link>
);

export default FooterTag;
