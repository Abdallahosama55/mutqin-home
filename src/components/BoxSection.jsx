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
      text: "يزيد الإنتاجية بكتابة محتوى سريع وفعّال، وبجودة عالية جداً.",
      image: timer
    },
    {
      text: `الاختيار    من     بين  مجموعة متنوعة من  الأساليب والأشكال الكتابية.`,
      image: target
    },
    {
      text: "نحرص على دقة المحتوى وموثوقيته من خلال مراجعة دورية.",
      image: think
    },
    {
      text: "أسعار تنافسية تجعل منصة مُتقن خيارًا فعالًا من حيث التكلفة.",
      image: price
    },
    {
      text: "تحسين محتواك لمحركات البحث، مما يزيد من زيارات موقعك.",
      image: search
    }
    ,
    {
      text: "دعمًا فنيًا متخصصًا لضمان رضاك وحل أي مشاكل قد تواجهها.",
      image: person
    }
  ];

  return (
    <div
      dir="rtl"
      className=" bg-section-box  grid relative text-[#001B79] font-normal text-[22px]  justify-center align-center md:px-0 px-6  bg-[transparent] md:mt-[0px] mt-[40px] z-0 md:grid-cols-1 md:w-[82%] lg:w-[82%] xl:w-[82%] w-[100%]      mx-auto  "
    >
    <div className="  flex justify-center">
      
    <img  src={centerlines}/>
    </div>
      <div className="    overflow-hidden  py-1  justify-center align-center text-center lg:text-start flex flex-col gap-12 rounded-[12px] home-section2 border-none">
        
      <div className="w-full md:py-5 bg-section-box  ">
      <h3 className="text-center py-3 px-3 text-[#1B223C] pb-0">
          مُتقِن خيارك الأول لكتابة المحتوي!
        </h3>
        <div className="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 justify-center align-center ">
          {items.map((item, index) => (
            <div key={index} className="  pb-6">
              <div className="grid grid-cols-12 md:ms-7  px-6 justify-center text-[#1B223C]  align-center">
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
