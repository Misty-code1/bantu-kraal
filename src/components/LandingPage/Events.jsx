import React from "react";

import event1 from "../../images/event1.jpg";
import event2 from "../../images/event2.jpg";
import event3 from "../../images/event3.jpg";

const Events = () => {
	return (
		<section className="event-section">
			<div className="container-fluid px-4">
				<p className="display-4 fw-medium mb-5 ps-sm-3 live-events">
					Live Events
				</p>
				<div className="row mb-5">
					<div className="col-lg mb-3 ms-sm-1 me-sm-4">
						<h4 className="fw-bold pb-sm-3">Comedy Nights</h4>
						<div className="car">
							<img src={event1} className="card-img-top" alt="..." />
							<div className="card-body"></div>
							<button className="event-btn w-100 mt-4 p-3">Tuesdays</button>
						</div>
					</div>
					<div className="col-lg mb-3 me-sm-4">
						<h4 className="fw-bold pb-sm-3">Concert</h4>
						<div className="car">
							<img src={event2} className="card-img-top" alt="..." />
							<div className="card-body">
								<button className="event-btn w-100 mt-4 p-3">Thursdays</button>
							</div>
						</div>
					</div>
					<div className="col-lg mb-3 me-sm-4">
						<h4 className="fw-bold pb-sm-3">Themed Nights</h4>
						<div className="car">
							<img src={event3} className="card-img-top" alt="..." />
							<div className="card-body">
								<button className="event-btn w-100 mt-4 p-3">
									Upcoming Events
								</button>
							</div>
						</div>
					</div>
					<div className="col-lg mb-3 me-sm-4">
						<h4 className="fw-bold pb-sm-3">Comedy Nights</h4>
						<div className="car">
							<img src={event2} alt="..." className="w-100" />
							<div className="card-body">
								<button className="event-btn w-100 mt-4 p-3">Tuesdays</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Events;
