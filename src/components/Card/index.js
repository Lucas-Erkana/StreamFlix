import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import s from "./styles.module.scss";
import { POSTER_NOT_FOUND, POSTER_URL } from "../../utils/constants";

const Card = memo(({ path, alt }) => {
  const src = path ? POSTER_URL + path : POSTER_NOT_FOUND;

  return (
    <figure className={s.figure}>
      <picture className={s.picture}>
        <LazyLoadImage
          effect="blur"
          src={src}
          alt={alt}
          wrapperClassName={s.image}
        />
      </picture>
    </figure>
  );
});

export default Card;
