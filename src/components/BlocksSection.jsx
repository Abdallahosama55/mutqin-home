import React from "react";
import icone from "../assets/Blocks/icon1.png";
import circle from "../assets/Blocks/icon2.png";
import chatimage from "../assets/Blocks/icon3.png";
import icon4 from "../assets/Blocks/icon4.png";
import icon5 from "../assets/Blocks/BlockImage.png";
import icon6 from "../assets/Blocks/icon6.png";
import icon7 from "../assets/world.png";
import icon8 from "../assets/icon8.png";
import icon9 from "../assets/icon9.png";

const BlocksSection = () => {
  return (
    <section
      id="features"
      className=" pt-[40px]  relative max-w-[350px] sm:max-w-6xl mx-auto ">
      <h1 className="  text-[#5225CE]  text-center text-[23px] px-2 sm:p-0 sm:text-[38px] font-medium">
        المنصة العربية رقم 1 لاستخدام الذكاء الاصطناعي بفاعلية
      </h1>
      <div className=" mt-[5px] ">
  

        <div className=" px-4   gap-4 grid grid-cols-1 justify-items-center mx-auto md:grid-cols-3 lg:grid-cols-3">
        <div  className="  w-full md:p-5">
        <div className=" px-4    gap-4 grid grid-cols-1 justify-items-center mx-auto md:grid-cols-1 lg:grid-cols-1">
        <div className=" col-span-1">
     
        <div
        id="block-container"
        dir="rtl"
        className="border-2 grid grid-rows-4 text-start p-8 py-4 sm:w-[350px] text-black h-[auto] bg-transparent rounded-[15px] border-[rgba(72, 69, 78, 0.5)]">
        <figure className="row-span-2 flex justify-center items-center">
          <img
            className="max-h-40"
            src={icon9}
            alt=""
          />
        </figure>
        <h2 className="row-span-1 text-[#1B223C] text-center my-auto text-[20px] font-bold">
          التفاعل الصوتي
        </h2>
        <p className="row-span-1 text-[#797878]  text-center mb-2 text-[14px] font-light">
          تعامل بسهولة مع روبوت الدردشة المدعم بالذكاء الاصطناعي باستخدام
          ميزة تحويل الكلام إلى نص في تطبيقنا، مما يوفر وضعًا مريحًا
          للتفاعل.
        </p>
      </div>
        
        </div>
        <div className=" col-span-1">
       
       <div
       id="block-container"
       dir="rtl"
       className="border-2 grid grid-rows-3 text-start p-8 py-4 sm:w-[350px] text-black h-[auto] bg-transparent rounded-[15px] border-[rgba(72, 69, 78, 0.5)]">
       <figure className="row-span-1 flex justify-center items-center">
         <img
           className="max-h-20"
           src={icone}
           alt=""
         />
       </figure>
       <h2 className="row-span-1  text-[#1B223C] text-center my-auto text-[20px] font-bold">
         متكامل مع جوجل{" "}
         <span className=" font-sans font-bold">Gemini</span>
       </h2>
       <p className="row-span-1 text-[#797878] text-center mb-2 text-[14px] font-light">
         يتضمن تطبيقنا{" "}
         <span className=" font-sans font-normal">Gemini</span>{" "}
         بسلاسة، مما يوفر إمكانية الوصول إلى الإنترنت في الوقت الفعلي
         للإجابة على الاستفسارات بناءً على أحدث المعلومات من عمليات بحث{" "}
         <span className=" font-sans font-normal">Google</span>.
       </p>
     </div>
       
       </div>
     

     </div>
      
        
        </div>
        <div  className="  w-full md:p-5">
        <div className=" px-4  grid grid-cols-1 justify-items-center mx-auto md:grid-cols-1 lg:grid-cols-1">
        <div className=" col-span-1  h-100">
        <div
        id="block-container"
        dir="rtl"
        className="border-2    grid grid-rows-4 text-start  p-8 py-4  sm:w-[350px] text-black  bg-transparent rounded-[15px] border-[rgba(72, 69, 78, 0.5)]">
        <figure className="row-span-2  py-6 flex justify-center items-center">
          <img
            className="h-100"
            src={icon7}
            alt=""
          />
        </figure>
        <div className="   ">
        
        <h2 className=" text-[#1B223C] text-center my-auto text-[20px] font-bold">
        متعدد اللغات
      </h2>
      <p className="  text-center text-[#797878]  mb-2 text-[14px] font-light">
        مع إتقان أكثر من{" "}
        <span className=" font-sans font-normal"> 100 </span> لغة، يظهر{" "}
        <span className=" font-sans font-normal"> ChatGPT </span> و
        <span className=" font-normal font-sans"> Gemini </span>
        كنماذج لغوية متعددة الاستخدامات، مما يضمن تغطية لغوية شاملة.
      </p>
        
        
        </div>
  
      </div>
        
        
        
        
        
        
        
        </div>
        
        
        
        </div>
        
        
        </div>

        <div  className="  w-full md:p-5">
        <div className=" px-4    gap-4 grid grid-cols-1 justify-items-center mx-auto md:grid-cols-1 lg:grid-cols-1">
        <div className=" col-span-1">
        <div
        id="block-container"
        dir="rtl"
        className="border-2 grid grid-rows-4 text-start  p-8 py-4  sm:w-[350px] text-black h-[auto] bg-transparent rounded-[15px] border-[rgba(72, 69, 78, 0.5)]">
        <figure className="row-span-3  flex justify-center items-center">
          <img
            className="max-h-25"
            src={icon4}
            alt=""
          />
        </figure>
        <h2 className="text-[#1B223C] text-center row-span-1 my-auto text-[20px] font-bold">
          بحث في الوقت الفعلي
        </h2>
        <p className="row-span-1  text-[#797878] text-center mb-2 text-[14px] font-light">
          من خلال الاستفادة من اتصاله بالإنترنت، يستطيع{" "}
   
          <span className=" font-sans font-normal">Gemini</span> إجراء
          عمليات بحث على الويب في الوقت الفعلي، وتقديم معلومات دقيقة وحديثة.
        </p>
      </div>

        </div>
        <div className=" col-span-1">
       
        <div
        id="block-container"
        dir="rtl"
        className="border-2 grid grid-rows-3 text-start p-8  py-4 sm:w-[350px] text-black h-[auto] bg-transparent rounded-[15px] border-[rgba(72, 69, 78, 0.5)]">
        <figure className="row-span-1 flex justify-center items-center">
          <img
            className="max-h-[90px]"
            src={circle}
            alt=""
          />
        </figure>
        <h2 className="text-[#1B223C] text-center row-span-1 my-auto text-[20px] font-bold">
          مدعوم بـ <span className=" font-sans font-bold ">GPT-4o</span>
        </h2>
        <p className="row-span-1  text-[#797878] text-center  mb-2 text-[14px] font-light">
          يتميز <span className=" font-sans font-normal">GPT-4o</span>{" "}
          بالمهام التي تتطلب الإبداع والتفكير المتقدم. يمكنك الوصول إلى
          القدرات المبتكرة لـ{" "}
          <span className=" font-sans font-normal">GPT-4o</span> من خلال
          تطبيقنا.
        </p>
      </div>

       
       </div>
     

     </div>
        
        
        </div>
      
        
        
        </div>
      </div>
    </section>
  );
};

export default BlocksSection;