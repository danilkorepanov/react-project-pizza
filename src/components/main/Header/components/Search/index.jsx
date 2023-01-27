import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import style from './Search.module.scss'
import { SearchContext } from '../../../../../App'

const Search = () => {
  const {searchValue, setSearchValue} = React.useContext(SearchContext)
  return (
    <div className={style.search_cont}>
        <input value={searchValue} onChange = {e =>{
          setSearchValue(e.target.value)
          console.log(searchValue)
          }} className={style.input} placeholder='Поиск пиццы ...' />

          {
            searchValue && <IoCloseOutline className={style.close} onClick={e => setSearchValue('')} />
          }
          
    </div>
  )
}

export default Search