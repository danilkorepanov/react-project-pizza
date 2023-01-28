import ContentItems from "./components/ContentItems/ContentItems";
import ContetnTop from "./components/ContentTop/ContentTop";
import Paginations from "./components/Paginations";
import React from "react";
import { useSelector } from "react-redux";
const Content = () => {
  //search
  const searchValue = useSelector((state) => state.search.value);

  // page
  const page = useSelector((state) => state.page.value);
  //filter (sort and category)
  const { typeSort, activeCategories } = useSelector((state) => state.filter);

  //usestate contentItems

  const [isLoading, setIsLoading] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(false);
    fetch(
      `https://63c7634c5c0760f69ab6be90.mockapi.io/items?page=${page}&limit=4&${
        activeCategories > 0 ? `category=${activeCategories}` : ""
      }&sortBy=${typeSort.name}&order=desc&${
        searchValue && `filter=${searchValue}`
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(true);
      });
  }, [typeSort, activeCategories, searchValue, page]);

  return (
    <div className="content">
      <div className="container">
        <ContetnTop />
        <h2 className="content__title">Все пиццы</h2>
        <ContentItems items={items} isLoading={isLoading} />
        <Paginations />
      </div>
    </div>
  );
};

export default Content;
