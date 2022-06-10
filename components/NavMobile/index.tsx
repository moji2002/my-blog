import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { closeMenu } from "../../store/userInterfaceSlice";
import { NAV_ITEMS } from "../../constants/navItems";
import FullscreenModal from "../FullscreenModal";
import MobileMenuItem from "./MobileMenuItem";
import s from "./style.module.scss";

const NavMobile: FC = () => {
  const navMenuVisible = useSelector(
    (state: RootState) => state.ui.navMenuVisible
  );
  const dispatch = useDispatch();

  const handleClose = () => dispatch(closeMenu());

  return (
    <FullscreenModal visible={navMenuVisible} handleClose={handleClose}>
      <h2 className={s.heading}>Site Navigation</h2>
      <ol className={s.list}>
        {NAV_ITEMS.map((navItem) => (
          <MobileMenuItem key={navItem.label} {...navItem} />
        ))}
      </ol>
    </FullscreenModal>
  );
};

export default NavMobile;
