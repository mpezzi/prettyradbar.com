import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Nav = () => {
  const { site } = useStaticQuery(
    graphql`
      query NavQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          {site.siteMetadata.title}
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#ontap">
                On Tap
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#signup">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
