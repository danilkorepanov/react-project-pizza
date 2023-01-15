import React from "react";
import ContentItemSelector from "./Components/ContentItemSelector";
import ContentItemBottom from "./Components/ContentItemBottom";

const ContentItem = ({ dataPizza }) => {
  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={dataPizza.imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{dataPizza.title}</h4>
      <ContentItemSelector {...dataPizza} />
      <ContentItemBottom price={dataPizza.price} />
    </div>
  );
};

export default ContentItem;
