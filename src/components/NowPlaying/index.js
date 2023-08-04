import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import s from "./styles.module.scss";

import Loading from "../../UI/Loading";
import Button from "../../UI/Button";
import useFetch from "../../hooks/useFetch";
import {
  BACKDROP_URL,
  BACKDROP_NOT_FOUND,
  API_KEY,
} from "../../utils/constants";
import RenderIf from "../../utils/renderIf";

const NowPlaying = () => {
  const url = `movie/now_playing?api_key=${API_KEY}&language=en-US`;
  const { data, isLoading } = useFetch(url);

  return (
    <Loading loading={isLoading}>
      <div className="fade_in">
        <div className={s.nowPlaying_title}>Now Playing Movies</div>
        <Swiper
          className="mySwiper"
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          {data.results?.map((movie) => {
            const { id, title, overview, backdrop_path } = movie;
            const backdrop = backdrop_path
              ? BACKDROP_URL + backdrop_path
              : BACKDROP_NOT_FOUND;

            return (
              <SwiperSlide key={id}>
                <div className={s.image}>
                  <LazyLoadImage
                    effect="blur"
                    src={backdrop}
                    alt={title || "movie"}
                  />
                </div>
                <div className={s.info_outer}>
                  <div className={s.info_inner}>
                    <div className={s.title}>{title}</div>
                    <RenderIf isTrue={overview}>
                      <div className={s.overview}>{overview}</div>
                    </RenderIf>
                    <div className={s.button_wrapper}>
                      <Button link={true} url={`/movie/${id}`}>
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Loading>
  );
};

export default NowPlaying;
