import React from 'react';
import FoodListItem from './FoodListItem';

const FoodList = ({ nodes }) => {
  return (
    <div>
      {
        nodes.map((node, i) => {

          const item = {
            id: node.id,
            title: node.childMarkdownRemark.frontmatter.title,
            image: node.childMarkdownRemark.frontmatter.image,
            price: node.childMarkdownRemark.frontmatter.price,
            body: node.childMarkdownRemark.html,
          };

          return <FoodListItem item={item} index={i} key={item.id} />

        })
      }
    </div>
  );
}

export default FoodList;
