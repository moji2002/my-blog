import { FC, useState } from "react";
import Link from "next/link";
import { NavItem } from "../../types/navItem";
import s from "./style.module.scss";

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
          <a>{label}</a>
        </Link>
      ) : (
        <span>{label}</span>
      )}

      {active && children && (
        <div className={s.menu}>
          {children.map(({ label, href = "" }) => (
            <div key={label} className={s.subMenu}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DesktopMenuItem;
