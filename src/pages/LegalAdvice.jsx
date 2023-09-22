import React,{useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CnrNumberCard from "../components/CnrNumberCard";
import VideoLinks from "../components/VideoLinks";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";


const LegalAdvice = () => {

  const navigate=useNavigate()
  
  
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate('/login')
    }
  }, [])
  

  return (
    <div>
      <Header name="Atharva Upare" />
      <CnrNumberCard />

      <div className="text-center mx-10 text-2xl text-lightseagreen font-semibold uppercase max-w-full h-12 py-2">
        Legal Advice
      </div>
      <div className="important links/pdfs mx-10 pt-4 pb-6">
        <div>
          <div className="py-2  font-medium">Important Links/PDFs:</div>
        </div>
        <div className="flex flex-col gap-y-2">
          <a href="" className="underline text-lightseagreen font-medium">
            STANDARD OPERATING PROCEDURE (SOP) for UNDER TRAIL REVIEW COMMITIES
            (UTRCs)
          </a>
          <a href="" className="underline text-lightseagreen font-medium">
            KJSCE Online
          </a>
        </div>
      </div>
      <div className="video links mx-10">
        <div>
          <div className="flex flex-col gap-y-4 mb-24">
            <VideoLinks />
            <VideoLinks />
            <VideoLinks />
            <VideoLinks />
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <Button className="fixed bottom-8 w-[80%] h-9 bg-lightseagreen">
            Connect to Lawyer
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default LegalAdvice;
