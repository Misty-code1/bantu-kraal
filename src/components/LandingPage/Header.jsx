import React from "react";

import {  Person, Search } from "react-bootstrap-icons";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container d-lg-flex px-6 m-auto d-none">
        <div className="col-md w-60 pt-3">
          <div class="mt-5">
            <div class="search-bar ms-5">
              <input type="text" class="form-control" placeholder="Search..." />
              <span class="search-icon">
                <Search className="fs-4" />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md text-center">
          <div class="mt-5 ps-sm-4">
            <Link className="brand-link" href="#">
              <h1 className="text-uppercase fw-bolder">Bantu</h1>
              <h3 className="text-uppercase fw-lightweight kraal">Kraal</h3>
            </Link>
          </div>
        </div>
        <div className="col-md text-end">
          <div class="mt-5 pe-sm-5 pt-3">
            <Link className="brand-link" to="#">
              <Person className="fs-3" />
            </Link>
            <Link className="brand-link" to="#">
              <IoMdCart className="fs-3 ms-4" />
            </Link>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-sm bg-white mx-auto">
        <div class="container w-75 py-3">
          <Link class="navbar-brand d-sm-none fw-bold text-uppercase" to="#">
            Bantu Kraal
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav fs-6 fw-semibold px-md-5">
              <li class="nav-item">
                <Link
                  class="nav-link text-black pe-md-5"
                  aria-current="page"
                  to="#"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-black pe-md-5" to="#">
                  Shop
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-black pe-md-5" to="#">
                  Collections
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-black pe-md-5" to="#">
                  Brands
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-black pe-md-5" to="#">
                  Events
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-black" to="#">
                  Book Our Venue
                </Link>
              </li>
            </ul>
            <button class="btn btn-primary ms-auto pb-2 retailer">
              Become a retailer
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
