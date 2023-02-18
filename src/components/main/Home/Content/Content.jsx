import ContentItems from "./components/ContentItems/ContentItems";
import ContetnTop from "./components/ContentTop/ContentTop";
import Paginations from "./components/Paginations";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { ListSort } from "./components/ContentTop/ContentTopSort";
import { setFilters } from "../../../../redux/slices/FilterSlice";
const Content = () => {
  const dispatch = useDispatch();
  //search
  const searchValue = useSelector((state) => state.search.value);

  //filter (sort,  category, page)
  const { typeSort, activeCategories, page } = useSelector(
    (state) => state.filter
  );

  //usestate contentItems

  const [isLoading, setIsLoading] = React.useState(false);
  const [items, setItems] = React.useState([]);
  // проверка на наличие параметров в URL
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortList = ListSort.find(
        (obj) => obj.name === params.typeSort.name
      );
      dispatch(
        setFilters({
          ...params,
          sortList,
        })
      );
    }
  }, []);
  // загрузка пицц с бэка
  React.useEffect(() => {
    setIsLoading(false);
    axios
      .get(
        `https://63c7634c5c0760f69ab6be90.mockapi.io/items?page=${page}&limit=4&${
          activeCategories > 0 ? `category=${activeCategories}` : ""
        }&sortBy=${typeSort.name}&order=desc&${
          searchValue && `filter=${searchValue}`
        }`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(true);
      });
  }, [typeSort, activeCategories, searchValue, page]);

  // параметры в фильтрацию

  const navigate = useNavigate();

  React.useEffect(() => {
    const queryString = qs.stringify({
      typeSort: typeSort,
      activeCategories,
      page,
    });
    navigate(`/?${queryString}`);
  }, [typeSort.name, activeCategories, page]);

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
