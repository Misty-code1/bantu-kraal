import React, { useEffect, useState } from "react";
import Header from "../components/LandingPage/Header";
import Footer from "../components/LandingPage/Footer";
import countriesData from "./data.json";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Form = () => {
	const navigate = useNavigate();
	const [step, setStep] = useState(1);
	const [brandName, setBrandName] = useState("");
	const [brandEmail, setBrandEmail] = useState("");
	const [brandReg, setBrandReg] = useState("");
	const [address, setAddress] = useState("");
	const [brandMobile, setBrandMobile] = useState("");
	const [postal, setPostal] = useState("");
	const [city, setCity] = useState("");
	const [province, setProvince] = useState("");
	const [country, setCountry] = useState("");
	const [contactName, setContactName] = useState("");
	const [contactMobile, setContactMobile] = useState("");
	const [contactMobile2, setContactMobile2] = useState("");
	const [contactEmail, setContactEmail] = useState("");
	const [contactEmail2, setContactEmail2] = useState("");
	const [businessType, setBusinessType] = useState("");
	const [niche, setNiche] = useState("");
	const [products, setProducts] = useState("");
	const [market, setMarket] = useState("");
	const [selling, setSelling] = useState("");
	const [image1, setImage1] = useState("");
	const [image2, setImage2] = useState("");
	const [image3, setImage3] = useState("");
	const [uploading1, setUploading1] = useState(false);
	const [uploading2, setUploading2] = useState(false);
	const [uploading3, setUploading3] = useState(false);
	const [fLoading1, setFLoading1] = useState(false);
	const [fLoading2, setFLoading2] = useState(false);
	const [fLoading3, setFLoading3] = useState(false);
	const [error, setError] = useState({});
	const [countries, setCountries] = useState([]);
	const [isChecked, setIsChecked] = useState(false);
	const [buttonLoading, setButtonLoading] = useState(false);

	const handleCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
	};

	const validateData = () => {
		const newError = {};
		if (step === 1) {
			if (!brandName) {
				newError.name = "Your company's name is required.";
			} else if (brandName.length < 3) {
				newError.name =
					"The length of your company's name should be at least three characters long.";
			}

			if (!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/.test(brandEmail)) {
				newError.email = "Invalid Email format";
			}

			if (!brandReg) {
				newError.reg = "Your company's registration Number is required.";
			}

			if (!address) {
				newError.address = "Your company's Address is required.";
			}

			if (!brandMobile) {
				newError.bMobile = "Your company's Mobile Number is required.";
			}

			if (!city) {
				newError.city = "City field is required.";
			}

			if (!province) {
				newError.province = "Province Field is required.";
			}

			if (!country) {
				newError.country = "Your company's registration Number is required.";
			}
		}

		if (step === 2) {
			if (!contactName) {
				newError.contactName = "Name Field is required";
			}

			if (!contactEmail) {
				newError.contactEmail = "Email field is required";
			}
			if (!contactMobile) {
				newError.contactMobile = "Mobile field is required";
			}

			if (
				!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/.test(contactEmail)
			) {
				newError.contactEmail = "Invalid Email format";
			}
		}

		if (step === 3) {
			if (!businessType) {
				newError.businessType = "Field is required";
			}

			if (!contactEmail2) {
				newError.contactEmail2 = "Email field is required";
			}
			if (!contactMobile2) {
				newError.contactMobile2 = "Mobile field is required";
			}
			if (!niche) {
				newError.niche = "Niche field is required";
			}

			if (
				!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/.test(contactEmail2)
			) {
				newError.contactEmail2 = "Invalid Email format";
			}
		}

		if (step === 4) {
			if (!products) {
				newError.products = "field is required";
			}
			if (!selling) {
				newError.selling = "field is required";
			}
			if (!market) {
				newError.market = "field is required";
			}
		}

		if (step === 5) {
			if (!image1 && !image2 && !image3) {
				toast.error("Please upload at least one image");
				return false
			}
		}

		setError(newError);
		return Object.keys(newError).length === 0 ? true : false;
	};

	const HandleChange = (e, setter) => {
		setter(e.target.value);
	};

	const HandlePrevious = (e) => {
		e.preventDefault();
		setStep(step - 1);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const HandleNext = (e) => {
		e.preventDefault();
		const valid = validateData();
		if (!valid) {
			return;
		} else {
			setStep(step + 1);
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	const HandleSubmit = (e) => {
		setButtonLoading(true);
		e.preventDefault();
		if (isChecked) {
			const formData = {
				brandName: brandName,
				brandEmail: brandEmail,
				brandReg: brandReg,
				brandMobile: brandMobile,
				address: address,
				postal: postal,
				city: city,
				province: province,
				country: country,
				contactName: contactName,
				contactMobile: contactMobile,
				contactMobile2: contactMobile2,
				contactEmail: contactEmail,
				contactEmail2: contactEmail2,
				businessType: businessType,
				niche: niche,
				market: market,
				selling: selling,
				products: products,
				image1: image1
					? image1
					: "https://res.cloudinary.com/switch-design/image/upload/v1711015302/vblrqusyj4l2nvao16uw.jpg",
				image2: image2
					? image2
					: "https://res.cloudinary.com/switch-design/image/upload/v1711015302/vblrqusyj4l2nvao16uw.jpg",
				image3: image3
					? image3
					: "https://res.cloudinary.com/switch-design/image/upload/v1711015302/vblrqusyj4l2nvao16uw.jpg",
			};

			console.log("formdata: ", formData);
			try {
				axios
					.post(
						"https://bantu-kraal-backend.onrender.com/api/vendor",
						{ formData },
						{
							headers: {
								"Content-Type": "application/json",
							},
						}
					)
					.then((response) => {
						console.log(response);
						if (response.status) {
							setButtonLoading(false);
							toast.success(response.message);
							setBrandName("");
							setBrandEmail("");
							setAddress("");
							setBrandReg("");
							setBusinessType("");
							setCity("");
							setContactEmail("");
							setContactEmail2("");
							setContactMobile("");
							setContactMobile2("");
							setContactName("");
							setCountry("");
							setImage1("");
							setImage2("");
							setImage3("");
							setMarket("");
							setNiche("");
							setPostal("");
							setProducts("");
							setProvince("");
							setSelling("");
							setStep(7);
						} else {
							setButtonLoading(false);
							toast.error(response.message);
						}
					});

				// Form submitted successfully
			} catch (error) {
				setButtonLoading(false);
				console.error("Error submitting form:", error.message);
				toast.error(error.message);
			}
		} else {
			alert("Please agree to our terms and conditions");
		}
	};

	const uploadFileHandler1 = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append("file", file);
		formData.append("image", file);
		formData.append("upload_preset", "ecommerceapp");
		formData.append("cloud_name", "betadisney");

		setFLoading1(true);

		fetch("https://api.cloudinary.com/v1_1/betadisney/image/upload", {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setImage1(data.url);
				setUploading1(true);
				setFLoading1(false);
			})
			.catch((err) => {
				console.log(err);
				setFLoading1(false);
				setUploading1(false);
			});
	};
	const uploadFileHandler2 = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append("file", file);
		formData.append("image", file);
		formData.append("upload_preset", "ecommerceapp");
		formData.append("cloud_name", "betadisney");

		setFLoading2(true);

		fetch("https://api.cloudinary.com/v1_1/betadisney/image/upload", {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setImage2(data.url);
				setUploading2(false);
				setFLoading2(false);
			})
			.catch((err) => {
				console.log(err);
				setUploading2(false);
				setFLoading2(false);
			});
	};
	const uploadFileHandler3 = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append("file", file);
		formData.append("image", file);
		formData.append("upload_preset", "ecommerceapp");
		formData.append("cloud_name", "betadisney");

		setFLoading3(true);

		fetch("https://api.cloudinary.com/v1_1/betadisney/image/upload", {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setImage3(data.url);
				setUploading3(false);
				setFLoading3(false);
			})
			.catch((err) => {
				console.log(err);
				setUploading3(false);
				setFLoading3(false);
			});
	};

	useEffect(() => {
		// Set countries data from JSON file
		setCountries(countriesData);
	}, []);
	return (
		<>
			<ToastContainer />
			<Header />
			<hr />
			<section className="py-5 vendor-form">
				<div className="container">
					<div className="row justify-content-center d-none d-md-block">
						<div className="col-md-11 py-3">
							<div className="d-flex justify-content-between text-center pt-4">
								<div className="box">
									<span className={step === 1 ? "actives s1" : "s1"}>1</span>
									<p className={step === 1 ? "p-active" : ""}>
										Company <br /> information
									</p>
								</div>
								<div className="box">
									<span className={step === 2 ? "actives s1" : "s1"}>2</span>
									<p className={step === 2 ? "p-active" : ""}>
										Contact <br /> Information
									</p>
								</div>
								<div className="box">
									<span className={step === 3 ? "actives s1" : "s1"}>3</span>
									<p className={step === 3 ? "p-active" : ""}>
										Business <br /> Details
									</p>
								</div>
								<div className="box">
									<span className={step === 4 ? "actives s1" : "s1"}>4</span>
									<p className={step === 4 ? "p-active" : ""}>
										Product <br /> offering
									</p>
								</div>
								<div className="box">
									<span className={step === 5 ? "actives s1" : "s1"}>5</span>
									<p className={step === 5 ? "p-active" : ""}>
										Document <br /> Upload
									</p>
								</div>
								<div className="box">
									<span className={step === 6 ? "actives s1" : "s1"}>6</span>
									<p className={step === 6 ? "p-active" : ""}>
										Terms & <br /> Condition
									</p>
								</div>
								<div className="box">
									<span className={step === 7 ? "actives s1" : ""}>7</span>
									<p className={step === 7 ? "p-active" : ""}>Completion</p>
								</div>
							</div>
						</div>
					</div>
					<form className="form-controls">
						{step && step === 1 && (
							<>
								<h3 className="pb-3">Company Information</h3>
								<div className="row">
									<div className="col-md-4 py-2">
										<label htmlFor="">Company Name / Brand</label>
										<input
											type="text"
											value={brandName}
											className="form-control"
											onChange={(e) => HandleChange(e, setBrandName)}
											placeholder="What is your brand's name?"
										/>
										<span className="text-danger error">
											{error && error.name}
										</span>
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
										<span className="text-danger error">
											{error && error.reg}
										</span>
									</div>
									<div className="col-md-4 py-2">
										<label htmlFor="">Company's Email</label>
										<input
											type="email"
											value={brandEmail}
											className="form-control"
											onChange={(e) => HandleChange(e, setBrandEmail)}
											placeholder="What is your company's Email?"
										/>
										<span className="text-danger error">
											{error && error.email}
										</span>
									</div>
									<div className="col-md-4 py-2">
										<label htmlFor="">Company's Mobile</label>
										<input
											type="tel"
											value={brandMobile}
											className="form-control"
											onChange={(e) => HandleChange(e, setBrandMobile)}
											placeholder="What is your company's Mobile?"
										/>
										<span className="text-danger error">
											{error && error.bMobile}
										</span>
									</div>
									<div className="col-md-4 py-2">
										<label htmlFor="">Company's Address</label>
										<input
											type="text"
											value={address}
											className="form-control"
											onChange={(e) => HandleChange(e, setAddress)}
											placeholder="Eg: Plot 45, Allen Avenue"
										/>
										<span className="text-danger error">
											{error && error.address}
										</span>
									</div>
									<div className="col-md-4 py-2">
										<label htmlFor="">Postal Code</label>
										<input
											type="text"
											value={postal}
											className="form-control"
											onChange={(e) => HandleChange(e, setPostal)}
											placeholder="Eg: 100125"
										/>
									</div>
									<div className="col-md-4 py-2">
										<label htmlFor="">City</label>
										<select
											className="form-control form-select"
											value={city}
											onChange={(e) => HandleChange(e, setCity)}
										>
											<option>Select City</option>
											{countries &&
												countries.map((city, i) => (
													<option value={city.city} key={i}>
														{city.city}
													</option>
												))}
										</select>
										<span className="text-danger error">
											{error && error.city}
										</span>
									</div>
									<div className="col-md-4 py-2">
										<label htmlFor="">Province</label>
										<select
											className="form-control form-select"
											value={province}
											onChange={(e) => HandleChange(e, setProvince)}
										>
											<option>Select Province</option>
											<option value="Eastern Cape">Eastern Cape</option>
											<option value="Free State">Free State</option>
											<option value="Gauteng">Gauteng</option>
											<option value="KwaZulu-Natal">KwaZulu-Natal</option>
											<option value="Limpopo">Limpopo</option>
											<option value="Mpumalanga">Mpumalanga</option>
											<option value="Northern Cape">Northern Cape</option>
											<option value="North West">North West</option>
											<option value="Western Cape">Western Cape</option>
										</select>
										<span className="text-danger error">
											{error && error.province}
										</span>
									</div>
									<div className="col-md-4 py-2">
										<label htmlFor="">Country</label>
										<select
											className="form-control form-select"
											value={country}
											onChange={(e) => HandleChange(e, setCountry)}
										>
											<option>Select Country</option>
											<option value="South Africa">South Africa</option>
										</select>
										<span className="text-danger error">
											{error && error.country}
										</span>
									</div>
									{/* <div className="col-md-4 py-2">
                    <label htmlFor="">Upload Banner</label>
                    <input type="file" className="form-control" />
                  </div>
                  <div className="col-8"></div> */}
									<div className="col-md-2 pt-4">
										<button
											className="btn btn-dark form-control"
											onClick={HandleNext}
										>
											Next
										</button>
									</div>
								</div>
							</>
						)}
						{step && step === 2 && (
							<>
								<h3 className="pb-3">Contact Information</h3>
								<div className="row">
									<div className="col-md-4 py-2">
										<label htmlFor="">Contact Person</label>
										<input
											type="text"
											value={contactName}
											className="form-control"
											onChange={(e) => HandleChange(e, setContactName)}
											placeholder="Full Name?"
											autoFocus
										/>
										<span className="text-danger error">
											{error && error.contactName}
										</span>
									</div>
									<div className="col-md-4 py-2">
										<label htmlFor="">Contact Phone Number</label>
										<input
											type="text"
											value={contactMobile}
											className="form-control"
											onChange={(e) => HandleChange(e, setContactMobile)}
											placeholder="eg: +27687654321"
										/>
										<span className="text-danger error">
											{error && error.contactMobile}
										</span>
									</div>
									<div className="col-md-4"></div>
									<div className="col-md-4 py-2">
										<label htmlFor="">Contact Email</label>
										<input
											type="email"
											value={contactEmail}
											className="form-control"
											onChange={(e) => HandleChange(e, setContactEmail)}
											placeholder="Eg: john@company.co.za"
										/>
										<span className="text-danger error">
											{error && error.contactEmail}
										</span>
									</div>
									<div className="col-8"></div>
									<div className="col-md-2 pt-4">
										<button
											className="btn btn-secondary form-control"
											onClick={HandlePrevious}
										>
											Previous
										</button>
									</div>
									<div className="col-md-2 pt-4">
										<button
											className="btn btn-dark form-control"
											onClick={HandleNext}
										>
											Next
										</button>
									</div>
								</div>
							</>
						)}
						{step && step === 3 && (
							<>
								<h3 className="pb-3">Business Details</h3>
								<div className="row">
									<div className="col-md-4 py-2">
										<label htmlFor="">Business Type</label>
										<select
											className="form-control form-select"
											value={businessType}
											onChange={(e) => HandleChange(e, setBusinessType)}
										>
											<option>Select Business type</option>
											<option value="Sole Proprietorship">
												Sole Proprietorship
											</option>
											<option value="Partnership">Partnership</option>
											<option value="Corporation">Corporation</option>
										</select>
										<span className="text-danger error">
											{error && error.businessType}
										</span>
									</div>
									<div className="col-md-4 py-2">
										<label htmlFor="">Contact Phone Number</label>
										<input
											type="text"
											value={contactMobile2}
											className="form-control"
											onChange={(e) => HandleChange(e, setContactMobile2)}
											placeholder="eg: +27687654321"
										/>
										<span className="text-danger error">
											{error && error.contactMobile2}
										</span>
									</div>
									<div className="col-md-4"></div>
									<div className="col-md-4 py-2">
										<label htmlFor="">Contact Email</label>
										<input
											type="email"
											value={contactEmail2}
											className="form-control"
											onChange={(e) => HandleChange(e, setContactEmail2)}
											placeholder="Eg: john@company.co.za"
										/>
										<span className="text-danger error">
											{error && error.contactEmail2}
										</span>
									</div>
									<div className="col-md-4 py-2">
										<label htmlFor="">Niche</label>
										<select
											className="form-control form-select"
											value={niche}
											onChange={(e) => HandleChange(e, setNiche)}
										>
											<option>Select your Niche</option>
											<option value="Media and Entertainment">
												Media and Entertainment
											</option>
											<option value="Handcrafted Jewelry and Accessories">
												Handcrafted Jewelry and Accessories
											</option>
											<option value="Sustainable Fashion and Apparel">
												Sustainable Fashion and Apparel
											</option>
											<option value="Gourmet Food and Specialty Snacks">
												Gourmet Food and Specialty Snacks
											</option>
											<option value="Natural Beauty and Skincare Products">
												Natural Beauty and Skincare Products
											</option>
											<option value="Unique Home Decor and Interior Design">
												Unique Home Decor and Interior Design
											</option>
											<option value="Crafted Artwork and Sculptures">
												Crafted Artwork and Sculptures
											</option>
											<option value="Organic Produce and Farm-to-Table Products">
												Organic Produce and Farm-to-Table Products
											</option>
											<option value="Handmade Crafts and DIY Supplies">
												Handmade Crafts and DIY Supplies
											</option>
										</select>
										<span className="text-danger error">
											{error && error.niche}
										</span>
									</div>
									<div className="col-4"></div>
									<div className="col-md-2 pt-4">
										<button
											className="btn btn-secondary form-control"
											onClick={HandlePrevious}
										>
											Previous
										</button>
									</div>
									<div className="col-md-2 pt-4">
										<button
											className="btn btn-dark form-control"
											onClick={HandleNext}
										>
											Next
										</button>
									</div>
								</div>
							</>
						)}
						{step && step === 4 && (
							<>
								<h3 className="pb-3">Product/Service Offering</h3>
								<div className="row">
									<div className="col-md-4 py-2">
										<label htmlFor="">
											Description of Products/Services Offered{" "}
										</label>
										<textarea
											autoFocus
											rows="5"
											className="form-control"
											placeholder="e.g  We offer a variety of coffee beverages, including espresso, cappuccino, latte, and specialty drinks. We also serve pastries and light snacks. "
											value={products}
											onChange={(e) => HandleChange(e, setProducts)}
										></textarea>
										<span className="text-danger error">
											{error && error.name}
										</span>
									</div>
									<div className="col-md-4 py-2">
										<label htmlFor="">Unique Selling Proposition </label>
										<textarea
											rows="5"
											className="form-control"
											placeholder="e.g  Our commitment to using premium coffee beans sourced from sustainable farms and our dedication to exceptional customer service set us apart from other coffee shops in the area. "
											value={selling}
											onChange={(e) => HandleChange(e, setSelling)}
										></textarea>
										<span className="text-danger error">
											{error && error.name}
										</span>
									</div>
									<div className="col-4"></div>
									<div className="col-md-4 py-2">
										<label htmlFor="">Target Market/Customers </label>
										<textarea
											rows="5"
											className="form-control"
											placeholder="e.g  Our target market includes coffee enthusiasts, professionals, students, and local residents looking for a welcoming coffee shop experience. "
											value={market}
											onChange={(e) => HandleChange(e, setMarket)}
										></textarea>
										<span className="text-danger error">
											{error && error.name}
										</span>
									</div>
									<div className="col-8"></div>
									<div className="col-md-2 pt-4">
										<button
											className="btn btn-secondary form-control"
											onClick={HandlePrevious}
										>
											Previous
										</button>
									</div>
									<div className="col-md-2 pt-4">
										<button
											className="btn btn-dark form-control"
											onClick={HandleNext}
										>
											Next
										</button>
									</div>
								</div>
							</>
						)}
						{step && step === 5 && (
							<>
								<h3 className="pb-3">Document Upload</h3>
								<div className="row">
									<div className="col-md-4 py-2">
										<label htmlFor="">
											Business License/Certificate of Registration
										</label>
										{uploading1 ? (
											<input
												type="text"
												className="form-control is-valid"
												value={image1}
												readOnly
												autoFocus
											/>
										) : (
											<input
												type="file"
												className="form-control"
												onChange={uploadFileHandler1}
											/>
										)}
										<span className="text-danger error"></span>
									</div>
									<div className="col-md-4 py-2">
										<label htmlFor="">Additional Documents </label>
										{uploading2 ? (
											<input
												type="text"
												className="form-control valid-feedback"
												value={image2}
												readOnly
											/>
										) : (
											<input
												type="file"
												className="form-control"
												onChange={uploadFileHandler2}
											/>
										)}
										<span className="text-danger error"></span>
									</div>
									<div className="col-4"></div>
									<div className="col-md-4 py-2">
										<label htmlFor="">Product Catalog </label>
										{uploading3 ? (
											<input
												type="text"
												className="form-control"
												value={image3}
												readOnly
											/>
										) : (
											<input
												type="file"
												className="form-control"
												onChange={uploadFileHandler3}
											/>
										)}
										<span className="text-danger error"></span>
									</div>
									<div className="col-8"></div>
									<div className="col-md-2 pt-4">
										<button
											className="btn btn-secondary form-control"
											onClick={HandlePrevious}
										>
											Previous
										</button>
									</div>
									<div className="col-md-2 pt-4">
										<button
											className="btn btn-dark form-control"
											onClick={HandleNext}
										>
											Next
										</button>
									</div>
								</div>
							</>
						)}
						{step && step === 6 && (
							<>
								<h3 className="pb-3">Terms and Conditions</h3>
								<div className="row">
									<div className="col-md-10 py-2">
										<p>
											By submitting this application, you acknowledge that you
											have read and agree to abide by the terms and conditions
											set forth by Bantu Kraal. This includes compliance with
											marketplace rules and regulations, as well as adherence to
											quality standards and customer service expectations.{" "}
										</p>
										<p>
											Please click the "Submit" button below to complete your
											application. Once submitted, your application will be
											reviewed by our team, and you will be notified of the
											status via email or phone.{" "}
										</p>
										<input
											type="checkbox"
											className="form-check-inline"
											checked={isChecked}
											onChange={handleCheckboxChange}
										/>{" "}
										<span>I Agree to the Terms and Conditions </span>
									</div>
									<div className="col-2"></div>
									<div className="col-md-2 pt-4">
										{buttonLoading ? (
											<Loader />
										) : (
											<button
												className="btn btn-dark form-control"
												onClick={HandleSubmit}
											>
												Submit Application
											</button>
										)}
									</div>
								</div>
							</>
						)}

						{step && step === 7 && (
							<div className="row justify-content-center py-5">
								<div className="col-md-6 py-3 text-center">
									<h2 className="px-3 pb-3">
										Thank you for submitting your application
									</h2>
									<p>
										We have received your application and will review it
										promptly. You will receive a confirmation email shortly. If
										you have any questions or need further assistance, please
										contact our support team.
									</p>
									<p>
										We value your feedback! If you encountered any issues or
										have suggestions for improving our application process,
										please let us know by emailing us at
										feedback@bantukraal.com. Your input helps us enhance our
										services for all vendors.
									</p>
									<Link to="/" className="btn btn-dark">
										Back to Homepage
									</Link>
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
