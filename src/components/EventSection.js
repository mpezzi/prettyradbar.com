import React from "react";
import EventListContainer from "../components/EventListContainer";

const EventSection = () => {
  return (
    <section id="events" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img
              className="img-fluid mb-3 mb-lg-0"
              src="img/event.jpg"
              alt="Events"
            />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Events</h4>
              <p className="text-black-50 mb-0">
                Keep up to date with our fun events!
              </p>
            </div>
          </div>
        </div>
        <EventListContainer />
      </div>
    </section>
  );
};

export default EventSection;
