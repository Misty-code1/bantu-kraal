import React from "react";

import slider1 from "../../images/sliderImg.jpg";

const Featured = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide mb-5">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active c-item">
            <img src={slider1} alt="..." className="w-100 c-img" />
            <div className="carousel-caption mt-5 top-0 f-div">
              <p className="fs-4 pt-5 fw-bold mb-0">Featured brands</p>
              <h1 className="display-3 fw-bolder">Brain tree Coffe</h1>
              <p className="fs-3">Curated brands and you</p>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img
              src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100 c-img"
              alt="..."
            />
            <div className="carousel-caption mt-5 top-0 f-div">
              <p className="fs-4 pt-5 fw-bold mb-0">Featured brands</p>
              <h1 className="display-3 fw-bolder">Brain tree Coffe</h1>
              <p className="fs-3">Curated brands and you</p>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img
              src="https://images.pexels.com/photos/3224106/pexels-photo-3224106.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="d-block w-100 c-img"
              alt="..."
            />
            <div className="carousel-caption mt-5 top-0 f-div">
              <p className="fs-4 pt-5 fw-bold mb-0">Featured brands</p>
              <h1 className="display-3 fw-bolder">Brain tree Coffe</h1>
              <p className="fs-3">Curated brands and you</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Featured;
