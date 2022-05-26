import React, { FC } from "react";
import s from "./style.module.scss";
import classNames from "classnames";
import { Sides } from "../../constants/sides";

type Props = {
  side?: Sides;
};

const Arrow: FC<Props> = ({ side = "down" }) => {
  const style = classNames(s.arrow, s[`${side}`]);

  return <i className={style}></i>;
};

export default Arrow;
