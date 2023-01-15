import ContentItems from "./components/ContentItems/ContentItems";
import ContetnTop from "./components/ContentTop/ContentTop";

const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <ContetnTop />
        <h2 className="content__title">Все пиццы</h2>
        <ContentItems />
      </div>
    </div>
  );
};

export default Content;
