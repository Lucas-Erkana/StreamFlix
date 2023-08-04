import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import s from "./styles.module.scss";
import { useAppContext } from "../../context";

const Search = () => {
  const navigate = useNavigate();
  const { search, handleHideSearch } = useAppContext();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setValue("");
    navigate(`/search/${value}`);
  };

  return (
    <div
      className={clsx(s.search, { [s.search_active]: search })}
      onClick={handleHideSearch}
    >
      <form
        className={clsx(s.form, { [s.form_active]: search })}
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
