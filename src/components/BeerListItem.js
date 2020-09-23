import React from "react";
import cx from "classnames";

const BeerListItem = ({ item, index }) => {
  return (
    <div className="col-md-4 col-sm-12 py-3">
      <div
        className={cx("text-center", "h-100", "project", {
          "bg-black": index % 2 !== 0,
          "bg-secondary": index % 2 === 0,
        })}
      >
        <div className="d-flex h-100">
          <div className="project-text w-100 my-auto text-center text-lg-left">
            <h4 className="text-white">{item.title}</h4>
            <div
              className="mb-0 text-white-50"
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
            <hr className="d-none d-lg-block mb-2 ml-0" />
            <div className="mb-0 text-white-50">{item.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerListItem;
