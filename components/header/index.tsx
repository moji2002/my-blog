/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import s from "./style.module.scss";

type Props = {
  // children: ReactNode;
};

const Header: FC<Props> = () => {
  return (
    <div className={s.container}>
      <div className={s.leftHand}>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img className={s.icon} src="/assets/icons/linkedin.svg" alt="" />
        </a>{" "}
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img className={s.icon} src="/assets/icons/github.svg" alt="" />
        </a>
      </div>
      <div className={s.logo}>Philosophy.</div>
      <div className={s.rightHand}>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img className={s.icon} src="/assets/icons/search.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
