import React from "react";

import qrCode from "../../images/qrcode.png";
import { Link } from "react-router-dom";

const Vendors = () => {
  return (
    <section className="vendors py-3 py-sm-5">
      <div className="container pb-5 pt-1">
        <div className="row d-flex">
          <div className="col-lg-8 text-center text-sm-start mb-4 ">
            <p className="display-3 fw-bold pb-4">Become a vendor</p>
            <p className="pb-4">
              Bantu Kraal curates a diverse range of vendors, from Fashion
              designers to Wine & Gin, <br />
              Beauty, Health and Wellness, and more. Our indoor market space
              offers visitors a <br /> unique shopping experience
            </p>
            <Link to='/vendor_form' className="vendor-btn fw-semibold">
              Join Our Vendor List
            </Link>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className="qr-code">
              <div>
                <img src={qrCode} alt="" className="qrcode ms-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vendors;
