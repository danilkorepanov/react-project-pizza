import ContentItem from "./ContentItem";
import React from "react";

const ContentItems = () => {

  // get pizza data
  const [items, setItems ] = React.useState([])

  React.useEffect(() => {
    fetch("https://63c7634c5c0760f69ab6be90.mockapi.io/items").then ( res => {return res.json()}
  ).then(arr => {setItems(arr)})
  }, [])
 
   // get pizza data

  return (
    <div className="content__items">
      {items.map((item) => (
        <ContentItem dataPizza={item} key={item.id} />
      ))}
    </div>
  );
};

export default ContentItems;
