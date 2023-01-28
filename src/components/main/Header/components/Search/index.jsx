import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import style from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../../../../redux/slices/SearchSLice";

const Search = () => {
  const searchValue = useSelector((state) => state.search.value);
  const dispatch = useDispatch();
  return (
    <div className={style.search_cont}>
      <input
        value={searchValue}
        onChange={(e) => {
          dispatch(setSearchValue(e.target.value));
        }}
        className={style.input}
        placeholder="Поиск пиццы ..."
      />

      {searchValue && (
        <IoCloseOutline
          className={style.close}
          onClick={(e) => dispatch(setSearchValue(""))}
        />
      )}
    </div>
  );
};

export default Search;
