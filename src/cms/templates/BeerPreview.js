import React from "react";

const BeerPreview = ({ entry, widgetFor }) => {
  const item = {
    title: entry.getIn(["data", "title"]),
    body: widgetFor("body"),
  };

  return (
    <div>
      <h2>BeerPreview</h2>
      <div>
        <div>Title: {item.title}</div>
        <div>Body: {item.body}</div>
      </div>
    </div>
  );
};

export default BeerPreview;
