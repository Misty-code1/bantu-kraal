import React from "react";

import brandImg from "../../images/discover-img.png";

const Brands = () => {
	return (
		<>
			<section className="unique-brands my-4 ">
				<div
					className="hero-float"
					style={{
						background: `linear-gradient(40deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${brandImg})`,
						backgroundSize: "cover",
						height: "50vh",
					}}
				>
					<div className="text-overlay text-white text-center pt-5">
						<h1 className="pt-5">Discover a World of unique brands</h1>
						<h4 className="py-3">inspired by authenticity</h4>
						<p>
							Bantu Kraal is more than just a market; it's an experience. A
							vibrant hub of culture, innovation, and community, unites artists,
							designers, and entertainers{" "}
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Brands;
