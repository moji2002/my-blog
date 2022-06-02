import React, { ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
  when: boolean;
  fallback?: ReactNode;
}

const Show: FC<Props> = ({ when, children, fallback = null }) => (
  <>{when ? children : fallback}</>
);

export default Show;
