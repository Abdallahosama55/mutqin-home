import React, { useState } from "react";
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
import Modal from "../../components/common/Modal";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className=" relative   p-[0px] m-[0px]    home ">
  <div className="z-20 absolute">
  <Modal isOpen={true} >
  This is the content of the modal.
</Modal>

  </div>
 
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
