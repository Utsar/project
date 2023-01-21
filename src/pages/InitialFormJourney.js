import React from "react";
import EventForm from "../components/EventForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import GlobalStyle from "../GlobalStyles";

const InitialFormJourney = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <EventForm />
      <Footer />
    </>
  );
};

export default InitialFormJourney;
