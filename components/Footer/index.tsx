import React, { FC } from "react";
import s from "./style.module.scss";

type Props = {
  // children: ReactNode;
};

const Footer: FC<Props> = () => {
  return (
    <div className={s.footer}>
      <div className={s.inner}>
        <div className={s.upper}></div>
        <div className={s.lower}></div>
      </div>
    </div>
  );
};

export default Footer;
