import { FC, useState } from "react";
import Link from "next/link";
import { NavItem } from "../../constants/navItems";
import s from "./style.module.scss";
import { CSSTransition } from "react-transition-group";
import Arrow from "../arrow";
import { Sides } from "../../constants/sides";

const DesktopMenuItem: FC<NavItem> = ({ label, children, href }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={s.box}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      {href ? (
        <Link href={href}>
          <a className={s.link}>{label}</a>
        </Link>
      ) : (
        <div className={s.label}>
          <span className={s.link}>{label}</span>
          <Arrow side={active ? Sides.up : Sides.down} />
        </div>
      )}

      {children && (
        <CSSTransition
          in={active}
          timeout={200}
          unmountOnExit
          classNames={{
            enter: s.menuEnter,
            enterActive: s.menuEnterActive,
            exit: s.menuExit,
            exitActive: s.menuExitActive,
          }}
        >
          <div className={s.menu}>
            {children.map(({ label, href = "" }) => (
              <div key={label} className={s.link}>
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </div>
            ))}
          </div>
        </CSSTransition>
      )}
    </div>
  );
};

export default DesktopMenuItem;
