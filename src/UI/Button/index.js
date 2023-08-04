import React from "react";
import { Link } from "react-router-dom";

import s from "./styles.module.scss";

const Button = (props) => {
  const { link = false, url = "", handleClick = () => {}, children } = props;

  return (
    <>
      {link ? (
        <Link to={url} className={s.button}>
          {children}
        </Link>
      ) : (
        <button className={s.button} onClick={handleClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
