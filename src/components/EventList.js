import React from 'react';
import EventListItem from './EventListItem';

const EventList = ({ nodes }) => {
  return (
    <>
      {
        nodes.map((node, i) => {

          const item = {
            id: node.id,
            title: node.childMarkdownRemark.frontmatter.title,
            body: node.childMarkdownRemark.html,
          };

          return <EventListItem item={item} index={i} key={item.id} />

        })
      }
    </>
  );
}

export default EventList;
