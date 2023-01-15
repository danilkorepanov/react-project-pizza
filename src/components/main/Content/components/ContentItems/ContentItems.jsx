import ContentItem from "./ContentItem";
import dataPizzas from "../../../../../assets/pizzas.json";

const ContentItems = () => {
  return (
    <div className="content__items">
      {dataPizzas.map((pizza) => (
        <ContentItem dataPizza={pizza} />
      ))}
    </div>
  );
};

export default ContentItems;
