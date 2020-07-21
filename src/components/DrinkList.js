import React from "react";
import DrinkListItem from "./DrinkListItem";

const DrinkList = ({ nodes }) => {
  return (
    <div className="row">
      {nodes.map((node, i) => {
        const item = {
          id: node.id,
          title: node.childMarkdownRemark.frontmatter.title,
          image: node.childMarkdownRemark.frontmatter.image,
          price: node.childMarkdownRemark.frontmatter.price,
          body: node.childMarkdownRemark.html,
        };
        return <DrinkListItem item={item} index={i} key={item.id} />;
      })}
    </div>
  );
};

export default DrinkList;
