import React from 'react';

const EventListItem = ({ node }) => {

  const item = {
    id: node.id,
    title: node.childMarkdownRemark.frontmatter.title,
    body: node.childMarkdownRemark.html,
  };

  return (
    <div id={item.id}>
      <h4>
        {item.title}
      </h4>
      <div
        dangerouslySetInnerHTML={{ __html: item.body}}
      />
    </div>
  );

}

export default EventListItem;
