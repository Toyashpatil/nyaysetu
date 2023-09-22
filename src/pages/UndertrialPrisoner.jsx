import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CnrNumberCard from "../components/CnrNumberCard";



const UndertrialPrisoner = () => {
  return (
    <div className="min-h-screen">
      <Header name="Toyash Patil"/> {/*user's name here*/}
      <CnrNumberCard/>
      <Footer/>
    </div>
  );
};

export default UndertrialPrisoner;
