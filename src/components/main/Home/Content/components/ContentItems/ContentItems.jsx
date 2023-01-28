import ContentItem from "./ContentItem";

import ContentItemSkeleton from "./Components/ContentItemSkeleton";

const ContentItems = ({ items, isLoading }) => {
  console.log(items);
  let skeleton = [...new Array(4)];
  return (
    <div className="content__items">
      {isLoading
        ? items.map((item) => <ContentItem dataPizza={item} key={item.id} />)
        : skeleton.map((_, i) => <ContentItemSkeleton key={i} />)}
    </div>
  );
};

export default ContentItems;
