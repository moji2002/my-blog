import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NAV_ITEMS } from "../../constants/navItems";
import { closeMenu } from "../../store/userInterfaceSlice";
import MobileMenuItem from "../mobile-menu-item";
import s from "./style.module.scss";
import { RootState } from "../../store";
import { CSSTransition } from "react-transition-group";

const NavMobile: FC = () => {
  const isMenuOpen = useSelector((state: RootState) => state.ui.isMenuOpen);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(closeMenu());

  return (
    <CSSTransition
      in={isMenuOpen}
      timeout={200}
      unmountOnExit
      classNames={{
        enter: s.menuEnter,
        enterActive: s.menuEnterActive,
        exit: s.menuExit,
        exitActive: s.menuExitActive,
      }}
    >
      <div className={s.box}>
        <div onClick={handleClose} className={s.close} />
        <h2 className={s.heading}>Site Navigation</h2>
        <ol className={s.list}>
          {NAV_ITEMS.map((navItem) => (
            <MobileMenuItem key={navItem.label} {...navItem} />
          ))}
        </ol>
      </div>
    </CSSTransition>
  );
};

export default NavMobile;
