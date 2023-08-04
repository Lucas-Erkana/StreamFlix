import React from "react";
import { useParams } from "react-router-dom";

import s from "./styles.module.scss";

import Carousel from "../../components/Carousel";
import Layout from "../../UI/Layout";
import ReadMore from "../../UI/ReadMore";
import Loading from "../../UI/Loading";
import useFetch from "../../hooks/useFetch";
import RenderIf from "../../utils/renderIf";
import { API_KEY, POSTER_NOT_FOUND, POSTER_URL } from "../../utils/constants";
import { dateFormat } from "../../utils/helpers";

const PersonMovies = () => {
  const { id } = useParams();
  const url = `person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`;
  const { data, isLoading } = useFetch(url);

  return (
    <Loading loading={isLoading}>
      <Carousel
        title="Movies"
        data={data?.cast}
        style={{ marginBottom: "50px" }}
      />
    </Loading>
  );
};

const Person = () => {
  const { id } = useParams();
  const url = `person/${id}?api_key=${API_KEY}&language=en-US`;
  const { data, isLoading } = useFetch(url);

  const { profile_path, name, birthday, deathday, place_of_birth, biography } =
    data;

  let poster;
  profile_path
    ? (poster = POSTER_URL + profile_path)
    : (poster = POSTER_NOT_FOUND);

  return (
    <Layout title={data?.name}>
      <Loading loading={isLoading}>
        <div className={s.person}>
          <div className={s.image}>
            <img src={poster} alt={name} />
          </div>
          <div className={s.info}>
            <h1>{name}</h1>
            <div>
              {dateFormat(birthday)}
              {deathday === null ? "" : ` — ${dateFormat(deathday)}`}
            </div>
            <RenderIf isTrue={place_of_birth}>
              <div>{place_of_birth}</div>
            </RenderIf>
            <ReadMore text={biography} limit={600} />
          </div>
        </div>
      </Loading>

      <PersonMovies />
    </Layout>
  );
};

export default Person;
