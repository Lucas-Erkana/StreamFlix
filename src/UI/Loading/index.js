import React from "react";
import s from "./styles.module.scss";
import clsx from "clsx";

const Loading = ({ loading = true, children, isFull = false, style }) => {
  return (
    <>
      {loading ? (
        <div
          className={clsx(s.loader_wrapper, { [s.full_height]: isFull })}
          style={style}
        >
          <div className={s.loader} />
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Loading;
