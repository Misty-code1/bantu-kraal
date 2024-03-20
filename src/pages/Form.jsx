import React, { useState } from "react";
import Header from "../components/LandingPage/Header";
import Footer from "../components/LandingPage/Footer";

const Form = () => {
	const [step, setStep] = useState(1);
	const [brandName, setBrandName] = useState("");
	const [brandEmail, setBrandEmail] = useState("");
	const [brandReg, setBrandReg] = useState("");
	const [error, setError] = useState({});

	const validateData = () => {
		const newError = {};
		if (!brandName) {
			newError.name = "Your company's name is required.";
		}else if(brandName.length < 3){
			newError.name = "The length of your company's name should be at least three characters long.";
    }

    if(!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/.test(brandEmail)){
      newError.email = "Invalid Email format"
    }

    if(!brandReg){
      newError.reg = "Your company's registration Number is required.";
    }

		setError(newError);
		return Object.keys(newError).length === 0 ? true : false;
	};


  const HandleChange = (e, setter) => {
    setter(e.target.value)
  }
  const HandleSubmit = (e) => {
    e.preventDefault()
    validateData()
  }
	return (
		<>
			<Header />
			<hr />
			<section className="py-5 vendor-form">
				<div className="container">
					<div className="indicator">
						<span>Vendor Details</span>
					</div>
					<form className="form-controls" onSubmit={HandleSubmit}>
						{step && step === 1 && (
							<div className="row">
								<div className="col-md-4 py-2">
									<label htmlFor="">Company/Brand Name</label>
									<input
										type="text"
										value={brandName}
										className="form-control"
										onChange={(e) => HandleChange(e, setBrandName)}
										placeholder="What is your brand's name?"
									/>
									<span className="text-danger error">{error && error.name}</span>
								</div>
								<div className="col-md-4 py-2">
									<label htmlFor="">Company Registration Number</label>
									<input
										type="text"
										value={brandReg}
										className="form-control"
										onChange={(e) => HandleChange(e, setBrandReg)}
										placeholder="Enter Registration number"
									/>
									<span className="text-danger error">{error && error.reg}</span>
								</div>
								<div className="col-md-4 py-2">
									<label htmlFor="">Company's Email</label>
									<input
										type="email"
										value={brandEmail}
										className="form-control"
										onChange={(e) => setBrandEmail(e.target.value)}
										placeholder="What is your company's Email?"
									/>
									<span className="text-danger error">{error && error.email}</span>
								</div>
								<div className="col-md-4 py-2">
									<label htmlFor="">Company's Mobile</label>
									<input
										type="tel"
										value={brandName}
										className="form-control"
										onChange={(e) => setBrandName(e.target.value)}
										placeholder="What is your company's Mobile?"
									/>
									<span className="text-danger error">Error message</span>
								</div>
								<div className="col-md-4 py-2">
									<label htmlFor="">Company's Address</label>
									<input
										type="text"
										value={brandName}
										className="form-control"
										onChange={(e) => setBrandName(e.target.value)}
										placeholder="Eg: Plot 45, Allen Avenue"
									/>
									<span className="text-danger error">Error message</span>
								</div>
								<div className="col-md-4 py-2">
									<label htmlFor="">Postal Code</label>
									<input
										type="text"
										value={brandName}
										className="form-control"
										onChange={(e) => setBrandName(e.target.value)}
										placeholder="Eg: 100125"
									/>
									<span className="text-danger error">Error message</span>
								</div>
								<div className="col-md-4 py-2">
									<label htmlFor="">City</label>
									<select className="form-control form-select">
										<option selected disabled>
											Select City
										</option>
									</select>
								</div>
								<div className="col-md-4 py-2">
									<label htmlFor="">Province</label>
									<select className="form-control form-select">
										<option selected disabled>
											Select Province
										</option>
									</select>
								</div>
								<div className="col-md-4 py-2">
									<label htmlFor="">Country</label>
									<select className="form-control form-select">
										<option selected disabled>
											Select Country
										</option>
									</select>
								</div>
								{/* <div className="col-md-4 py-2">
									<label htmlFor="">Upload Banner</label>
									<input type="file" className="form-control" />
								</div>
								<div className="col-8"></div> */}
								<div className="col-md-2 pt-4">
									<button className="btn btn-dark form-control">Next</button>
								</div>
							</div>
						)}
					</form>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Form;
