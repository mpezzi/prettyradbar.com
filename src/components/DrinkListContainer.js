import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import DrinkList from './DrinkList';

const DrinkListContainer = () => {

  const { allFile: { nodes } } = useStaticQuery(
    graphql`
      query DrinkListContainerQuery {
        allFile(
          filter: {sourceInstanceName: {eq: "drink"}}
        ) {
          nodes {
            id
            childMarkdownRemark {
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 250) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                price
              }
              html
            }
          }
        }
      }
    `
  );

  return (
    <DrinkList nodes={nodes} />
  );

}

export default DrinkListContainer;
