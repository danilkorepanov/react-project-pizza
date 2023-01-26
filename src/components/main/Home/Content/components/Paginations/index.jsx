import React from 'react'
import ReactPaginate from 'react-paginate';
import style from './Paginations.module.scss'

const Paginations = ({setPage}) => {
  
  return (
    <>
       <ReactPaginate
       className={style.paginate}
        breakLabel="..."
        previousLabel="<"
        nextLabel=" >"
        onPageChange={event => setPage(event.selected + 1) }
        pageRangeDisplayed={4}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Paginations