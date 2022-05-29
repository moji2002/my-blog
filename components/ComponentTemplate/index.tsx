import React, { FC } from "react";
import s from "./style.module.scss";

type Props = {
  // children: ReactNode;
};

const Template: FC<Props> = () => {
  return <div className={s.container}></div>;
};

export default Template;
