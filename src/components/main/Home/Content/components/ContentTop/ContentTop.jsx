import ContentTopSort from "./ContentTopSort";
import ContentTopCategories from "./СontentTopCategories";


const ContetnTop = ({activeCategories, setActiveCategories, popup, setPopup }) => {

  

  return (
    <div className="content__top">
      <ContentTopCategories activeCategories = {activeCategories} setActiveCategories = {setActiveCategories}  />
      <ContentTopSort popup={popup} setPopup={setPopup} />
    </div>
  );
};

export default ContetnTop;
