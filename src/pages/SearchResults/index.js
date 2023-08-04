import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import instance from "../../axios";
import Cards from "../../components/Cards";
import Layout from "../../UI/Layout";
import { API_KEY } from "../../utils/constants";

const SearchResults = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    instance()
      .get(
        `search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${name}`
      )
      .then((res) => {
        setData(res.data?.results);
      });
  }, [name]);

  const fetchData = () => {
    instance()
      .get(
        `search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${name}`
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

export default SearchResults;
