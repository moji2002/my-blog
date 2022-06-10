import { useState } from "react";

const useDebounceState = <T>(initialValue: T, timeout = 300) => {
  const [state, setState] = useState<T>(initialValue);

  let timer: ReturnType<typeof setTimeout>;

  const debounce = (value: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => setState(value), timeout);
  };

  return [state, debounce] as const;
};

export default useDebounceState;
