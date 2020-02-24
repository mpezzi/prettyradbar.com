import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import EventList from './EventList';

const EventListContainer = () => {

  const { allFile: { nodes } } = useStaticQuery(
    graphql`
      query EventListContainerQuery {
        allFile(
          filter: {sourceInstanceName: {eq: "event"}},
          sort: {fields: childMarkdownRemark___frontmatter___date, order: DESC}
        ) {
          nodes {
            id
            childMarkdownRemark {
              frontmatter {
                title
              }
              html
            }
          }
        }
      }
    `
  );

  return (
    <EventList nodes={nodes} />
  );

}

export default EventListContainer;
