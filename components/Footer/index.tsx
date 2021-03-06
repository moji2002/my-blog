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
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.upper}>
          <div className={s.column}>
            <Label text="quick links" />

            {links.quickLinks.map((link) => (
              <FooterLink key={link.href} label={link.label} href={link.href} />
            ))}
          </div>
          <div className={s.column}>
            <Label text="archives" />

            {links.archives.map((link) => (
              <FooterLink key={link.href} label={link.label} href={link.href} />
            ))}
          </div>
          <div className={s.column}>
            <Label text="social" />

            {links.social.map((link) => (
              <FooterLink key={link.href} label={link.label} href={link.href} />
            ))}
          </div>

          <div className={s.column2}>
            <Label text="our newsletter" />
            <p>
              Sit vel delectus amet officiis repudiandae est voluptatem. Tempora
              maxime provident nisi et fuga et enim exercitationem ipsam. Culpa
              consequatur occaecati.
            </p>
          </div>
        </div>
        <div className={s.lower}>© Copyright Philosophy 2018</div>
      </div>
    </footer>
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
