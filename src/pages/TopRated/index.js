import React, { memo, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import instance from "../../axios";
import Cards from "../../components/Cards";
import Layout from "../../UI/Layout";
import { API_KEY } from "../../utils/constants";

const TopRated = memo(() => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    instance()
      .get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => {
        setData(res.data?.results);
      });
  }, []);

  const fetchData = () => {
    instance()
      .get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
        setData([...data, ...res.data?.results]);
        setPage(page + 1);
        if (page === res?.total_pages) {
          setHasMore(false);
        }
      });
  };

  return (
    <Layout title="Top Rated">
      <InfiniteScroll
        dataLength={data?.length}
        next={fetchData}
        hasMore={hasMore}
      >
        <Cards title="Top Rated Movies" data={data} />
      </InfiniteScroll>
    </Layout>
  );
});

export default TopRated;
