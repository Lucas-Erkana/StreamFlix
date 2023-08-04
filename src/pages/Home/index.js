import React from "react";

import NowPlaying from "../../components/NowPlaying";
import Carousel from "../../components/Carousel";
import Layout from "../../UI/Layout";
import Loading from "../../UI/Loading";
import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../utils/constants";

const Popular = () => {
  const url = `movie/popular?api_key=${API_KEY}&language=en-US`;
  const { data, isLoading } = useFetch(url);

  return (
    <Loading loading={isLoading}>
      <Carousel
        title="Popular Movies"
        data={data?.results}
        style={{ marginTop: 40 }}
      />
    </Loading>
  );
};

const TopRated = () => {
  const url = `movie/top_rated?api_key=${API_KEY}&language=en-US`;
  const { data, isLoading } = useFetch(url);

  return (
    <Loading loading={isLoading}>
      <Carousel
        title="Top Rated Movies"
        data={data?.results}
        style={{ marginTop: 40 }}
      />
    </Loading>
  );
};

const Home = () => {
  return (
    <Layout title="Home">
      <NowPlaying />
      <Popular />
      <TopRated />

      <div className="footer">Boxflix | All rights reserved.</div>
    </Layout>
  );
};

export default Home;
