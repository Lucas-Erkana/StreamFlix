import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import s from "./styles.module.scss";

import imagesList from "./images";
import Layout from "../../UI/Layout";
import Loading from "../../UI/Loading";
import useFetch from "../../hooks/useFetch";
import RenderIf from "../../utils/renderIf";
import { API_KEY } from "../../utils/constants";

const Genres = () => {
  const { data, isLoading } = useFetch(
    `genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  const [visible, setVisible] = useState(false);

  return (
    <Layout title="Genres">
      <Loading loading={isLoading} isFull>
        <div className={s.genres_outer}>
          <div className={`${s.genres_title} fade_in`}>Genres</div>
          <div className={s.genres_inner}>
            {data.genres?.map((genre) => {
              const { id, name } = genre;
              return (
                <Link
                  to={`/genre/${id}/${name}`}
                  key={id}
                  className={s.genres_link}
                >
                  <div className={s.genres_image}>
                    <figure>
                      <picture>
                        <LazyLoadImage
                          src={imagesList[name]}
                          alt={name}
                          effect="blur"
                          afterLoad={() => setVisible(true)}
                        />
                      </picture>
                    </figure>
                    <RenderIf isTrue={visible}>
                      <div className={s.genres_name}>{name}</div>
                    </RenderIf>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Loading>
    </Layout>
  );
};

export default Genres;
