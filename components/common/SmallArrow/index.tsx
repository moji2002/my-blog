import React, { FC } from "react";
import classNames from "classnames";
import { Sides } from "../../../constants/sides";
import s from "./style.module.scss";

type Props = {
  side?: Sides;
};

const Arrow: FC<Props> = ({ side = "down" }) => {
  const style = classNames(s.arrow, s[`${side}`]);

  return <i className={style}></i>;
};

export default Arrow;
