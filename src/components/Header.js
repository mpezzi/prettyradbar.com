import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  return (
    <header className="masthead">
      <div className="container h-100 d-flex align-items-center">
        <div className="text-center w-100">
          <h1 className="my-0 text-uppercase">{site.siteMetadata.title}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {site.siteMetadata.description}
          </h2>
          <a href="#about" className="btn btn-primary js-scroll-trigger">
            Discover
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
