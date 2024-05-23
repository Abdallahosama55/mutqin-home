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
import bgsection3 from '../../assets/elements (1).png';
import centerlines from '../../assets/center_lines.png'
import ContentSectioncomp from "../../components/contentSectioncomp";
export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className=" relative   p-[0px] m-[0px]    home ">
  <div className="z-20 absolute">
  <Modal isOpen={true} >
  This is the content of the modal.
</Modal>

  </div>
 
    <div className=" relative  home-section1 w-[100]  ">
  
    <HomeTextSection />

    </div>
       <BoxSection />
<div className=" relative  ">
<img src={bgsection3} className="absolute z-0 top-[90%] w-full  "/>
<div className=" px-56">

<hr className="  text-center w-[100%]   shadow-lg   bg-black"/>
</div>
<BlocksSection />
<div className=" flex justify-center">
<img src={centerlines} className="  "/>

</div>
<div className=" px-56">

<hr className="  text-center w-[100%]   shadow-lg   bg-black"/>
</div>

</div>
<ForgtenSection />

<ContentSectioncomp/>
<div className=" flex justify-center">
<img src={centerlines} className="  "/>

</div>
<div className=" px-56">

<hr className="  text-center w-[100%]   shadow-lg   bg-black"/>
</div>
      

      <Packages />

      <Information />
      <LastPargraph />
   
    </div>
  );
};
