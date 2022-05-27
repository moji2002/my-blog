import { useRef, useState } from "react";

const useDebounceState = <T>(initialValue: T, timeout = 300) => {
  const [searchText, setSearchText] = useState<T>(initialValue);

  const debounceTimeoutId = useRef<ReturnType<typeof setTimeout>>();

  const debounce = (text: T) => {
    clearTimeout(debounceTimeoutId.current);
    debounceTimeoutId.current = setTimeout(() => setSearchText(text), timeout);
  };

  return [searchText, debounce] as const;
};

export default useDebounceState;
