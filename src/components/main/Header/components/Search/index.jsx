import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import style from "./Search.module.scss";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../../../redux/slices/SearchSLice";
import debounce from "lodash.debounce";

const Search = () => {
  const [value, setValue] = React.useState("");

  const dispatch = useDispatch();

  const inputSeacrh = React.useRef("");

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      console.log(str);
      dispatch(setSearchValue(str));
    }, 350),
    []
  );

  return (
    <div className={style.search_cont}>
      <input
        ref={inputSeacrh}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          updateSearchValue(e.target.value);
        }}
        className={style.input}
        placeholder="Поиск пиццы ..."
      />

      {value && (
        <IoCloseOutline
          className={style.close}
          onClick={() => {
            setValue("");
            updateSearchValue("");
            inputSeacrh.current.focus();
          }}
        />
      )}
    </div>
  );
};

export default Search;
