import React from "react";

import Header from "../components/LandingPage/Header";
import Footer from "../components/LandingPage/Footer";
import africa2 from "../images/africa2.png";
import brandImg from "../images/discover-img.png";
import artist from "../images/artist-new.webp";

const About = () => {
  return (
    <>
      <Header />
      <section className="about">
        <div className="container px-sm-5">
          <p className="fs-3 fw-bold">About Us</p>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <div className="p-3 mb-3">
                <h5>Founding story</h5>
                <p>
                  <b>Bantu Kraal</b> was born out of shared passion for
                  celebrating African creativity and fostering community
                  connections. <i>Thandiwe Mabaso,</i> our visionary founder,
                  envisioned a space where artisians, perfomers, and culture
                  enthusiasts could come together - a vibrant hub that
                  transcends mere commerce.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3 py-2 about-img-div">
                <img
                  src="https://cdn.pixabay.com/photo/2017/01/12/13/08/africa-1974671_960_720.png"
                  className="about-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container px-sm-5">
          <div className="row">
            <div className="col-md-8">
              <div className="p-3 mb-3">
                <h5>Founding story</h5>

                <p>
                  <b>Vision</b>: To be the heartbeat of African expression,
                  where tradition meets innovation
                </p>

                <ul>
                  <p>Values:</p>
                  <li>
                    <b>Authenticity:</b> We honor the rich tapestry of African
                    heritage, <br /> embracing both ancient wisdom and
                    contemporary flair.
                  </li>
                  <li>
                    <b>sustainability:</b> We tread lightly on the earth, <br />
                    supporting eco-conscious practices and responsible
                    consumption.
                  </li>
                  <li>
                    <b>Diversity:</b> Bantu Kraal is a melting pot of culture.
                    languages, and artistic forms. our diversity is our strenght
                  </li>
                  <li>
                    <b>sustainability:</b> We tread lightly on the earth, <br />
                    supporting eco-conscious practices and responsible
                    consumption.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4  mt-sm-5 pb-3">
              <div className="mb-3 py-2 about-img-div">
                <img src={africa2} alt="" className="about-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="container px-sm-5 py-3">
          <div
            className="hero-float"
            style={{
              background: `linear-gradient(40deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${brandImg})`,
              backgroundSize: "cover",
              height: "30vh",
            }}
          >
            <div className="text-overlay text-white text-center pt-5">
              <p className="display-6 px-5">
                At Bantu Kraal, we're not just a market; we’re a movement - a
                celebration of Africa's past, present, and future
              </p>
            </div>
          </div>
        </div>
        <div className="container px-4 text-center text-sm-start">
          <p className="fs-4 fw-bold mt-3 text-center">Meet the Team</p>
          <div className="row m-auto w-75">
            <div className="col-md-4 mb-4 mb-sm-0">
              <div className="team-coll">
                <img src={artist} className="team-img" alt="" />
                <div className="card-body">
                  <div className="team-text-div text-sm-start mt-3">
                    <p className="team-name mb-0 fw-bold">Thandiwe Mabasa</p>
                    <p className="team position">Founder and creative director</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-sm-0">
              <div className="team-coll">
                <img src={artist} className="team-img" alt="" />
                <div className="card-body">
                  <div className="team-text-div text-sm-start mt-3">
                    <p className="team-name mb-0 fw-bold">Sipho Ngwenya</p>
                    <p className="team position">Founder and creative director</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2 mb-sm-0">
              <div className="team-coll">
                <img src={artist} className="team-img" alt="" />
                <div className="card-body">
                  <div className="team-text-div text-sm-start mt-3">
                    <p className="team-name mb-0 fw-bold">Lerato Moloi</p>
                    <p className="team position">Founder and creative director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
