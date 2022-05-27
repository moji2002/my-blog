/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../../store/userInterfaceSlice";
import s from "./style.module.scss";

const Header: FC = () => {
  const dispatch = useDispatch();

  const handleOpenMenu = () => dispatch(openMenu());

  return (
    <div className={s.container}>
      <HamburgerMenu onClick={handleOpenMenu} />
      <div className={s.leftHandSide}>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img className={s.icon} src="/assets/icons/linkedin.svg" alt="" />
        </a>{" "}
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img className={s.icon} src="/assets/icons/github.svg" alt="" />
        </a>
      </div>
      <div className={s.logo}>Philosophy.</div>
      <div className={s.rightHandSide}>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img className={s.icon} src="/assets/icons/search.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;

type Props = {
  onClick: () => {};
};

const HamburgerMenu: FC<Props> = ({ onClick }) => (
  <div onClick={onClick} className={s.hamburger}>
    <div className={s.hamburgerLine} />
    <div className={s.hamburgerLine} />
    <div className={s.hamburgerLine} />
  </div>
);
