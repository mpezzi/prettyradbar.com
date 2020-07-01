import React from "react";

const Intro = () => {
  return (
    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Its a new place of yours</h2>
            <p className="text-white-50">
              Come for the drinks, stay for the atmosphere
            </p>
          </div>
        </div>
        <img src="img/ipad-drink.png" className="img-fluid" alt="" />
      </div>
    </section>
  );
};

export default Intro;
