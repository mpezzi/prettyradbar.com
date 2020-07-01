import React from 'react';

const FoodListItem = ({ item, index }) => {
  return index % 2
    ? (
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0" id={item.id}>
          <div className="col-lg-6">
            <img className="img-fluid" src={item.image} alt={item.title} />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">
                    {item.title}
                  </h4>
                  <div className="mb-0 text-white-50" dangerouslySetInnerHTML={{ __html: item.body }} />
                  <hr className="d-none d-lg-block mb-2 ml-0" />
                  <div className="mb-0 text-white-50">
                    {item.price}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    : (
      <div className="row justify-content-center no-gutters" id={item.id}>
        <div className="col-lg-6">
          <img className="img-fluid" src={item.image} alt={item.title} />
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-right">
                <h4 className="text-white">
                  {item.title}
                </h4>
                <div className="mb-0 text-white-50" dangerouslySetInnerHTML={{ __html: item.body }} />
                <hr className="d-none d-lg-block mb-2 mr-0" />
                <div className="mb-0 text-white-50">
                  {item.price}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default FoodListItem;
