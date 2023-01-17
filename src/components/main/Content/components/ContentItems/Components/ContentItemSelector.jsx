import React from "react";

const doughPizza = ["Традиционое", "Тонкое"];

function ContentItemSelector({ sizes, types }) {
  const [activeDough, setActiveDough] = React.useState(0);

  const [activeSize, setActiveSize] = React.useState(0);

  return (
    <div className="pizza-block__selector">
      <ul>
        {types.map((t, index) => (
          <li
            key={index}
            onClick={() => setActiveDough(index)}
            className={activeDough === index ? "active" : ""}
          >
            {doughPizza[t]}
          </li>
        ))}
      </ul>
      <ul>
        {sizes.map((s, index) => (
          <li
            key={index}
            onClick={() => setActiveSize(index)}
            className={activeSize === index ? "active" : ""}
          >
            {`${s} см`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContentItemSelector;
