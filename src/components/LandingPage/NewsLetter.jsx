import React from "react";

import { IoIosArrowDroprightCircle } from "react-icons/io";

const NewsLetter = () => {
	return (
		<section className="news-letter container-fluid text-center py-5 px">
			<div className="container">
				<p className="fs-4 pt-3 news-header">
					SIGN UP FOR OUR NEWS LETTER TODAY AND JOIN THE MOVEMENT TOWARDS A MORE
					SUSTAINABLE FUTURE
				</p>
				<p className="fs-5 pt-4 fw-semibold">
					BE THE FIRST TO KNOW ABOUT NEW COLLECTIONS AND EXCLUSIVVE OFFERS
				</p>
				<div className="row justify-content-center">
					<div className="col-md-4">
						<div className="news-bar d-flex">
							<input
								type="text"
								className="news-input mt-3 form-control form-control-sm"
								placeholder="Email"
							/>
							{/* <IoIosArrowDroprightCircle className="icon-news fs-3" /> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsLetter;
