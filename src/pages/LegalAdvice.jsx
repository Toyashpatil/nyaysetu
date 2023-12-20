import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CnrNumberCard from "../components/CnrNumberCard";
import Video from "../components/Video";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const LegalAdvice = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  // const imgURLs = [
  //   "https://wallpapercave.com/wp/wp4332844.jpg",
  //   "https://wallpapercave.com/dwp1x/wp4332850.jpg",
  //   "https://wallpapercave.com/dwp1x/wp2750384.jpg",
  // ];

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
          <ul className="mx-6 list-disc">
            <li>
              <a
                href="https://nalsa.gov.in/acts-rules/guidelines/standard-operating-procedure-sop-guidelines-for-utrcs"
                className="underline text-lightseagreen font-medium"
              >
                STANDARD OPERATING PROCEDURE (SOP) for UNDER TRAIL REVIEW
                COMMITTEES (UTRCs)
              </a>
            </li>
            <li>
              <a
                href="https://nalsa.gov.in/services/legal-aid/legal-services"
                className="underline text-lightseagreen font-medium"
              >
                Legal Aid Organizations in India
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="video links mx-10">
        <div>
          <div className="flex flex-col gap-y-4 mb-24">
            <Video title="UTP's Human Rights" link="https://www.youtube.com/embed/nDgIVseTkuE?si=8v_EBEIMQZ-D8kBb" />
            <Video title="UTP's Human Rights" link="https://www.youtube.com/embed/nDgIVseTkuE?si=8v_EBEIMQZ-D8kBb" />
            <Video title="UTP's Human Rights" link="https://www.youtube.com/embed/nDgIVseTkuE?si=8v_EBEIMQZ-D8kBb"/>
            <Video title="UTP's Human Rights" link="https://www.youtube.com/embed/nDgIVseTkuE?si=8v_EBEIMQZ-D8kBb" />
            {/* {imgURLs.map((imageUrl, index) => (
              <VideoLinks imgLink={imageUrl} index={index} />
            ))} */}
            <div></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <Button
          onClick={() => {
            navigate("/connect");
          }}
          className="fixed bottom-8 w-[80%] h-9 bg-lightseagreen"
        >
          Connect to Lawyer
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default LegalAdvice;
