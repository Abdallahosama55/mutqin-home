import React from "react";
import "./Home.css";

import BoxSection from "../../components/BoxSection";
import PoweredSection from "../../components/PoweredSection";
import BlocksSection from "../../components/BlocksSection";
import FirstStep from "../../components/FirstStep";

import HomeTextSection from "../../components/HomeTextSection";
import Packages from "../../components/Packages";

import Information from "../../components/Information";
import LastPargraph from "../../components/LastPargraph";
import ForgtenSection from "../../components/ForgtenSection";
import SecondStep from "../../components/SecondStep";
import ThirdStep from "../../components/ThirdStep";
import MobileSection from "../../components/MobileSection";
import Navbar from "../../components/Navbar";

export const Home = () => {
  return (
    <div className=" relative  z-20 p-[0px] m-[0px]    home ">
    
    <div className="  home-section1 w-[100] home ">
    <div className=" md:py-4"><Navbar/></div>
  
    <HomeTextSection />
   
    </div>
      <BoxSection />
      <PoweredSection />
      <BlocksSection />
      <ForgtenSection />

  
      <MobileSection />

      <Packages />

      <Information />
      <LastPargraph />
   
    </div>
  );
};
