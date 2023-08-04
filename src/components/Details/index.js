import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Rate from "rc-rate";

import s from "./styles.module.scss";

import Loading from "../../UI/Loading";
import useMatch from "../../hooks/useMatch";
import {
  POSTER_URL,
  BACKDROP_URL,
  POSTER_NOT_FOUND,
  BACKDROP_NOT_FOUND,
} from "../../utils/constants";
import RenderIf from "../../utils/renderIf";
import {
  arrayToString,
  dateFormat,
  moneyConverter,
  timeConverter,
} from "../../utils/helpers";

const Details = memo(({ details, loading }) => {
  const {
    backdrop_path,
    poster_path,
    title,
    genres,
    overview,
    release_date,
    runtime,
    budget,
    revenue,
    vote_average,
    production_countries,
    production_companies,
    spoken_languages,
    status,
  } = details;

  const match = useMatch("(min-width: 1024px)");
  const poster = poster_path ? POSTER_URL + poster_path : POSTER_NOT_FOUND;
  const backdrop = backdrop_path
    ? BACKDROP_URL + backdrop_path
    : BACKDROP_NOT_FOUND;

  return (
    <Loading loading={loading} isFull>
      <div className={`${s.details_outer} fade_in`}>
        <div className={s.backdrop}>
          <LazyLoadImage effect="blur" src={backdrop} alt={title} />
        </div>
        <RenderIf isTrue={match}>
          <div className={s.poster}>
            <img src={poster} alt={title || "movie_title"} />
          </div>
        </RenderIf>

        <div className={s.details_inner}>
          <div className={s.title_wrapper}>
            <div className={s.title}>{title}</div>{" "}
          </div>
          <div className={s.genres}>{arrayToString(genres)}</div>
          <RenderIf isTrue={vote_average !== 0}>
            <div>
              <Rate
                value={vote_average / 2}
                count={5}
                disabled={true}
                allowHalf={true}
              />
            </div>
          </RenderIf>
          <div className={s.overview}>{overview}</div>

          <div className={s.info}>
            <div className={s.info_item}>
              <h4>Status:</h4>
              <p>{status}</p>
            </div>
            <div className={s.info_item}>
              <h4>Languages</h4>
              <p>{arrayToString(spoken_languages)}</p>
            </div>
            <div className={s.info_item}>
              <h4>Country:</h4>
              <p>{arrayToString(production_countries)}</p>
            </div>
            <div className={s.info_item}>
              <h4>Release:</h4>
              <p>{dateFormat(release_date)}</p>
            </div>
            <div className={s.info_item}>
              <h4>Runtime:</h4>
              <p>{timeConverter(runtime)}</p>
            </div>
            <div className={s.info_item}>
              <h4>Budget:</h4>
              <p>{moneyConverter(budget)}</p>
            </div>
            <div className={s.info_item}>
              <h4>Revenue:</h4>
              <p>{moneyConverter(revenue)}</p>
            </div>
            <div className={s.info_item}>
              <h4>Production:</h4>
              <p>{arrayToString(production_companies)}</p>
            </div>
          </div>
        </div>
      </div>
    </Loading>
  );
});

export default Details;
