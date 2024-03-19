import React from "react";

import artist1 from "../../images/artist1.jpg";
import artist2 from "../../images/artist2.jpg";
import artist3 from "../../images/artist3.jpg";
import artist4 from "../../images/artist4.jpg";

import icon1 from "../../images/p-icon1.jpg";
import icon2 from "../../images/p-icon2.jpg";
import icon3 from "../../images/p-icon3.jpg";
import icon4 from "../../images/p-icon4.jpg";

const Artists = () => {
	return (
		<section>
			<div className="container-fluid px-4">
				<p className="display-5 fw-medium mb-4 ps-sm-3 live-events">
					Featured artists
				</p>
				<div className="row mb-5">
					<div className="col-lg mb-5 mb-sm-0">
						<div className="coll">
							<img src={artist1} className="card-img-top" alt="..." />
							<div className="card-body d-flex text-center mt-3 mt-sm-4">
								<div className="p-icon-div me-3 me-sm-4">
									<img className="profile-icond h-50 " src={icon1} alt="" />
								</div>
								<div className="icon-text-div">
									<p className="icon-name mb-0 fs-4 fw-bold">Vusi Luya</p>
									<p className="icon-region">South Africa</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg mb-5 mb-sm-0">
						<div className="coll">
							<img src={artist2} className="card-img-top" alt="..." />
							<div className="card-body d-flex text-center mt-3 mt-sm-4">
								<div className="p-icon-div me-3 me-sm-4">
									<img className="profile-icond h-50 " src={icon2} alt="" />
								</div>
								<div className="icon-text-div">
									<p className="icon-name mb-0 fs-4 fw-bold">Vusi Luya</p>
									<p className="icon-region">South Africa</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg mb-5 mb-sm-0">
						<div className="coll">
							<img src={artist3} className="card-img-top" alt="..." />
							<div className="card-body d-flex text-center mt-3 mt-sm-4">
								<div className="p-icon-div me-3 me-sm-4">
									<img className="profile-icond h-50 " src={icon3} alt="" />
								</div>
								<div className="icon-text-div">
									<p className="icon-name mb-0 fs-4 fw-bold">Vusi Luya</p>
									<p className="icon-region">South Africa</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg">
						<div className="coll">
							<img src={artist4} alt="..." className="w-100" />
							<div className="card-body d-flex text-center mt-3 mt-sm-4">
								<div className="p-icon-div me-3 me-sm-4">
									<img className="profile-icond h-50 " src={icon4} alt="" />
								</div>
								<div className="icon-text-div">
									<p className="icon-name mb-0 fs-4 fw-bold">Vusi Luya</p>
									<p className="icon-region">South Africa</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Artists;
