import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import GlobalStyles from "../GlobalStyles";

const LandingPage = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default LandingPage;
