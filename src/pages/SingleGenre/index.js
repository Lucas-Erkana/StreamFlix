import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import instance from "../../axios";
import Cards from "../../components/Cards";
import Layout from "../../UI/Layout";
import { API_KEY } from "../../utils/constants";

const SingleGenre = () => {
  const { id, name } = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    instance()
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${id}&page=1&sort_by=popularity.desc`
      )
      .then((res) => {
        setData(res.data?.results);
      });
  }, [id]);

  const fetchData = () => {
    instance()
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${id}&page=${page}&sort_by=popularity.desc`
      )
      .then((res) => {
        setData([...data, ...res.data?.results]);
        setPage(page + 1);
        if (page === res?.total_pages) {
          setHasMore(false);
        }
      });
  };

  return (
    <Layout title={name}>
      <InfiniteScroll
        dataLength={data?.length}
        next={fetchData}
        hasMore={hasMore}
      >
        <Cards title={name} data={data} />
      </InfiniteScroll>
    </Layout>
  );
};

export default SingleGenre;
