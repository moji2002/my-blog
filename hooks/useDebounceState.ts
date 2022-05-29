import { useRef, useState } from "react";

const useDebounceState = <T>(initialValue: T, timeout = 300) => {
  const [state, setState] = useState<T>(initialValue);

  const debounceTimeoutId = useRef<ReturnType<typeof setTimeout>>();

  const debounce = (value: T) => {
    clearTimeout(debounceTimeoutId.current);
    debounceTimeoutId.current = setTimeout(() => setState(value), timeout);
  };

  return [state, debounce] as const;
};

export default useDebounceState;
