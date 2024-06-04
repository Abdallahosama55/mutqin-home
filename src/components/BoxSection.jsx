import React from "react";
import timer from "../assets/SVG_2.svg";
import target from "../assets/SVG.svg";
import think from "../assets/SVG_4.svg";
import price from "../assets/SVG_3.svg";
import search from "../assets/SVG_6.png";
import person from "../assets/SVG_5.svg";
import centerlines from "../assets/center_lines.png"

const BoxSection = () => {
  // Define the data for the items
  const items = [
    {
      text: "يزيد الإنتاجية بكتابة محتوى سريع وفعّال جداً.",
      image: timer
    },
    {
      text: `مجموعة متنوعة من الأساليب والأشكال الكتابية.`,
      image: target
    },
    {
      text: "نحرص على دقة المحتوى من خلال مراجعة دورية.",
      image: think
    },
    ,
    {
      text: "دعم فني متخصص لضمان رضاك وحل المشاكل.",
      image: person
    },

    {
      text: "تحسين محتواك لمحركات البحث لزيادة الزيارات.",
      image: search
    },
    {
      text: "  أسعار مميزة تجعل مُتقن اختيارًا اقتصاديًا مثاليًا.",
      image: price
    }
 
  ];

  return (
    <div
      dir="rtl"
      className="   grid relative text-[#001B79] font-normal text-[22px]  justify-center align-center md:px-6 px-0  bg-[transparent] md:mt-[0px] mt-[0px] z-0 md:grid-cols-1  max-w-[350px] sm:max-w-6xl mx-auto      mx-auto  "
    >
    <div className="  flex justify-center">
      
    <img  src={centerlines}/>
    </div>
      <div className="    overflow-hidden  py-1  justify-center align-center text-center lg:text-start flex flex-col gap-12 rounded-[12px] home-section2 border-none">
        
      <div className="w-full    ">
      <h3 className="text-center py-5 pb-12 px-3 text-[#1B223C] pb-0">
          مُتقِن خيارك الأول لكتابة المحتوي!
        </h3>
        <div className="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 justify-center align-center ">
          {items.map((item, index) => (
            <div key={index} className="  pb-6">
              <div className="grid grid-cols-12 md:ms-4  px-4 justify-center text-[#1B223C]  align-center">
                <div className="md:col-span-1 col-span-12 flex justify-center align-center ">
                  <img src={item.image} className="w-[50px] h-[50px] " alt="timer" />
                </div>
                <div className=" font-thin md:col-span-11 col-span-12  md:p-0 py-2  mt-3 flex justify-start align-center  p-5 md:leading-[1.7rem]   leading-[1.3rem]">
                  <span className="md:text-[20px] text-[12px]   ">{item.text}</span>{" "}
                </div>
              </div>
            </div>
          ))}
       
        </div>
        </div>
      </div>
      <div className=" flex justify-center">
      
      <img  src={centerlines}/>
      </div>
     
    </div>
  );
};

export default BoxSection;
