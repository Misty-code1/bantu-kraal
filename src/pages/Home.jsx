import React from "react";

import Header from "../components/LandingPage/Header";
import Hero from "../components/LandingPage/Hero";
import Brands from "../components/LandingPage/Brands";
import Events from "../components/LandingPage/Events";
import Collections from "../components/LandingPage/Collections";
import Collection from "../components/LandingPage/Collection";
import Shoping from "../components/LandingPage/Shoping";
import Featured from "../components/LandingPage/Featured";
import Artists from "../components/LandingPage/Artists";
import Vendors from "../components/LandingPage/Vendors,";
import ImageGrid from "../components/LandingPage/ImageGrid";
import NeewsLetter from "../components/LandingPage/NewsLetter";
import Footer from "../components/LandingPage/Footer";
import Region from "../components/LandingPage/Region";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Events />
      <Collections />
      <Collection />
      <Shoping />
      <Featured />
      <Artists />
      <Vendors />
      <ImageGrid />
      <NeewsLetter />
      <Footer />
      <Region />
    </>
  );
};

export default Home;
