import ContentItem from "./ContentItem";

import ContentItemSkeleton from "./Components/ContentItemSkeleton";


const ContentItems = ({items , isLoading}) => {

 

 

  return (
    <div className="content__items">
      { isLoading ? [...new Array(6)].map((_, i) => <ContentItemSkeleton key={i}/> ) :
      items.map((item) => (
        <ContentItem dataPizza={item} key={item.id} />
      ))}
    </div>
  );
};

export default ContentItems;
