import React from "react";
import s from "./styles.module.scss";

const EmptyMessage = ({ msg, isHalf }) => {
  return (
    <div
      className={`${s.empty_message} ${isHalf ? s.half_height : ""} fade_in`}
    >
      {msg}
    </div>
  );
};

export default EmptyMessage;
