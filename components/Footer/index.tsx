import Link from "next/link";
import React, { FC } from "react";
import s from "./style.module.scss";
import type { FooterLink } from "../../types/FooterTypes";

type Props = {
  links: {
    quickLinks: FooterLink[];
    archives: FooterLink[];
    social: FooterLink[];
  };
};

const Footer: FC<Props> = ({ links }) => {
  return (
    <div className={s.footer}>
      <div className={s.inner}>
        <div className={s.upper}>
          <div className={s.leftHand}>
            <div className={s.column}>
              <Label text="quick links" />

              {links.quickLinks.map((link) => (
                <FooterLink
                  key={link.href}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </div>
            <div className={s.column}>
              <Label text="archives" />

              {links.archives.map((link) => (
                <FooterLink
                  key={link.href}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </div>
            <div className={s.column}>
              <Label text="social" />

              {links.social.map((link) => (
                <FooterLink
                  key={link.href}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </div>
          </div>
          <div className={s.rightHand}>right</div>
        </div>
        <div className={s.lower}></div>
      </div>
    </div>
  );
};

export default Footer;

const Label = ({ text }: { text: string }) => (
  <h4 className={s.footerLabel}>{text}</h4>
);

const FooterLink = ({ label, href }: { label: string; href: string }) => (
  <Link href={href}>
    <a className={s.link}>{label}</a>
  </Link>
);
