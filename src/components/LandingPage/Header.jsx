import React from "react";

import { Person, Search } from "react-bootstrap-icons";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import blackLogo from "../../images/black-logo.png";

const Header = () => {
	return (
		<>
			<div className="text-center bg-dark py-2">
				<marquee className="text-white">
					GET 10% OFF FOR SHARING A REVIEW WITH US (USE CODE REVIEW10K AT
					CHECKOUT){" "}
				</marquee>
			</div>
			<div className="container d-lg-block d-none">
				<div className="row text-center justify-content-center">
					<div className="col-3">
						<div className="search-bar mt-4">
							<input
								type="text"
								className="form-control"
								placeholder="Search..."
							/>
							<span className="search-icon">
								<Search className="fs-4" />
							</span>
						</div>
					</div>
					<div className="col-6 text-center mt-2">
						<Link className="brand-link" to="/">
							<img src={blackLogo} alt="" width="300px" />
						</Link>
					</div>
					<div className="col-3 mt-4">
						<Link className="brand-link1" to="#">
							<Person className="fs-3" />
						</Link>
						<Link className="brand-link1" to="#">
							<IoMdCart className="fs-3 ms-4" />
						</Link>
						<Link className="brand-link1" to="#">
							<IoMdCart className="fs-3 ms-4" />
						</Link>
						<Link className="brand-link1" to="#">
							<IoMdCart className="fs-3 ms-4" />
						</Link>
						<Link className="brand-link" to="#">
							<Person className="fs-3" />
						</Link>
						<Link className="brand-link" to="#">
							<IoMdCart className="fs-3 ms-4" />
						</Link>
					</div>
				</div>
			</div>
			<nav className="navbar navbar-expand-sm bg-white mx-auto">
				<div className="container py-3">
					<Link
						className="navbar-brand d-md-none fw-bold text-uppercase"
						to="/"
					>
						<img src={blackLogo} alt="" width="200px" />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav fs-5 fw-semibold ms-auto me-auto">
							<li className="nav-item">
								<Link
									className="nav-link text-black pe-md-5"
									aria-current="page"
									to="/"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-black pe-md-5" to="/about">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-black pe-md-5" to="#">
									Shop
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-black pe-md-5" to="#">
									Collections
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-black pe-md-5" to="#">
									Brands
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-black pe-md-5" to="#">
									Events
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-black" to="#">
									Book Our Venue
								</Link>
							</li>
							<li className="nav-item nav-btn">
								<Link className="btn btn-primary pb-2 retailer" to="/vendor_form">
									Become a retailer
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
