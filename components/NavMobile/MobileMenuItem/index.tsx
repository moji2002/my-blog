import React, { FC, useRef, useState } from "react";
import classNames from "classnames";
import { NavItem } from "../../../constants/navItems";
import Arrow from "../../common/SmallArrow";
import { Sides } from "../../../constants/sides";
import s from "./style.module.scss";

const MobileMenuItem: FC<NavItem> = ({ label, children, href }) => {
  const [active, setActive] = useState(false);

  const toggle = () => setActive((s) => !s);

  const itemStyle = classNames(s.item, {
    [s.item_active]: active,
  });

  const listRef = useRef<HTMLOListElement>(null);

  return (
    <li className={s.menu}>
      {href ? (
        <a href={href} className={s.link}>
          {label}
        </a>
      ) : (
        <div onClick={toggle} className={s.menu_inner}>
          <span className={s.link}> {label}</span>
          <Arrow side={active ? Sides.up : Sides.down} />
        </div>
      )}
      {children && (
        <ol
          className={itemStyle}
          ref={listRef}
          style={{ height: active ? listRef.current?.scrollHeight : 0 }}
        >
          {children.map(({ label, href }) => (
            <li key={label} className={classNames(s.link, s.subMenu)}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ol>
      )}
    </li>
  );
};

export default MobileMenuItem;
