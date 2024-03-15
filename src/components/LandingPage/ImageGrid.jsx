import React from "react";

import image from "../../images/artist4.jpg";

const ImageGrid = () => {
  return (
    <section className="image-section d-flex py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <img src={image} alt="" />
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <img src={image} alt="" />
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <img src={image} alt="" />
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <img src={image} alt="" />
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <img src={image} alt="" />
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
