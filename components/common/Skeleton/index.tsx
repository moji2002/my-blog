import React, { FC } from "react";
import s from "./style.module.scss";

type Props = {
  // children: ReactNode;
};

const Skeleton: FC<Props> = () => {
  return <div className={s.skeleton}></div>;
};

export default Skeleton;
