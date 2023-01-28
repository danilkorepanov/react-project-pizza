import React from "react";
import ReactPaginate from "react-paginate";
import style from "./Paginations.module.scss";
import { useDispatch } from "react-redux";
import { setPage } from "../../../../../../redux/slices/PageSlice";

const Paginations = () => {
  const dispatch = useDispatch();
  return (
    <>
      <ReactPaginate
        className={style.paginate}
        breakLabel="..."
        previousLabel="<"
        nextLabel=" >"
        onPageChange={(event) => dispatch(setPage(event.selected + 1))}
        pageRangeDisplayed={4}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Paginations;
