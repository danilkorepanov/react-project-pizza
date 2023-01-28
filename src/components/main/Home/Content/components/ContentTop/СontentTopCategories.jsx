import { useSelector, useDispatch } from "react-redux";
import { setActiveCategories } from "../../../../../../redux/slices/CategorySlice";

const dataCategories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const ContentTopCategories = () => {
  const activeCategories = useSelector((state) => state.category.index);
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <ul>
        {dataCategories.map((categories, index) => (
          <li
            key={index}
            onClick={() => {
              dispatch(setActiveCategories(index));
            }}
            className={activeCategories === index ? "active" : ""}
          >
            {categories}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentTopCategories;
