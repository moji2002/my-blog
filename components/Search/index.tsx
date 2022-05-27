import React, { FC, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FullscreenModal from "../FullscreenModal";
import s from "./style.module.scss";

import { RootState } from "../../store";
import { closeSearch } from "../../store/userInterfaceSlice";

type Props = {
  // children: ReactNode;
};

const Search: FC<Props> = () => {
  const searchVisible = useSelector(
    (state: RootState) => state.ui.searchVisible
  );
  const dispatch = useDispatch();

  const handleClose = () => dispatch(closeSearch());

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  const debounceTimeoutId = useRef<ReturnType<typeof setTimeout>>();

  const debounce = (text: string) => {
    clearTimeout(debounceTimeoutId.current);
    debounceTimeoutId.current = setTimeout(() => setSearchText(text), 300);
  };

  return (
    <FullscreenModal visible={searchVisible} handleClose={handleClose}>
      <div className={s.container}>
        <div className={s.inputSection}>
          <form role="search" className={s.form}>
            <label className={s.searchLabel}>
              <span>Search For:</span>
            </label>
            <input
              onChange={(e) => debounce(e.target.value)}
              className={s.input}
              type="search"
              name="search"
              autoComplete="off"
              placeholder="Type Keywords"
            />
          </form>
        </div>
        <div className={s.resultSection}></div>
      </div>
    </FullscreenModal>
  );
};

export default Search;
