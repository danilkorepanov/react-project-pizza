import React from "react";
import ReactPaginate from "react-paginate";
import style from "./Paginations.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../../../../redux/slices/FilterSlice";

const Paginations = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.filter);
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
        forcePage={page - 1}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Paginations;
