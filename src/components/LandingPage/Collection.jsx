import React from "react";

import coll1 from "../../images/coll1.png";
import coll2 from "../../images/coll2.png";
import coll3 from "../../images/coll3.png";
import coll4 from "../../images/coll4.png";

const Collection = () => {
	return (
		<section className="mt-5">
			<div className="container-fluid px-4">
				<div className="row mb-5">
					<div className="col-lg mb-3">
						<div className="coll">
							<img src={coll1} className="card-img-top" alt="..." />
							<div className="card-body"></div>
							<h4 className="fw-bold text-center pt-3">New In</h4>
						</div>
					</div>
					<div className="col-lg mb-3 ">
						<div className="coll">
							<img src={coll2} className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="fw-bold text-center pt-3">Hot Producers</h4>
							</div>
						</div>
					</div>
					<div className="col-lg mb-3 ">
						<div className="coll">
							<img src={coll3} className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="fw-bold  text-center pt-3">The Best-Sellers</h4>
							</div>
						</div>
					</div>
					<div className="col-lg mb-3">
						<div className="coll">
							<img src={coll4} alt="..." className="w-100" />
							<div className="card-body">
								<h4 className="fw-bold text-center pt-3">Afro Punk</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Collection;
