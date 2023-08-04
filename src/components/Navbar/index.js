import React from "react";
import { Link, useLocation } from "react-router-dom";

import s from "./styles.module.scss";
import {
  AiOutlineAppstore,
  AiOutlineFire,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineStar,
} from "react-icons/ai";

import { useAppContext } from "../../context";

const Navbar = () => {
  const { handleToggleSearch } = useAppContext();
  const location = useLocation();

  const pathname =
    location.pathname === "/"
      ? location.pathname
      : location.pathname.slice(1, location.pathname.length);

  const activeLink = (link) => {
    switch (pathname) {
      case link: {
        return "#016c73";
      }
      default:
        return "#fff";
    }
  };

  return (
    <div className={s.navbar}>
      <Link to={"/"} title="Home" className={s.link}>
        <AiOutlineHome color={pathname === "/" ? "#016c73" : "#fff"} />
      </Link>
      <button title="Search" className={s.link} onClick={handleToggleSearch}>
        <AiOutlineSearch color={activeLink("search")} />
      </button>
      <Link to={"/genres"} title="Genres" className={s.link}>
        <AiOutlineAppstore color={activeLink("genres")} />
      </Link>
      <Link to={"/popular"} title="Popular" className={s.link}>
        <AiOutlineFire color={activeLink("popular")} />
      </Link>
      <Link to={"/top_rated"} title="Top rated" className={s.link}>
        <AiOutlineStar color={activeLink("top_rated")} />
      </Link>
      <Link to={"/favorite"} title="Favorite" className={s.link}>
        <AiOutlineHeart color={activeLink("favorite")} />
      </Link>
    </div>
  );
};

export default Navbar;
