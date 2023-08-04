import React, { useEffect } from "react";

import s from "./styles.module.scss";
import { FaTimes } from "react-icons/fa";
import Portal from "../../utils/portal";

const Modal = ({ children, open, setOpen }) => {
  const handleClickAway = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.querySelector("body").classList.add("disable_scroll");
    } else {
      document.querySelector("body").classList.remove("disable_scroll");
    }
  }, [open]);

  if (!open) return null;

  return (
    <Portal>
      <div className={s.modal_outer}>
        <button onClick={handleClose} className={s.modal_btn}>
          <FaTimes size={"3em"} />
        </button>
        <div className={s.modal_inner} onClick={handleClickAway}>
          <div className={s.modal_content} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
