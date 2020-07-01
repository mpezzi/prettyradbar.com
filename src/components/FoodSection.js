import React from "react";
import FoodListContainer from "../components/FoodListContainer";

const FoodSection = () => {
  return (
    <section id="menu" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img
              className="img-fluid mb-3 mb-lg-0"
              src="img/menu.jpg"
              alt="Menu"
            />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Menu</h4>
              <p className="text-black-50 mb-0">
                Check out our delicious menu!
              </p>
            </div>
          </div>
        </div>
        <FoodListContainer />
      </div>
    </section>
  );
};

export default FoodSection;
