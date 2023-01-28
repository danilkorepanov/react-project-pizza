import ContentTopSort from "./ContentTopSort";
import ContentTopCategories from "./СontentTopCategories";

const ContetnTop = ({ popup, setPopup }) => {
  return (
    <div className="content__top">
      <ContentTopCategories />
      <ContentTopSort popup={popup} setPopup={setPopup} />
    </div>
  );
};

export default ContetnTop;
