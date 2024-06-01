// pages/index.tsx

import React from "react";
import HomePage from "../modules/Home/HomePage";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
};

export default Home;
