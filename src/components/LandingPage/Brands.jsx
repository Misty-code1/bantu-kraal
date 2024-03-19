import React from "react";

import brandImg from "../../images/discover-img.png";

const Brands = () => {
  return (
    <>
      <section className="unique-brands my-4 ">
        <div className="hero-float">
          <img
            src={brandImg} style={{width: "100%", objectFit: "cover"}}
            alt=""
          />
        </div>
        {/* <div className="text-overlay">
          <h1>Discover a World of unique brands</h1>
          <p>inspired by authenticity</p>
        </div> */}
      </section>
    </>
  );
};

export default Brands;
