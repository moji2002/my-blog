import React, { ReactNode } from "react";

interface Props<T> {
  render: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
  each: T[];
}

const For = <T extends unknown>({ each, render, keyExtractor }: Props<T>) => {
  return (
    <>
      {each.map((item) => (
        <React.Fragment key={keyExtractor(item)}>{render(item)}</React.Fragment>
      ))}
    </>
  );
};

export default For;
