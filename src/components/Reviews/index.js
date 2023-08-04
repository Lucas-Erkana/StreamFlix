import React from "react";

import s from "./styles.module.scss";
import { FaUserCircle } from "react-icons/fa";

import EmptyMessage from "../EmptyMessage";
import ReadMore from "../../UI/ReadMore";
import Loading from "../../UI/Loading";
import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../utils/constants";
import { dateFormat } from "../../utils/helpers";

const Reviews = ({ id }) => {
  const url = `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`;
  const { data, isLoading } = useFetch(url);
  const isReviews = data.results?.length;

  return (
    <Loading loading={isLoading}>
      {isReviews ? (
        <div className={`${s.reviews_outer} fade_in`}>
          <div className={s.reviews_inner}>
            {data.results?.map((review) => {
              const { id, author, created_at, content } = review;

              return (
                <div key={id} className={s.review}>
                  <div className={s.author}>
                    <FaUserCircle />
                    <div className={s.info}>
                      <h4>{author}</h4>
                      <p>{dateFormat(created_at)}</p>
                    </div>
                  </div>
                  <ReadMore text={content} limit={400} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <EmptyMessage msg="No reviews" isHalf />
      )}
    </Loading>
  );
};

export default Reviews;
