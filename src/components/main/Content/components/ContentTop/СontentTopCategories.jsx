import React, { useState } from "react";

const dataCategories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const ContentTopCategories = () => {
  const [activeCategories, setActiveCategories] = useState(0);

  return (
    <div className="categories">
      <ul>
        {dataCategories.map((categories, index) => (
          <li
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
