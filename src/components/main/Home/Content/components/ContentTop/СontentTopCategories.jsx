
const dataCategories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const ContentTopCategories = ({activeCategories, setActiveCategories }) => {

  return (
    <div className="categories">
      <ul>
        {dataCategories.map((categories, index) => (
          <li
            key={index}
            onClick={() => setActiveCategories(index)}
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
