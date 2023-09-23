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
    "https://youtu.be/nDgIVseTkuE?feature=shared",
    "https://youtu.be/nDgIVseTkuE?feature=shared",
    "https://youtu.be/nDgIVseTkuE?feature=shared"
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
            <VideoLinks title="UTP's Human Rights" imgLink="https://youtu.be/nDgIVseTkuE?feature=shared" />
            <VideoLinks title="UTP's Human Rights" imgLink="https://youtu.be/nDgIVseTkuE?feature=shared" />
            <VideoLinks title="UTP's Human Rights" imgLink="https://youtu.be/nDgIVseTkuE?feature=shared"/>
            <VideoLinks title="UTP's Human Rights" imgLink="https://youtu.be/nDgIVseTkuE?feature=shared" />
            {/* {imgURLs.map((imageUrl, index) => (
              <VideoLinks imgLink={imageUrl} index={index} />
            ))} */}
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
