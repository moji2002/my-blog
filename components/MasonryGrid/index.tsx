import { FC, ReactNode } from "react";
import s from "./style.module.scss";

type Props = {
  children: ReactNode;
};

const MasonryGrid: FC<Props> = ({ children }) => {
  return (
    <section className={s.masonryOuter}>
      <div className={s.masonry}>{children}</div>
    </section>
  );
};

export default MasonryGrid;
