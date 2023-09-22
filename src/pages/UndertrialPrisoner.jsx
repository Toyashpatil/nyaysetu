import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CnrNumberCard from "../components/CnrNumberCard";



const UndertrialPrisoner = () => {

  const navigate=useNavigate()
  
  
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate('/login')
    }
  }, [])
  
  return (
    <div className="min-h-screen">
      <Header name="Toyash Patil"/> {/*user's name here*/}
      <CnrNumberCard/>
      <Footer/>
    </div>
  );
};

export default UndertrialPrisoner;
