import React, { memo } from "react";
import { useParams } from "react-router-dom";

import Details from "../../components/Details";
import Tabs from "../../components/Tabs";
import Carousel from "../../components/Carousel";

import Layout from "../../UI/Layout";
import Loading from "../../UI/Loading";
import useFetch from "../../hooks/useFetch";
import RenderIf from "../../utils/renderIf";
import { API_KEY } from "../../utils/constants";

const Recommended = memo(({ id }) => {
  const url = `movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`;
  const { data, isLoading } = useFetch(url);

  return (
    <Loading loading={isLoading}>
      <RenderIf isTrue={data.results?.length}>
        <Carousel
          title="Recommended Movies"
          data={data?.results}
          style={{ marginBottom: 50 }}
        />
      </RenderIf>
    </Loading>
  );
});

const SingleMovie = () => {
  const { id } = useParams();
  const url = `movie/${id}?api_key=${API_KEY}&language=en-US`;
  const { data, isLoading } = useFetch(url);

  return (
    <Layout title={data?.title}>
      <Details details={data} loading={isLoading} />
      <Tabs id={id} />
      <Recommended id={id} />
    </Layout>
  );
};

export default SingleMovie;
