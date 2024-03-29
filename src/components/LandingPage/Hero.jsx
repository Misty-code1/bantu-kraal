import React, { useEffect, useState } from "react";

import {
	FaArrowAltCircleLeft,
	FaArrowAltCircleRight,
	FaDotCircle,
  FaRegDotCircle,
} from "react-icons/fa";
import hero1 from "../../images/hero1.png";
import hero2 from "../../images/hero2.png";

const Hero = () => {
	const [cur, setCur] = useState(0);
	const slides = [
		<section className="sec-hero">
			<div className="hero-section d-flex">
				<img className="hero-image1" src={hero1} alt="" />
				<img className="hero-image2" src={hero2} alt="" />
			</div>
			<div className="skew"></div>
			<div className="skew2"></div>
			<div className="skew-content text-dark">
				<h1 className="text-uppercase">Unique indoor market</h1>
				<button className="btn fw-semibold hero-btn btn-dark">
					Shop by Collection
				</button>
				<h4 className="fs-3 fw-bolder mt-2">
					BANTU <br /> <span> KRAAL</span>
				</h4>
			</div>
		</section>,
		<section className="sec-hero">
			<div className="hero-section d-flex">
				<img className="hero-image1" src={hero2} alt="" />
				<img className="hero-image2" src={hero1} alt="" />
			</div>
			<div className="skew"></div>
			<div className="skew2"></div>
			<div className="skew-content text-dark">
				<h1 className="text-uppercase">Unique outdoor market</h1>
				<button className="btn fw-semibold hero-btn btn-dark">
					Shop by Collection
				</button>
				<h4 className="fs-3 fw-bolder mt-2">
					BANTU <br /> <span> KRAAL</span>
				</h4>
			</div>
		</section>,
		<section className="sec-hero">
			<div className="hero-section d-flex">
				<img className="hero-image1" src={hero1} alt="" />
				<img className="hero-image2" src={hero2} alt="" />
			</div>
			<div className="skew"></div>
			<div className="skew2"></div>
			<div className="skew-content text-dark">
				<h1 className="text-uppercase">Decisive indoor market</h1>
				<button className="btn fw-semibold hero-btn btn-dark">
					Shop by Collection
				</button>
				<h4 className="fs-3 fw-bolder mt-2">
					BANTU <br /> <span> KRAAL</span>
				</h4>
			</div>
		</section>,
	];

	const handlePrev = () => {
		setCur(cur === 0 ? slides.length - 1 : cur - 1);
	};

	const handleNext = () => {
		setCur(cur === slides.length - 1 ? 0 : cur + 1);
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCur((prevCur) => (prevCur === slides.length - 1 ? 0 : prevCur + 1));
		}, 5000);

		return () => clearInterval(intervalId);
	}, [slides.length]);

	return (
		<>
			<div className="">{slides[cur]}</div>
			<div className="controls px-5 pt-4 text-center d-flex gap-3 justify-content-center">
				<FaArrowAltCircleLeft
					size={20}
					onClick={handlePrev}
					className="pointer"
				/>
				{slides && slides.map((slide, i) => (<>{cur === i ? ( <FaDotCircle key={i} size={20} className="pointer" />): (<FaRegDotCircle key={i} size={20} className="pointer" />)}</>))}
				<FaArrowAltCircleRight
					size={20}
					onClick={handleNext}
					className="pointer"
				/>
			</div>
		</>
	);
};

export default Hero;
