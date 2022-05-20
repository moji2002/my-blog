import React, { FC } from "react";
import DesktopMenuItem from "../desktop-menu-item";
import { NavItem } from "../../types/navItem";
import s from "./style.module.scss";

type Props = {
  // children: ReactNode;
};

const NavDesktop: FC<Props> = () => {
  return (
    <nav className={s.container}>
      {NAV_ITEMS.map((navItem) => {
        return <DesktopMenuItem key={navItem.label} {...navItem} />;
      })}
    </nav>
  );
};

export default NavDesktop;

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "link5",
  },
  {
    label: "Categories",
    children: [
      {
        label: "Lifestyle",
        subLabel: "",
        href: "link3",
      },
      {
        label: "Health",
        subLabel: "",
        href: "link4",
      },
      {
        label: "Family",
        subLabel: "",
        href: "link4",
      },
      {
        label: "Management",
        subLabel: "",
        href: "link4",
      },
      {
        label: "Travel",
        subLabel: "",
        href: "link4",
      },
      {
        label: "Work",
        subLabel: "",
        href: "link4",
      },
    ],
  },
  {
    label: "Blog",
    children: [
      {
        label: "Video Post",
        subLabel: "",
        href: "link3",
      },
      {
        label: "Audio Post",
        subLabel: "",
        href: "link4",
      },
      {
        label: "Gallery Post",
        subLabel: "",
        href: "link4",
      },
      {
        label: "Standard Post",
        subLabel: "",
        href: "link4",
      },
    ],
  },
  {
    label: "Styles",
    href: "link5",
  },
  {
    label: "About",
    href: "link6",
  },
  {
    label: "Contact",
    href: "link6",
  },
];
