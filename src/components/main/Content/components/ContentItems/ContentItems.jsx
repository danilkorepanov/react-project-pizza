import ContentItem from "./ContentItem";
import dataPizzas from "../../../../../assets/pizzas.json";

const ContentItems = () => {
  return (
    <div className="content__items">
      {dataPizzas.map((pizza) => (
        <ContentItem dataPizza={pizza} key={pizza.id} />
      ))}
    </div>
  );
};

export default ContentItems;
