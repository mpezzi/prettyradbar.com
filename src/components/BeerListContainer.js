import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BeerList from "./BeerList";

const BeerListContainer = () => {
  const {
    allFile: { nodes },
  } = useStaticQuery(
    graphql`
      query BeerListContainerQuery {
        allFile(filter: { sourceInstanceName: { eq: "beer" } }) {
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

  return <BeerList nodes={nodes} />;
};

export default BeerListContainer;
