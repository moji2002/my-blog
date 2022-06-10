import React, { FC } from "react";
import { NAV_ITEMS } from "../../constants/navItems";
import DesktopMenuItem from "./DesktopMenuItem";
import s from "./style.module.scss";

const NavDesktop: FC = () => {
  return (
    <nav className={s.container}>
      {NAV_ITEMS.map((navItem) => (
        <DesktopMenuItem key={navItem.label} {...navItem} />
      ))}
    </nav>
  );
};

export default NavDesktop;
