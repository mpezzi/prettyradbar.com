import React from "react";
import BeerListItem from "./BeerListItem";

const BeerList = ({ nodes }) => {
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
        return <BeerListItem item={item} index={i} key={item.id} />;
      })}
    </div>
  );
};

export default BeerList;
