import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import FullscreenModal from "../FullscreenModal";
import s from "./style.module.scss";
import { RootState } from "../../store";
import { useDispatch } from "react-redux";
import { pageLoaded } from "../../store/userInterfaceSlice";

type Props = {
  // children: ReactNode;
};

const Spinner: FC<Props> = () => {
  const loaded = useSelector((state: RootState) => state.ui.loaded);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("load", function () {
      dispatch(pageLoaded());
    });
  }, []);

  return (
    <FullscreenModal visible={!loaded}>
      <div className={s.container}>
        <div className={s["lds-spinner"]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </FullscreenModal>
  );
};

export default Spinner;
