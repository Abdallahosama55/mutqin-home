import React from "react";
import timer from "../assets/timer.svg";
import target from "../assets/target.png";
import think from "../assets/think.png";
import price from "../assets/prices.png";
import search from "../assets/search.png";
import person from "../assets/person.png";


const BoxSection = () => {
  // Define the data for the items
  const items = [
    {
      text: "يزيد الإنتاجية بكتابة محتوى سريع وفعّال، وبجودة عالية جداً.",
      image: timer
    },
    {
      text: "الاختيار من بين مجموعة متنوعة من الأساليب والأشكال الكتابية.",
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
      className=" grid  text-[#001B79] font-normal text-[22px]  justify-center align-center px-8 bg-[transparent] mt-[40px] z-0 md:grid-cols-1 max-w-screen-xl mx-auto"
    >
      <div className=" overflow-hidden py-5  justify-center align-center text-center lg:text-start flex flex-col gap-12 rounded-[12px] bg-[#5225CE] border-none">
        <h3 className="text-center py-3 text-white pb-0">
          مُتقِن خيارك الأول لكتابة المحتوي!
        </h3>
        <div className="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 justify-center align-center ">
          {items.map((item, index) => (
            <div key={index} className=" xl:pe-1  md:pe-1 lg:pe-1 xl:ps-1 md:ps-1 lg:ps-1 pb-6">
              <div className="grid grid-cols-12  md:ms-7  px-6 justify-center text-white  align-center">
                <div className="md:col-span-1 col-span-12 flex justify-center align-center ">
                  <img src={item.image} className="w-[50px] h-[50px] " alt="timer" />
                </div>
                <div className=" font-thin md:col-span-11 col-span-12  md:p-0 py-2  mt-5  p-5  leading-[0.75rem]">
                  <span className="md:text-[16px] text-[10px]">{item.text}</span>{" "}
                </div>
              </div>
            </div>
          ))}
       
        </div>
      </div>
    </div>
  );
};

export default BoxSection;
