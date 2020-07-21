import React from "react";
import DrinkListContainer from "../components/DrinkListContainer";

const DrinkSection = () => {
  return (
    <section id="ontap" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-3">
          <div className="col-xl-8 col-lg-7">
            <img
              className="img-fluid mb-3 mb-lg-0"
              src="img/drink.jpg"
              alt="Drinks"
            />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>On Tap</h4>
              <p className="text-black-50 mb-0">What is on tap?</p>
            </div>
          </div>
        </div>
        <DrinkListContainer />
      </div>
    </section>
  );
};

export default DrinkSection;
