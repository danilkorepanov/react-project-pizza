import ContentItem from "./ContentItem";
import React from "react";
import ContentItemSkeleton from "./Components/ContentItemSkeleton";


const ContentItems = () => {

  const [isLoading, setIsLoading] = React.useState(true)

  // get pizza data
  const [items, setItems ] = React.useState([])

  React.useEffect(() => {
    fetch("https://63c7634c5c0760f69ab6be90.mockapi.io/items").then ( res => {return res.json()}
  ).then(arr => {
    setItems(arr)
    setIsLoading(false)
  })
  }, [])
 
   // get pizza data

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
