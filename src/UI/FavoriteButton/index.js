import React from "react";

import s from "./styles.module.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useAppContext } from "../../context";

const FavoriteButton = ({ movie }) => {
  const { favorites, handleToggleFavorite } = useAppContext();

  return (
    <span onClick={() => handleToggleFavorite(movie)} className={s.icon}>
      {favorites.find((favMovie) => favMovie.id === movie.id) ? (
        <AiFillHeart />
      ) : (
        <AiOutlineHeart />
      )}
    </span>
  );
};

export default FavoriteButton;
