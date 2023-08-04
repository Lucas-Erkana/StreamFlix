import React, { useState } from "react";

import s from "./styles.module.scss";

const ReadMore = ({ text, limit }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <div className={s.text}>
      {text?.length <= limit ? (
        text
      ) : (
        <>
          {isReadMore ? text : `${text?.substring(0, limit)}...`}
          <button
            className={s.button}
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? "Read Less" : "Read More"}
          </button>
        </>
      )}
    </div>
  );
};

export default ReadMore;
