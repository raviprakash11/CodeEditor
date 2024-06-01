// pages/about.tsx

import React from "react";
import AboutPage from "../modules/About/AboutPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <AboutPage />
      <Footer />
    </>
  );
};

export default About;
