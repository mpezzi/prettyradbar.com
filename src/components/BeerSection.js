import React from "react";
import BeerListContainer from "../components/BeerListContainer";

const BeerSection = () => {
  return (
    <section id="ontap" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-3">
          <div className="col-xl-8 col-lg-7">
            <img
              className="img-fluid mb-3 mb-lg-0"
              src="img/beer.jpg"
              alt="Beers"
            />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Beers</h4>
              <p className="text-black-50 mb-0">Feeling thirsty?</p>
            </div>
          </div>
        </div>
        <BeerListContainer />
      </div>
    </section>
  );
};

export default BeerSection;
