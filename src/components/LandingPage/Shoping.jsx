import React from "react";

import { IoIosArrowDroprightCircle } from "react-icons/io";
import brandImg from "../../images/brand-icon.png";
import bIcon1 from "../../images/brand-icon1.jpg";
import bIcon2 from "../../images/brand-icon2.jpg";
import bIcon3 from "../../images/brand-icon3.jpg";
import bIcon4 from "../../images/brand-icon4.jpg";

const Shoping = () => {
  return (
    <section>
      <div className="container pb-4">
        <div className="row">
          <div className="col-md text-center text-sm-start pt-sm-4">
            <p className="display-4 fw-semibold">Shop Our Brands</p>
            <img src={brandImg} alt="" className="pb-2" />
            <h1 className="display-1 mb-0 fw-bolder text-uppercase">Bantu</h1>
            <p className="display-3 fw-normal brand-kraal pt-0">KRAAL</p>
            <button className="px-5 py-3 bg-dark text-white fw-semibold"> <IoIosArrowDroprightCircle className="fs-4" /> Visit Bantu Kraal Store</button>
          </div>
          <div className="col-md pt-4">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-6">
                  <img
                    src={bIcon1}
                    class="pb-4 w-100 img-fluid"
                    alt="Image 1"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <img
                    src={bIcon2}
                    class="pb-4 w-100 img-fluid"
                    alt="Image 2"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <img
                    src={bIcon3}
                    class="pb-4 w-100 img-fluid"
                    alt="Image 3"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <img src={bIcon4} class="w-100 img-fluid" alt="Image 4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shoping;
