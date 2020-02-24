import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import FoodList from './FoodList';

const FoodListContainer = () => {

  const { allFile: { nodes } } = useStaticQuery(
    graphql`
      query FoodListContainerQuery {
        allFile(
          filter: {sourceInstanceName: {eq: "food"}}
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
    <FoodList nodes={nodes} />
  );

}

export default FoodListContainer;
