import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import FullscreenModal from "../../FullscreenModal";
import s from "./style.module.scss";
import { RootState } from "../../../store";
import { useDispatch } from "react-redux";
import { pageLoaded } from "../../../store/userInterfaceSlice";

const Spinner: FC = () => {
  const loaded = useSelector((state: RootState) => state.ui.loaded);
  const dispatch = useDispatch();

  useEffect(() => {
    const setPageLoaded = () => dispatch(pageLoaded());
    window.addEventListener("load", setPageLoaded);
    setTimeout(setPageLoaded, 5000);
    return () => window.removeEventListener("load", setPageLoaded);
  }, []);

  return (
    <FullscreenModal visible={!loaded}>
      <div className={s.container}>
        <div className={s.rectangleBounce}>
          <div className={s.rect1}></div>
          <div className={s.rect2}></div>
          <div className={s.rect3}></div>
          <div className={s.rect4}></div>
          <div className={s.rect5}></div>
          <div className={s.rect6}></div>
          <div className={s.rect7}></div>
          <div className={s.rect8}></div>
        </div>
      </div>
    </FullscreenModal>
  );
};

export default Spinner;
