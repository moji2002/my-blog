import React, { FC } from "react";
import s from "./style.module.scss";

type Props = {
  onClick: () => {};
};

const CloseButton: FC<Props> = ({ onClick }) => (
  <div onClick={onClick} className={s.close} />
);

export default CloseButton;
