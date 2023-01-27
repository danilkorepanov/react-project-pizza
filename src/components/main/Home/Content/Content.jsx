import ContentItems from "./components/ContentItems/ContentItems";
import ContetnTop from "./components/ContentTop/ContentTop";
import Paginations from "./components/Paginations"
import React from "react";
import { SearchContext } from "../../../../App";





const Content = () => {

  const {searchValue} = React.useContext(SearchContext)

  // page
  const [page,setPage] = React.useState(1)

  
  
  // usestate sort

  const [popup, setPopup] = React.useState({
    title:"популярности", 
    name:"rating"
  });
    // usestate categories
  const [activeCategories, setActiveCategories] = React.useState(0);

    //usestate contentItems

   const [isLoading, setIsLoading] = React.useState(true)
   const [items, setItems ] = React.useState([])

   React.useEffect(() =>

   {
    setIsLoading(true)
      fetch(`https://63c7634c5c0760f69ab6be90.mockapi.io/items?page=${page}&limit=4&${
        activeCategories > 0 ? `category=${activeCategories}` : ''
      }&sortBy=${popup.name}&order=desc&${
        searchValue && `filter=${searchValue}`
      }`)
      .then ( res => {return res.json()})
      .then(arr => {
      setItems(arr)
      setIsLoading(false)
    })
  
   }, [activeCategories, popup, searchValue, page])


  return (
    <div className="content">
      <div className="container">
        <ContetnTop activeCategories = {activeCategories} setActiveCategories = { setActiveCategories} popup={popup} setPopup = {setPopup} />
        <h2 className="content__title">Все пиццы</h2>
        <ContentItems items = {items} isLoading = {isLoading} />
        <Paginations setPage= {setPage} />
      </div>
    </div>
  );
};

export default Content;

    