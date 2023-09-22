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
  

  const imgURLs = [
    "https://i.redd.it/cbd801fa2l781.jpg",
    "https://i.redd.it/i-keep-seeing-this-angry-cat-meme-does-anyone-know-what-v0-0o96ygkg9jw91.jpg?width=1080&format=pjpg&auto=webp&s=8a7220f58ae5e5ecbef518367d48b96f7327e06d",
    "https://i.redd.it/i-keep-seeing-this-angry-cat-meme-does-anyone-know-what-v0-n9p8aheg9jw91.jpg?width=1080&format=pjpg&auto=webp&s=1234ce6118236f234e84f50164dd6f176c6d9f7e",
  ];

  return (
    <div>
      <Header name="Atharva Upare" />
      <CnrNumberCard />

      <div className="text-center mx-10 text-2xl text-lightseagreen font-semibold uppercase max-w-full h-12 py-2">
        Legal Advice
      </div>
      <div className="important links/pdfs mx-10 pt-4 pb-6">
        <div>
          <div className="py-2 font-medium">Important Links/PDFs:</div>
        </div>
        <div className="flex flex-col gap-y-2">
          <ul  className="mx-6 list-disc">
            <li>
              <a href="" className="underline text-lightseagreen font-medium">
                STANDARD OPERATING PROCEDURE (SOP) for UNDER TRAIL REVIEW
                COMMITTEES (UTRCs)
              </a>
            </li>
            <li>
              <a href="" className="underline text-lightseagreen font-medium">
                KJSCE Online
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="video links mx-10">
        <div>
          <div className="flex flex-col gap-y-4 mb-24">
            {/* <VideoLinks />
            <VideoLinks />
            <VideoLinks />
            <VideoLinks /> */}
            {imgURLs.map((imageUrl, index) => (
              <VideoLinks imgLink={imageUrl} index={index} />
            ))}
            <div></div>
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
