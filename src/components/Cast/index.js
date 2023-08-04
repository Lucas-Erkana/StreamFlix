import React from "react";

import Loading from "../../UI/Loading";
import Carousel from "../Carousel";
import EmptyMessage from "../EmptyMessage";

import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../utils/constants";

const Cast = ({ id }) => {
  const url = `movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
  const { data, isLoading } = useFetch(url);

  return (
    <Loading loading={isLoading}>
      {data.cast?.length ? (
        <Carousel
          data={data?.cast}
          isCast
          style={{ margin: "20px 0 80px 0" }}
        />
      ) : (
        <EmptyMessage msg="No data" isHalf />
      )}
    </Loading>
  );
};

export default Cast;
