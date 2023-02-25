import ContentItems from "./components/ContentItems/ContentItems";
import ContetnTop from "./components/ContentTop/ContentTop";
import Paginations from "./components/Paginations";
import React, { Children } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { ListSort } from "./components/ContentTop/ContentTopSort";
import { setFilters } from "../../../../redux/slices/FilterSlice";

const Content = () => {
  // проверка первый ли рендер
  const isMounted = React.useRef(false);
  // проверка на наличие параметров для запроса на бэк
  const isSearch = React.useRef(false);
  // запрос на бэк
  const fetchPizzas = () => {
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
  };
  // redux
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.value); //search
  const { typeSort, activeCategories, page } = useSelector(
    (state) => state.filter
  ); //filter (sort,  category, page)

  //usestate contentItems

  const [isLoading, setIsLoading] = React.useState(false);
  const [items, setItems] = React.useState([]);

  // проверка на наличие параметров в URL

  React.useEffect(() => {
    // если был первый рендер , то проверяем URL и сохраняем их в redux
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortList = ListSort.find((obj) => obj.name === params.typeSort);
      dispatch(
        setFilters({
          activeCategories: Number(params.activeCategories),
          page: Number(params.page),
          typeSort: sortList,
        })
      );
      isSearch.current = true;
    }
  }, []);

  // загрузка пицц с бэка
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
  }, [typeSort, activeCategories, searchValue, page]);

  // параметры в фильтрацию

  const navigate = useNavigate();

  React.useEffect(() => {
    // если изменили параметры и был первый рендер
    if (isMounted.current) {
      const queryString = qs.stringify({
        typeSort: typeSort.name,
        activeCategories,
        page,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
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
