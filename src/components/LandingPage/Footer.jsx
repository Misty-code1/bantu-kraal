import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer py-4">
      <div className="container-fluid">
        <div className="row px-5 py-5">
          <div className="col-sm-4 mb-4 text-sm-center">
            <Link className="brand-link" to="#">
              <p className="text-uppercase fw-bolder text-white display-3 pt-4 mb-0">Bantu</p>
              <h3 className="fs-4 pt-0 px-0 text-uppercase fw-lightweight kraal-footer-text text-white">
                Kraal
              </h3>
            </Link>
          </div>
          <div className="col-sm mb-2 px-0 footer-links">
            <ul className="px-2">
              <li className="pb-3 fs-5"> <Link to="#">Shop</Link> </li>
              <li className="pb-3 fs-5"> <Link to="#">Collections</Link> </li>
              <li className="pb-3 fs-5"> <Link to="#">Brands</Link> </li>
              <li className="pb-3 fs-5"> <Link to="#">EVents</Link> </li>
              <li className="pb-3 fs-5"> <Link to="#">Book Venue</Link> </li>
            </ul>
          </div>
          <div className="col-sm mb-4 text-sm-start">
            <p className="fs-5 fw-semibold text-white mb-3">Trading hours</p>
            <p className="fs-6 text-white mb-0">Monday to Friday</p>
            <p className="fs-5 fw-semibold text-white mb-3">09:00 - 22:00</p>
            <p className="fs-6 text-white mb-0">Weekends</p>
          </div>
          <div className="col-sm text-sm-start">
            <p className="fs-5 fw-semibold text-white mb-2">Become a retailer</p>
            <button className="form-control btn-1 fw-bold fs-6 mb-4">Apply Now!</button>
            <p className="fs-5 fw-semibold text-white mb-2">Get in touch</p>
            <button className="form-control btn-2 fw-bold fs-6">Email Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
