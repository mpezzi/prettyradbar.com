import React from 'react';
import DrinkListItem from './DrinkListItem';

const DrinkList = ({ nodes }) => {
  return (
    <>
      {
        nodes.map((node, i) => {

          const item = {
            id: node.id,
            title: node.childMarkdownRemark.frontmatter.title,
            body: node.childMarkdownRemark.html,
          };

          return <DrinkListItem item={item} index={i} key={item.id} />

        })
      }
    </>
  );
}

export default DrinkList;
