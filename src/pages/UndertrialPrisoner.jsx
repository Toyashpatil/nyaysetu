import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CnrNumberCard from "../components/CnrNumberCard";
import Options from "../components/Options";
import option1 from "../pages/assets/auction 1.png"
import option2 from "../pages/assets/human-rights 1.png"
import option3 from "../pages/assets/lawyer 1.png"
import option4 from "../pages/assets/auction new.png"
import { NavLink } from "react-router-dom";



const UndertrialPrisoner = () => {

  const navigate = useNavigate()


  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate('/login')
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Header name="Toyash Patil" /> {/*user's name here*/}
      <CnrNumberCard />
      <div className=" flex-col space-y-10 ml-2 justify-center ">
        <div className=" w-[374px] h-[172px]">
          <div className=" flex gap-2 w-[374px] h-[172px]">
            <NavLink to="/connect"><Options img={option1} text="Connect to Legal Services" /></NavLink>
            <NavLink to="/help"><Options img={option2} text="Help and Support" /></NavLink>
          </div>
        </div>
        <hr className="mr-2" />
        <div className=" w-[374px] h-[172px]">
          <div className=" flex gap-2 w-[374px] h-[172px]">
            <NavLink to="/legaladvice" ><Options img={option3} text="Legal Advice" /></NavLink>
            <NavLink to="/monitorcase"><Options img={option4} text="Monitor Legal Cases" /></NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UndertrialPrisoner;
