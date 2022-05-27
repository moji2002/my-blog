import React, { FC, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FullscreenModal from "../FullscreenModal";
import s from "./style.module.scss";

import { RootState } from "../../store";
import { closeSearch } from "../../store/userInterfaceSlice";
import useDebounceState from "../../hooks/useDebounceState";

type Props = {
  // children: ReactNode;
};

const Search: FC<Props> = () => {
  const searchVisible = useSelector(
    (state: RootState) => state.ui.searchVisible
  );
  const dispatch = useDispatch();

  const handleClose = () => dispatch(closeSearch());

  const [searchText, setSearchText] = useDebounceState("");

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  return (
    <FullscreenModal visible={searchVisible} handleClose={handleClose}>
      <div className={s.container}>
        <div className={s.inputSection}>
          <form role="search" className={s.form}>
            <label className={s.searchLabel}>
              <span>Search For:</span>
            </label>
            <input
              onChange={(e) => setSearchText(e.target.value)}
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
