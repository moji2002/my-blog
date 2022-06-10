import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import s from "./style.module.scss";
import CloseButton from "../common/CloseButton";

type Props = {
  visible: boolean;
  children: React.ReactNode;
  handleClose?: () => {};
};

const FullscreenModal: FC<Props> = ({ visible, children, handleClose }) => {
  return (
    <CSSTransition
      in={visible}
      timeout={500}
      unmountOnExit
      classNames={{
        enter: s.menuEnter,
        enterActive: s.menuEnterActive,
        exit: s.menuExit,
        exitActive: s.menuExitActive,
      }}
    >
      <div className={s.box}>
        {handleClose && <CloseButton onClick={handleClose} />}
        {children}
      </div>
    </CSSTransition>
  );
};

export default FullscreenModal;
